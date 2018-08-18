import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'
import Search from './search'

const HeaderContainer = styled('div')`
  box-sizing: border-box;
  background: #37203c;
  color: #fff;
  padding: 9px 0;
  position: fixed;
  width: 100%;
  z-index: 6;
`
const HeaderImage = styled('img')`
  height: 100%;
  margin: 0;
  padding: 0;
  padding-right: 1rem;
`
const HeaderInner = styled('div')`
  max-width: 960px;
  margin: 0 auto;
  height: 40px;
  padding: 0.2rem 0.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 736px) {
    padding: 0;
  }
`
const HeaderText = styled('h3')`
  margin: 0;
  flex: 1;
`
const HeaderNav = styled('nav')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 598px;
  @media only screen and (max-width: 736px) {
    background-color: #54245f;
    width: 100%;
    justify-content: space-between;
  }
`
const linkStyle = css`
  border: 0;
  color: hsla(0, 0%, 100%, 0.8);
  display: flex;
  margin: 0;
  font-weight: 300;
  line-height: 1.2em;
  padding: 6px 10px;
  height: 32px;
  font-size: 1em;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`
const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderInner>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <HeaderImage
          src={require('../img/thorium.svg')}
          alt="Thorium"
          draggable="false"
        />
      </Link>
      <HeaderText>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </HeaderText>
      <HeaderNav>
        <Search />
        <Link css={linkStyle} to="/docs/overview">
          Docs
        </Link>
        <Link css={linkStyle} to="/help">
          Help
        </Link>
        <Link css={linkStyle} to="/blog">
          Blog
        </Link>
      </HeaderNav>
    </HeaderInner>
  </HeaderContainer>
)

export default Header
