import React, { useEffect, useState } from "react";
import { Page } from "../components/styles";
import Layout from "../components/layout";

function useFetch(url) {
  const [data, setDataState] = useState(null);
  const [loading, setLoadingState] = useState(true);
  useEffect(() => {
    setLoadingState(true);
    fetch(url)
      .then(j => j.json())
      .then(d => {
        setDataState(d);
        setLoadingState(false);
      });
  }, [url]);
  return { data, loading };
}

const ReleaseNotes = () => {
  const { data, loading } = useFetch(
    "https://raw.githubusercontent.com/Thorium-Sim/thorium/develop/client/src/releaseNotes.json"
  );
  if (loading) return "Loading...";
  if (data) {
    return (
      <Layout>
        <div className={`outerContainer`}>
          <Page>
            <h1>Release Notes</h1>
            {Object.entries(data).map(([key, value]) => (
              <div key={key}>
                <h2>{key}</h2>
                {value.features && value.features.length > 0 && (
                  <>
                    <h4>Features</h4>
                    <ul>
                      {value.features.map((f, i) => (
                        <li key={`${key}-feature-${i}`}>{f}</li>
                      ))}
                    </ul>
                  </>
                )}
                {value.fixes && value.fixes.length > 0 && (
                  <>
                    <h4>Bug Fixes</h4>
                    <ul>
                      {value.fixes.map((f, i) => (
                        <li key={`${key}-fixes-${i}`}>{f}</li>
                      ))}
                    </ul>
                  </>
                )}
                <hr />
              </div>
            ))}
          </Page>
        </div>
      </Layout>
    );
  }
  return null;
};

export default ReleaseNotes;
