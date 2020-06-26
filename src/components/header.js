import React from "react";
import { Link } from "gatsby";
import styled from "react-emotion";
import Search from "./search";

const Banner = styled(Link)`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  box-sizing: border-box;
  color: #fff;
  background: rgba(76, 1, 175, 1);
  background: linear-gradient(
    135deg,
    rgba(198, 54, 189, 1) 0%,
    rgba(76, 1, 175, 1) 100%
  );
  padding: 9px 0;
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 6;
`;
const HeaderContainer = styled("div")`
  box-sizing: border-box;
  background: #37203c;
  color: #fff;
  padding: 9px 0;
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 6;
`;
const HeaderImage = styled("img")`
  height: 100%;
  margin: 0;
  padding: 0;
  padding-right: 1rem;
`;
const HeaderInner = styled("div")`
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
`;
const HeaderText = styled("h3")`
  margin: 0;
  flex: 1;
`;
const HeaderNav = styled("nav")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 598px;
  @media only screen and (max-width: 736px) {
    background-color: #54245f;
    width: 100%;
    justify-content: space-between;
  }
`;
const HeaderLink = styled(Link)`
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
`;
const HeaderLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Header = ({ siteTitle }) => (
  <>
    <Banner to="/nova">
      Announcing Thorium Nova - Bridge Simulation Reimagined
    </Banner>
    <HeaderContainer>
      <HeaderInner>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <HeaderImage
            src={require("../img/thorium.svg")}
            alt="Thorium"
            draggable="false"
          />
        </Link>
        <HeaderText>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </HeaderText>
        <HeaderNav>
          <Search />
          <HeaderLinks>
            <HeaderLink to="/docs/overview">Docs</HeaderLink>
            <HeaderLink to="/help">Help</HeaderLink>
            <HeaderLink to="/releaseNotes">Release Notes</HeaderLink>
            <HeaderLink to="/blog">Blog</HeaderLink>
          </HeaderLinks>
        </HeaderNav>
      </HeaderInner>
    </HeaderContainer>
  </>
);

export default Header;
