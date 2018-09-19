import React from "react";
import styled from "react-emotion";
import { Link } from "gatsby";
const AuthorImg = styled("img")`
  width: 40px;
  margin-left: 15px;
  border-radius: 50%;
`;
const AuthorHolder = styled("div")`
  display: flex;
  align-items: center;
`;
const DateBox = styled("p")`
  margin-bottom: 0;
`;

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
);

export default BlogHeader;
