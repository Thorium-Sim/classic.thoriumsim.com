import React, { useEffect, useState } from "react";
import { Page } from "../components/styles";
import Layout from "../components/layout";
import showdown from "showdown";
const converter = new showdown.Converter();

function useFetch(url) {
  const [data, setDataState] = useState(null);
  const [loading, setLoadingState] = useState(true);
  useEffect(() => {
    setLoadingState(true);
    fetch(url)
      .then(j => j.text())
      .then(d => {
        setDataState(d);
        setLoadingState(false);
      });
  }, [url]);
  return { data, loading };
}

const ReleaseNotes = () => {
  const { data, loading } = useFetch(
    "https://raw.githubusercontent.com/Thorium-Sim/thorium/master/CHANGELOG.md"
  );
  const html = converter.makeHtml(data);
  if (loading) return "Loading...";
  if (data) {
    console.log(data);
    return (
      <Layout>
        <div className={`outerContainer`}>
          <Page>
            <h1>Release Notes</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Page>
        </div>
      </Layout>
    );
  }
  return null;
};

export default ReleaseNotes;
