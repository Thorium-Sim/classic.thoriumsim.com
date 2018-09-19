import React from "react";
import { graphql } from "gatsby";
import { Page, FlexArea, FlexAside, FlexSection } from "../components/styles";
import RecentPosts from "../components/recentPosts";
import BlogHeader from "../components/blogHeader";
import Layout from "../components/layout";

const BlogTemplate = ({
  data: {
    markdownRemark: {
      fileAbsolutePath,
      html,
      frontmatter: { author, authorFBID, authorURL, date, title }
    },
    allMarkdownRemark: { edges }
  }
}) => {
  const regex = /.*\/blog\/(\d{4})-(\d{2})-(\d{2})-(.*)\.md/i;
  const url = fileAbsolutePath.replace(regex, "/blog/$1/$2/$3/$4");
  return (
    <Layout>
      <div className="outerContainer">
        <Page>
          <FlexSection>
            <FlexAside>
              <RecentPosts data={edges} />
            </FlexAside>
            <FlexArea>
              <BlogHeader
                url={url}
                title={title}
                date={date}
                author={author}
                authorURL={authorURL}
                authorFBID={authorFBID}
              />

              <article>{require("html-react-parser")(html)}</article>
            </FlexArea>
          </FlexSection>
        </Page>
      </div>
    </Layout>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fileAbsolutePath
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        authorURL
        authorFBID
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/blog/**" } }) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
