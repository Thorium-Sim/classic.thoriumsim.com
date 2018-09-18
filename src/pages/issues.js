import React, { Component } from "react";
import styled, { css } from "react-emotion";
import { Page } from "../components/styles";
import Layout from "../components/layout";
import { auth, firestore, google } from "../utils/firebase";
import createUser from "../utils/createUser";
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

const wait = func => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(func());
    }, 100);
  });
};
const url = "https://api.github.com/repos/thorium-sim/thorium/issues?page=";
async function getIssues(page = 1) {
  return await fetch(`${url}${page}`)
    .then(res => res.json())
    .then(async res => {
      const moreIssues =
        res.length > 0 ? await wait(() => getIssues(page + 1)) : [];
      return res.concat(moreIssues);
    });
}

const issue = css`
  display: flex;
  height: 50px;
  align-items: center;
  h4 {
    flex: 1;
  }
`;
const upvote = css`
  font-size: 24px;
  display: flex;
  align-items: center;
  width: 50px;
  margin-right: 15px;
  span {
    flex: 1;
    float: right;
    margin-left: 10px;
  }
  svg {
    flex: 1;
    width: 20px;
    path {
      fill: #0c0;
      cursor: pointer;
      &:hover {
        fill: #0a0;
      }
      &:active {
        fill: #080;
      }
    }
  }
`;
const Issue = ({
  id,
  title,
  html_url: htmlUrl,
  user = {},
  upvoteCount = 0
}) => {
  const { upvotes: upvoteArray = [] } = user;
  const upvoteClick = () => {
    if (upvoteArray.indexOf(id) > -1) return;
    firestore
      .collection("users")
      .doc(auth.currentUser.uid)
      .update({
        upvotes: [...upvoteArray, id]
      });
  };

  return (
    <div className={issue}>
      <div className={upvote}>
        {upvoteArray.indexOf(id) === -1 && (
          <svg viewBox="0 0 164 156">
            <path d="m0,86h36v70h92V86h36L82,0" onClick={upvoteClick} />
          </svg>
        )}
        <span>{upvoteCount}</span>
      </div>
      <h4>
        <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h4>
    </div>
  );
};

class Issues extends Component {
  state = {
    loading: true,
    issues: [],
    users: []
  };
  componentDidMount = async () => {
    this.setState({
      issues: await getIssues()
    });
    auth.onAuthStateChanged(user => {
      this.setState({ user, loading: false });
    });
    firestore.collection("users").onSnapshot(snapshot => {
      this.setState({
        users: snapshot.docs.map(d => ({
          ...d.data(),
          id: d.id
        }))
      });
    });
  };
  signIn = provider => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        createUser(result).then(() => {
          this.setState({ signIn: false });
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  render() {
    const { issues, loading, signIn, users } = this.state;
    const upvoteCount = users.reduce((prev, next) => {
      const { upvotes: upvotesArray = [] } = next;
      upvotesArray.forEach(u => {
        if (!prev[u]) prev[u] = 0;
        prev[u]++;
      });
      return prev;
    }, {});
    const issuesWithCount = issues
      .map(i => ({ ...i, upvoteCount: upvoteCount[i.id] }))
      .sort((a, b) => {
        if (!a.upvoteCount) return 1;
        if (!b.upvoteCount) return -1;
        if (a.upvoteCount > b.upvoteCount) return 1;
        if (a.upvoteCount < b.upvoteCount) return -1;
        return 0;
      });
    return (
      <Layout>
        <div className={`outerContainer `}>
          <Page>
            {
              <div>
                <h1>Thorium Issues</h1>
                {signIn && <div>Signing in...</div>}
                {(() => {
                  if (auth.currentUser) {
                    return (
                      <div>
                        {issuesWithCount.map(i => (
                          <Issue
                            {...i}
                            key={`issue-${i.id}`}
                            user={users.find(
                              u => u.id === auth.currentUser.uid
                            )}
                          />
                        ))}
                      </div>
                    );
                  }
                  if (loading) return <div>Loading...</div>;
                  return (
                    <Button onClick={() => this.signIn(google)}>
                      Sign In to Upvote
                    </Button>
                  );
                })()}
              </div>
            }
          </Page>
        </div>
      </Layout>
    );
  }
}
export default Issues;
