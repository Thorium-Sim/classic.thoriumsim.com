import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "react-emotion";
import { Page, FlexSection } from "../components/styles";
import Layout from "../components/layout";
import { default as GImg } from "gatsby-image";

export const users = [
  {
    caption: "The Lion's Gate Center",
    image: "tlgc",
    infoLink: "https://thelionsgatecenter.com"
  },
  {
    caption: "Farpoint Space Center",
    image: "farpoint",
    infoLink: "https://spacecamputah.org"
  },
  {
    caption: "Christa McAuliffe Space Center",
    image: "cmsc",
    infoLink: "https://spacecenter.alpineschools.org"
  },
  {
    caption: "Telos Discovery Space Center",
    image: "tdsc",
    infoLink: "https://discoveryspacecenter.com"
  }
];

const donors = [
  "Thomas Delclite 🇧🇪",
  "Chuck Smith 🇺🇸",
  "The Lion's Gate Center 🇺🇸",
  "Brent Anderson 🇺🇸",
  "Maeson Busk 🇺🇸",
  "The Christa McAuliffe Space Education Center 🛰",
  "Victor Williamson 👽",
  "The Telos Discovery Space Center 🌌"
];

export const A = styled("a")`
  display: block;
  flex: 1;
  min-width: 40%;
  margin: 1rem;
`;
export const Img = styled("img")`
  width: 100%;
`;
const Users = ({ data }) => {
  return (
    <Layout>
      <div
        className={`outerContainer ${css`
          background-color: black;
        `}`}
      >
        <Page>
          <h1>A Friendly Community</h1>
          <p>
            Thorium is happy to be supported by an ever-increasing number of
            organizations, donors, and contributors. Thank you for all you do to
            make Thorium possible.
          </p>
          <h2>Organizations</h2>
          <FlexSection>
            {users.map(u => {
              const image = data.sponsors.edges.find(
                s => s.node.name === u.image
              );
              return (
                <A
                  href={u.infoLink}
                  key={u.caption}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GImg
                    alt={u.caption}
                    fluid={image && image.node.childImageSharp.fluid}
                  />
                </A>
              );
            })}
          </FlexSection>
          <h2>Donors</h2>
          <ul>
            {donors.map(d => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </Page>
      </div>
    </Layout>
  );
};
export default Users;

export const query = graphql`
  query {
    sponsors: allFile(filter: { dir: { glob: "**/sponsors" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(
              maxWidth: 300
              traceSVG: { background: "black", color: "#333" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
