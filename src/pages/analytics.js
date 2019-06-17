import React from "react";
import { Page } from "../components/styles";
import Layout from "../components/layout";
import useLocalStorage from "../utils/useLocalStorage";
import DatePicker from "react-datepicker";
import createUser from "../utils/createUser";
import styled from "react-emotion";

import "react-datepicker/dist/react-datepicker.css";
import eventsList from "../utils/eventsList";
import { firestore, auth, google } from "../utils/firebase";

const Button = styled("button")`
  text-decoration: none;
  color: #b99bd8;
  background-color: transparent;
  transition: background-color 0.3s ease;
  margin-top: 5px;
  &:visited {
    color: #b99bd8;
  }
  &:hover {
    text-decoration: none;
    background-color: #6b5483;
  }
  border: solid 1px #b99bd8;
  border-radius: 5px;
  padding: 2px 15px;
`;

function transforms(event, data) {
  switch (event) {
    case "sendMessage":
      const { message, ...rest } = data;
      return { ...rest, ...message };
    default:
      return data;
  }
}

const Analytics = () => {
  const [accessToken, setAccessToken] = useLocalStorage(
    "analytics-access-token",
    ""
  );
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [event, setEvent] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  React.useEffect(() => {
    const tokens = ["thorium-secret-key-062458", "emily-paxman-is-cool"];

    if (!tokens.includes(accessToken)) {
      setError("Access token is invalid.");
    }
    if (startDate && endDate) {
      if (startDate > endDate) {
        setError("Start Date must be before end date.");
      }
      if (startDate.getTime() + 1000 * 60 * 60 * 24 * 7 < endDate.getTime()) {
        setError("End Date must be less than 7 days after start date.");
      }
    }
    setError(null);
  }, [startDate, endDate]);
  function submit() {
    if (error) return;

    setLoading(true);
    firestore
      .collection("downloadRequests")
      .doc(accessToken)
      .get()
      .then(res => {
        const data = res.data() || {};
        return firestore
          .collection("downloadRequests")
          .doc(accessToken)
          .set({
            [event]: data[event] ? data[event] + 1 : 1
          });
      })
      .catch(err => {
        setError(`Error logging download request: ${err.message}`);
      })
      .then(() => {
        let query = firestore
          .collection("events")
          .where("timestamp", ">=", startDate)
          .where("timestamp", "<=", endDate);
        if (event !== "all") {
          query = query.where("event", "==", event);
        }
        return query.get();
      })
      .then(res => {
        const data = res.docs.map(d =>
          Object.assign({}, transforms(event, d.data()), {
            timestamp: d.data().timestamp.toDate()
          })
        );
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        const blob = new Blob([JSON.stringify(data)], { type: "octet/stream" });
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = `${event}-download.json`;
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    auth.onAuthStateChanged(u => {
      setUser(u);
    });
  }, []);
  const signIn = provider => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        createUser(result).then(() => {});
      })
      .catch(function(err) {
        console.error(err);
      });
  };
  return (
    <Layout>
      <div className="outerContainer">
        <Page style={{ paddingBottom: "25vh" }}>
          <h1>Thorium Analytics</h1>
          {user ? (
            <>
              <p>
                Use this page to download analytics data collected through
                Thorium. You must supply a personal access token to download
                this data. Please{" "}
                <a href="mailto:alex@fyreworks.us">get in touch</a> if you would
                like an access token.
              </p>
              <div>
                <label>
                  Access Token
                  <br />
                  <input
                    value={accessToken}
                    onChange={e => setAccessToken(e.target.value)}
                  />
                </label>
              </div>

              <div>
                <label>
                  Start Date
                  <br />
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                  />
                </label>
              </div>
              <div>
                <label>
                  End Date
                  <br />
                  <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Event
                  <br />
                  <select
                    value={event || ""}
                    onChange={e => setEvent(e.target.value)}
                  >
                    <option value={""}>Choose an event</option>
                    {/* <option value={"all"}>All</option> */}
                    {eventsList.map(e => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              {error && <em>{error}</em>}
              {event === "all" && (
                <p>
                  Downloading all of the events is an expensive operation, and
                  costs me a lot of money. If you choose this option, consider{" "}
                  <a href="https://www.patreon.com/thoriumsim">donating.</a>
                </p>
              )}
              {loading ? (
                "Loading... Please wait."
              ) : (
                <Button
                  onClick={submit}
                  disabled={
                    error || !startDate || !endDate || !event || !accessToken
                  }
                >
                  Download Data
                </Button>
              )}
            </>
          ) : (
            <Button onClick={() => signIn(google)}>
              Sign In to Access Analytics
            </Button>
          )}
        </Page>
      </div>
    </Layout>
  );
};

export default Analytics;
