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
          <h3>Thorium Mobile</h3>
          <p>
            Thorium Mobile is a custom application designed to run on iOS and
            Android devices. It does not replace Thorium for desktop, but
            supplements and augments it.
          </p>
          <a
            href="https://itunes.apple.com/us/app/thorium-mobile/id1438244424"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../img/appstore.svg")}
              alt="Download on the App Store"
            />
          </a>
          <p>
            Thorium Mobile for Android isn't on the Google Play store yet, but
            you can still run it. Follow these instructions:
          </p>
          <ol>
            <li>
              <a
                href="https://expo.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the Expo app.
              </a>
            </li>
            <li>
              Search for "Thorium Mobile" or access the app's page{" "}
              <a
                href="https://expo.io/@alexanderson1993/thorium-mobile"
                target="_blank"
                rel="noopener noreferrer"
              />
              here.
            </li>
          </ol>
          <p>
            Alternatively, you can scan this QR code in the Expo app:{" "}
            <img
              src={require("../img/thoriumMobile.png")}
              alt="Thorium Mobile QR Code"
            />
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
