import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const AuthorImg = styled('img')`
    width: 40px;
    margin-left: 15px;
    border-radius: 50%;`
const AuthorHolder = styled('div')`
display: flex;
align-items: center;`
const DateBox = styled('p')`
margin-bottom:0;
`
const BlogHeader = ({ url, title, date, author, authorURL, authorFBID }) => (
  <header>
    <h1>
      <Link to={url}>{title}</Link>
    </h1>
    <DateBox>{date}</DateBox>
    {author && (
      <AuthorHolder>
        <p>
          {authorURL ? (
            <a href={authorURL} target="_blank" rel="noreferrer noopener">
              {author}
            </a>
          ) : (
            author
          )}
        </p>
        {authorFBID && (
          <div>
            {authorURL ? (
              <a href={authorURL} target="_blank" rel="noreferrer noopener">
                <AuthorImg
                  src={`https://graph.facebook.com/${authorFBID}/picture/?height=200&width=200`}
                  alt={author}
                />
              </a>
            ) : (
              <AuthorImg
                src={`https://graph.facebook.com/${authorFBID}/picture/?height=200&width=200`}
                alt={author}
              />
            )}
          </div>
        )}
      </AuthorHolder>
    )}
  </header>
)
const Wrapper = styled('div')`
background-color: #333;
padding: 50px 0;
color: white;
`
const Page = styled('div')`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    line-height: 1.7;
`

const BlogTemplate = ({
  data: {
    markdownRemark: {
      id,
      fileAbsolutePath,
      html,
      frontmatter: { author, authorFBID, authorURL, date, title },
    },
  },
}) => {
  const regex = /.*\/blog\/(\d{4})-(\d{2})-(\d{2})-(.*)\.md/i
  const url = fileAbsolutePath.replace(regex, '/blog/$1/$2/$3/$4')
  return (
    <Wrapper className="wrapper">
      <Page>
        <BlogHeader
          url={url}
          title={title}
          date={date}
          author={author}
          authorURL={authorURL}
          authorFBID={authorFBID}
        />
        <article>{require('html-react-parser')(html)}</article>
      </Page>
    </Wrapper>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
  markdownRemark(id: {eq: $id}) {
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
}
`
