import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import styled from "react-emotion";
import Img from "gatsby-image";

const BioWrapper = styled.div`
  width: 100%;
  color: #111;
  box-shadow: 0 -20px 25px -5px rgba(0, 0, 0, 0.1),
    0 -10px 10px -5px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23e0d6f0' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E");
  * {
    font-size: 1rem !important;
  }
  h4 {
    text-align: left;
    font-size: 1.3rem !important;
  }
  a {
    color: #4c01af;
  }
`;

const InnerContent = styled.div`
  padding: 2rem 0;
  width: 700px;
  max-width: calc(100% - 4rem);
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  margin-right: 3rem;
  & > * {
    border-radius: 50%;
  }
`;
const Bio = () => {
  return (
    <StaticQuery
      query={graphql`
        query bioQuery {
          me: file(relativePath: { eq: "nova/me.jpg" }) {
            childImageSharp {
              fixed(width: 180) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      `}
      render={(data) => (
        <BioWrapper>
          <InnerContent>
            <ImageWrapper>
              <Img fixed={data.me.childImageSharp.fixed} />
            </ImageWrapper>
            <div>
              <h4>
                Hi There!{" "}
                <span role="img" aria-label="Wave">
                  👋
                </span>
              </h4>
              <p>
                I'm Alex, creator of <Link to="/">Thorium</Link>,{" "}
                <a
                  href="https://spaceedventures.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Space EdVentures
                </a>
                , and countless other simulator controls. I was a professional
                flight director at the{" "}
                <a
                  href="https://spacecenter.alpineschools.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Christa McAullife Space Center
                </a>{" "}
                for 4 years and helped build the{" "}
                <a
                  href="https://www.spacecamputah.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  USS Voyager II
                </a>
                .
              </p>
              <p>
                These days I'm a professional web developer with a passion for
                bridge simulators. You can read my thoughts on my{" "}
                <a
                  href="https://ralexanderson.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  blog
                </a>{" "}
                and{" "}
                <a
                  href="https://twitter.com/ralex1993"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                .
              </p>
            </div>
          </InnerContent>
        </BioWrapper>
      )}
    ></StaticQuery>
  );
};

export default Bio;
