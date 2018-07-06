import React, { Fragment } from 'react'
import { Page, FlexSection, FlexAside, FlexArea } from '../components/styles'
import BlogHeader from '../components/blogHeader'
import RecentPosts from '../components/recentPosts'

const regex = /.*\/blog\/(\d{4})-(\d{2})-(\d{2})-(.*)\.md/i

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges.sort(
    (
      {
        node: {
          frontmatter: { date: a },
        },
      },
      {
        node: {
          frontmatter: { date: b },
        },
      }
    ) => {
      if (a > b) return -1
      if (a < b) return 1
      return 0
    }
  )
  return (
    <div className="outerContainer">
      <Page>
        <FlexSection>
          <FlexAside>
            <RecentPosts data={edges} />
          </FlexAside>
          <FlexArea>
            {posts.map(
              ({
                node: {
                  id,
                  fileAbsolutePath,
                  excerpt,
                  frontmatter: {
                    author,
                    authorFBID,
                    authorURL,
                    formatDate,
                    title,
                  },
                },
              }) => {
                const url = fileAbsolutePath.replace(regex, '/blog/$1/$2/$3/$4')
                return (
                  <Fragment key={id}>
                    <BlogHeader
                      url={url}
                      title={title}
                      date={formatDate}
                      author={author}
                      authorURL={authorURL}
                      authorFBID={authorFBID}
                    />
                    <p>{excerpt}</p>
                    <hr />
                  </Fragment>
                )
              }
            )}
          </FlexArea>
        </FlexSection>
      </Page>
    </div>
  )
}
export default Blog

export const pageQuery = graphql`
  query BlogList {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/blog/**" } }) {
      edges {
        node {
          id
          fileAbsolutePath
          excerpt
          frontmatter {
            title
            date
            formatDate: date(formatString: "MMMM DD, YYYY")
            authorURL
            author
            authorFBID
          }
        }
      }
    }
  }
`
