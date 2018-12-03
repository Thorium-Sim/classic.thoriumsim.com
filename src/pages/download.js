import React from "react";
import styled from "react-emotion";
import { Page } from "../components/styles";
import Layout from "../components/layout";
import { OutboundLink } from "gatsby-plugin-google-analytics";

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
class Download extends React.Component {
  componentDidMount() {
    fetch("https://api.github.com/repos/thorium-sim/thorium-kiosk/releases")
      .then(res => res.json())
      .then(res => {
        const release = res[0];
        const mac = release.assets.find(a => a.name.indexOf("mac.zip") > -1)
          .browser_download_url;
        const win = release.assets.find(a => a.name.indexOf(".exe") > -1)
          .browser_download_url;
        const linux = release.assets.find(a => a.name.indexOf("AppImage") > -1)
          .browser_download_url;
        this.setState({ mac, win, linux });
      });
  }
  render() {
    const { mac, win, linux } = this.state;
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

            <h1>Download Thorium Kiosk</h1>
            <p>
              A kiosk application for running Thorium with a locked down user
              interface. Supports special commands like shutting down computers
              or quitting the program from Core.
            </p>

            {mac && (
              <FlexContainer>
                <DownloadLink href={mac}>
                  <img
                    src={require("../img/download-apple.svg")}
                    alt="Download macOS"
                  />
                  macOS
                </DownloadLink>
                <DownloadLink href={win}>
                  <img
                    src={require("../img/download-windows.svg")}
                    alt="Download Windows"
                  />
                  Windows
                </DownloadLink>
                <DownloadLink href={linux}>
                  <img
                    src={require("../img/download-linux.svg")}
                    alt="Download Linux"
                  />
                  Linux
                </DownloadLink>
              </FlexContainer>
            )}

            <h3>Thorium Mobile</h3>
            <p>
              Thorium Mobile is a custom application designed to run on iOS and
              Android devices. It does not replace Thorium for desktop, but
              supplements and augments it.
            </p>
            <div style={{ display: "flex" }}>
              <OutboundLink
                style={{ marginRight: 20 }}
                href="https://itunes.apple.com/us/app/thorium-mobile/id1438244424"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../img/appstore.svg")}
                  alt="Download on the App Store"
                />
              </OutboundLink>
              <OutboundLink
                href="https://play.google.com/store/apps/details?id=us.fyreworks.thoriumMobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../img/playstore.svg")}
                  alt="Download on the Play Store"
                />
              </OutboundLink>
            </div>
            <p>You can also run it on Expo. Follow these instructions:</p>
            <ol>
              <li>
                <OutboundLink
                  href="https://expo.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download the Expo app.
                </OutboundLink>
              </li>
              <li>
                Search for "Thorium Mobile" or access the app's page{" "}
                <OutboundLink
                  href="https://expo.io/@alexanderson1993/thorium-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                here.
              </li>
            </ol>
            <p>Alternatively, you can scan this QR code in the Expo app: </p>
            <img
              src={require("../img/thoriumMobile.png")}
              alt="Thorium Mobile QR Code"
            />
            <p>
              Thorium is Open Source software, and the source code can be
              downloaded and compiled from the{" "}
              <OutboundLink href="https://github.com/thorium-sim/thorium">
                code repository
              </OutboundLink>
              . Instructions to build Thorium are included in the repository.
              Assets and content can be collected separately from third-parties.
            </p>
            <OutboundLink
              href="https://github.com/thorium-sim/thorium"
              className="button"
            >
              Get the Code
            </OutboundLink>
          </Page>
        </div>
      </Layout>
    );
  }
}
export default Download;
