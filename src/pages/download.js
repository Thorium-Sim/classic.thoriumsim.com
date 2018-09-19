import React from "react";
import styled from "react-emotion";
import { Page } from "../components/styles";
import Layout from "../components/layout";

const FlexContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const DownloadLink = styled("a")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #272229;
  color: white;
  border-radius: 10px;
  transition: background-color 0.2s ease;
  width: 25%;
  padding: 10px;
  margin: 30px 0px;
  &:hover {
    background-color: #3d3541;
    text-decoration: none;
  }
  img {
    max-height: 80px;
  }
`;
const Download = () => {
  return (
    <Layout>
      <div className="outerContainer">
        <Page>
          <h1>Download Thorium</h1>
          <FlexContainer>
            <DownloadLink href="https://s3.amazonaws.com/thoriumsim/thorium-macos.zip">
              <img
                src={require("../img/download-apple.svg")}
                alt="Download macOS"
              />
              macOS
            </DownloadLink>
            <DownloadLink href="https://s3.amazonaws.com/thoriumsim/thorium-win.exe.zip">
              <img
                src={require("../img/download-windows.svg")}
                alt="Download Windows"
              />
              Windows
            </DownloadLink>
            <DownloadLink href="https://s3.amazonaws.com/thoriumsim/thorium-linux.zip">
              <img
                src={require("../img/download-linux.svg")}
                alt="Download Linux"
              />
              Linux
            </DownloadLink>
          </FlexContainer>
          <p>
            Note: Be sure to extract the Thorium executable from the .zip
            archive before running.
          </p>
          <p>
            Thorium is Open Source software, and the source code can be
            downloaded and compiled from the{" "}
            <a href="https://github.com/thorium-sim/thorium">code repository</a>
            . Instructions to build Thorium are included in the repository.
            Assets and content can be collected separately from third-parties.
          </p>
          <a href="https://github.com/thorium-sim/thorium" className="button">
            Get the Code
          </a>
        </Page>
      </div>
    </Layout>
  );
};
export default Download;
