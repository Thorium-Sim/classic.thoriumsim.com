import React from "react";
import { Link, graphql } from "gatsby";
import styled from "react-emotion";
import { Page, FlexSection, FlexArea, FlexAside } from "../components/styles";
import DocsSidebar from "../components/docsSidebar";
import Layout from "../components/layout";

const Button = styled("a")`
  text-decoration: none;
  color: #b99bd8;
  background-color: transparent;
  transition: background-color 0.3s ease;
  float: right;
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
const DocsTemplate = ({
  data: {
    allMarkdownRemark: { edges },
    markdownRemark
  }
}) => (
  <Layout>
    <div className="outerContainer">
      <Page>
        <FlexSection>
          <FlexAside>
            <DocsSidebar
              data={edges}
              category={markdownRemark.frontmatter.category}
              subcategory={markdownRemark.frontmatter.subcategory}
              id={markdownRemark.id}
            />
          </FlexAside>
          <FlexArea>
            <header>
              <Button
                href={`/admin/#/collections/docs/entries/${
                  (markdownRemark.fields
                    ? markdownRemark.fields.slug
                    : ""
                  ).split("/")[2]
                }`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Edit
              </Button>
              <h1>
                <Link to={markdownRemark.fields && markdownRemark.fields.slug}>
                  {markdownRemark.frontmatter.title}
                </Link>
              </h1>
            </header>
            <article>
              {require("html-react-parser")(markdownRemark.html)}
            </article>
          </FlexArea>
        </FlexSection>
      </Page>
    </div>
  </Layout>
);

export default DocsTemplate;

export const pageQuery = graphql`
  query DocByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        category
        subcategory
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/docs/**" } }) {
      edges {
        node {
          id
          fileAbsolutePath
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            sidebar_label
            category
            subcategory
            position
          }
        }
      }
    }
  }
`;
