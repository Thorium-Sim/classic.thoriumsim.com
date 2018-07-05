import React from 'react'
import Link from 'gatsby-link'
import {
  Wrapper,
  Page,
  FlexSection,
  FlexArea,
  FlexAside,
} from '../components/styles'
import DocsSidebar from '../components/docsSidebar'

const DocsTemplate = ({
  data: {
    markdownRemark: {
      id,
      html,
      fields: { slug },
      frontmatter: { title },
    },
  },
}) => (
  <Wrapper className="wrapper">
    <Page>
      <FlexSection>
        <FlexAside>
          <DocsSidebar />
        </FlexAside>
        <FlexArea>
          <header>
            <h1>
              <Link to={slug}>{title}</Link>
            </h1>
          </header>
          <article>{require('html-react-parser')(html)}</article>
        </FlexArea>
      </FlexSection>
    </Page>
  </Wrapper>
)

export default DocsTemplate

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
      }
    }
  }
`
