import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./layout.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Container = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled("div")`
  margin-top: 50px;
  flex: 1;
  background-color: #333;
`;
// const Content = styled('div')`
//   margin: 0 auto;
//   max-width: 960px;
//   width: 100%;
//   padding: 0px 1.0875rem 1.45rem;
//   padding-top: 1.45rem;
// `
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            {
              name: "keywords",
              content:
                "thorium, simulator, starship, controls, space, edventure, education, learning, wonder"
            }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>{children}</Wrapper>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </Container>
    )}
  />
);

export default Layout;
