import React, { Component } from "react";
import docsearch from "docsearch.js";
import styled from "react-emotion";

import "docsearch.js/dist/cdn/docsearch.css";

const SearchWrapper = styled("span")`
  position: relative;
  display: inline-block;
  @media only screen and (max-width: 736px) {
    flex: 1;
  }
  &:after {
    background: #e5e5e5;
    content: " ";
    height: 7px;
    left: 15px;
    position: absolute;
    transform: rotate(-45deg);
    top: 50%;
    width: 3px;
    z-index: 1;
  }
  &:before {
    border: 3px solid #e5e5e5;
    border-radius: 50%;
    content: " ";
    display: block;
    height: 11px;
    left: 6px;
    width: 11px;
    position: absolute;
    top: 45%;
    z-index: 1;
    transform: translateY(-58%);
  }
`;
const SearchInput = styled("input")`
  padding-left: 25px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  color: #fff;
  outline: none;
  position: relative;
  width: 170px;
  transition: width 0.5s ease;
  &:focus {
    color: #fff;
    width: 220px;
  }
`;
class Search extends Component {
  searchRef = React.createRef();
  componentDidMount() {
    docsearch({
      apiKey: "215cc1c55f0d508b47d27f3ae089c7e0",
      indexName: "thoriumsim",
      inputSelector: `#search-ref`,
      debug: false // Set debug to true if you want to inspect the dropdown
    });
  }
  render() {
    return (
      <SearchWrapper>
        <SearchInput type="text" placeholder="Search..." id="search-ref" />
      </SearchWrapper>
    );
  }
}

export default Search;
