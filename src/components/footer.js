import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "gatsby";
import WidgetBot from "./widgetBot";

const FooterContainer = styled("footer")`
  background-color: #111;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const Section = styled("section")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 960px;
  margin: 0 20px;
`;
const InnerSection = styled("div")`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const linkStyle = css`
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s ease;
  text-decoration: none;
  margin-bottom: 5px;
  padding-left: 10px;
  font-weight: 200;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
const navHome = css`
  flex: 1;
`;
const logoStyle = css`
  margin: 20px 0;
  opacity: 0.5;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 1;
  }
`;
const copyStyle = css`
  color: rgba(255, 255, 255, 0.5);
`;

class Footer extends React.Component {
  componentDidMount = () => {};
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <FooterContainer>
        <Section>
          <Link to="/" className={navHome}>
            <img
              src={require("../img/thorium.svg")}
              alt="Thorium"
              draggable="false"
              width="66"
              height="58"
            />
          </Link>
          <InnerSection>
            <h4>Docs</h4>
            <Link className={linkStyle} to="/docs/getting_started">
              Getting Started
            </Link>
            <Link className={linkStyle} to="/docs/mission_writing">
              Mission Writing
            </Link>
            <Link className={linkStyle} to="/docs/developers">
              Developers
            </Link>
          </InnerSection>
          <InnerSection>
            <h4>Community</h4>
            <Link className={linkStyle} to="/users">
              User Showcase
            </Link>
            <a className={linkStyle} href="https://discord.gg/UvxTQZz">
              Project Chat
            </a>
            <a
              className={linkStyle}
              href="https://twitter.com/thoriumsim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </InnerSection>
          <InnerSection>
            <h4>More</h4>
            <Link className={linkStyle} to="/blog">
              Blog
            </Link>
            <a
              className={linkStyle}
              href="https://github.com/thorium-sim/thorium"
            >
              GitHub
            </a>
          </InnerSection>
        </Section>

        <a
          className={`fbOpenSource ${logoStyle}`}
          href="https://fyreworks.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../img/oss_logo.svg")}
            alt="Fyreworks"
            width="170"
            height="45"
          />
        </a>
        <section className={copyStyle}>
          Copyright &copy; {currentYear} Fyreworks LLC.
        </section>
        <WidgetBot server="390968011605147648" channel="391235306663182337" />
      </FooterContainer>
    );
  }
}

export default Footer;
