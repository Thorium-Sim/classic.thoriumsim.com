import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const regex = /.*\/blog\/(\d{4})-(\d{2})-(\d{2})-(.*)\.md/i

const Li = styled('li')`
  list-style: none;
`
const RecentPosts = ({ data }) => {
  const posts = data
    .sort(
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
    .slice(0, 5)
  console.log(posts)
  return (
    <div>
      <h4>Recent Posts</h4>
      <ul>
        {posts.map(
          ({
            node: {
              id,
              fileAbsolutePath,
              frontmatter: { title },
            },
          }) => {
            return (
              <Li key={id}>
                <Link to={fileAbsolutePath.replace(regex, '/blog/$1/$2/$3/$4')}>
                  {title}
                </Link>
              </Li>
            )
          }
        )}
      </ul>
    </div>
  )
}

//<li key={id}>{title}</li>

export default RecentPosts
