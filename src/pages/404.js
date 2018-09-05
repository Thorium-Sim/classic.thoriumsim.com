import React from "react";
import { Link } from "gatsby";
import styled, { css } from "react-emotion";
import Layout from "../components/layout";

const Container = styled("div")`
  background-color: black;
  position: relative;
  height: calc(0.5625 * 100vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled("h1")`
  color: red;
  z-index: 2;
  font-size: 6rem;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
    2px 2px 0 black, 0px 0px 20px black;
`;
const Text = styled("p")`
  color: white;
  font-size: 3rem;
  z-index: 2;
`;

const linkStyle = css`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: white;
  }
  &:visited {
    color: #e570ff;
    &:hover {
      color: #c540dd;
    }
  }
`;
const Video = styled("video")`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: 1;
`;
const NotFoundPage = () => (
  <Layout>
    <Container>
      <Header>RED ALERT</Header>
      <Text>
        Page not found. Return{" "}
        <Link className={linkStyle} to="/">
          Home
        </Link>
      </Text>
      <Video autoPlay loop>
        <source src={require("../videos/404.mp4")} type="video/mp4" />
        <source src={require("../videos/404.webm")} type="video/webm" /> Your
        browser does not support the video tag.
      </Video>
    </Container>
  </Layout>
);

export default NotFoundPage;
