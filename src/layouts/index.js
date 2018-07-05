import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { css } from 'react-emotion'

import './style.css'
import Header from '../components/header'
import Footer from '../components/footer'

const Container = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Wrapper = styled('div')`
  margin-top: 50px;
  flex: 1;
  background-color: white;
`
// const Content = styled('div')`
//   margin: 0 auto;
//   max-width: 960px;
//   width: 100%;
//   padding: 0px 1.0875rem 1.45rem;
//   padding-top: 1.45rem;
// `
const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        {
          name: 'keywords',
          content:
            'thorium, simulator, starship, controls, space, edventure, education, learning, wonder',
        },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Wrapper>{children()}</Wrapper>
    <Footer />
  </Container>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
