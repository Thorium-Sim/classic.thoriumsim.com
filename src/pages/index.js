import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import styled from "react-emotion";
import Carousel from "../components/carousel";
import { users, A } from "./users";
import { FlexSection } from "../components/styles";
import { default as GImg } from "gatsby-image";

const BgImage = styled(GImg)`
  position: fixed !important;
  top: 50px !important;
  left: 0 !important;
  width: 100% !important;
  z-index: -1 !important;
  height: 100vh; // or whatever

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: bottom; // or whatever
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;"; // needed for IE9+ polyfill
  }
`;

const Hero = styled("div")`
  width: 100%;
  min-height: 90vh;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
const HeroImage = styled("img")`
  width: 10rem;
`;
const HeroHeader1 = styled("h1")`
  color: #eee;
  font-size: 5rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;
const HeroHeader2 = styled("h2")`
  color: #eee;
  font-size: 2rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
`;
const ButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20%;
`;
const Button = styled(Link)`
  font-size: 1.5rem;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5),
    inset 3px 3px 5px rgba(0, 0, 0, 0.5);
  color: #eee;
  border: solid 2px #eee;
  background-color: transparent;
  margin: 4px;
  border-radius: 3px;
  display: inline-block;
  font-weight: 400;
  line-height: 1.2em;
  padding: 10px;
  text-transform: uppercase;
  transition: background 0.3s, color 0.3s;
  &:hover {
    text-decoration: none;
    background: #37203c;
    color: white;
  }
`;
const ButtonLink = Button.withComponent("a");
const SectionInner = styled("div")`
  max-width: ${({ fluid }) => (fluid ? "100%" : "960px")};
  ${({ fluid }) => (fluid ? "padding: 0 4rem" : "")}
  width: 100%;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    & > div {
      margin: 2rem 0;
    }
  }
  & > div {
    width: 100%;
  }
`;
const SectionOuter = styled("section")`
  padding: 3rem;
  background-color: ${(props) => (props.offset ? "#444" : "#222")};
  color: white;
  @media (max-width: 425px) {
    padding: 3rem 0;
  }
`;
const SectionImageBlock = styled("div")`
  flex: 1;
  @media (max-width: 425px) {
    margin: 0 auto;
    text-align: center;
  }
`;
const SectionImage = (props) => (
  <SectionImageBlock>
    <img style={{ maxHeight: "10rem" }} {...props} alt="Section" />
  </SectionImageBlock>
);
const SectionText = styled("div")`
  flex: 2;
  margin: 0 2rem;
  @media (max-width: 425px) {
    width: 100%;
    flex: unset;
  }
`;
const Section = ({ fluid, ...props }) => (
  <SectionOuter {...props}>
    <SectionInner fluid={fluid} {...props} />
  </SectionOuter>
);

const IndexPage = ({ data }) => (
  <Layout>
    <Hero>
      <BgImage fixed={data.hero.childImageSharp.fixed} />
      <HeroImage
        src={require("../img/thorium.svg")}
        alt="Thorium"
        draggable="false"
      />
      <HeroHeader1>Thorium</HeroHeader1>
      <HeroHeader2>Next Generation Starship Simulator Controls</HeroHeader2>
      <ButtonContainer>
        <Button to="/docs/overview">Get Started</Button>
        <Button to="/download">Download</Button>
        <ButtonLink href="https://www.patreon.com/thoriumsim" target="_blank">
          Donate
        </ButtonLink>
        <ButtonLink href="https://discord.gg/UvxTQZz">Chat</ButtonLink>
      </ButtonContainer>
    </Hero>
    <Section>
      <GImg fixed={data.ship.childImageSharp.fixed} />
      <SectionText>
        <h3>What is Thorium?</h3>
        <p>
          Thorium is a platform for running live-action role-play starship
          bridge simulations. Participants are given roles on the ship, like
          weapons officer, navigator, or captain. Each role comes with its own
          computer station and responsibilities. The crew uses the Thorium
          controls to direct the ship wherever they want in their space mission.
          A flight director sits behind the scenes to act as a game master,
          controlling what happens inside the simulation.
        </p>
      </SectionText>
    </Section>
    <Section fluid>
      <Carousel images={data.carousel.edges} />
    </Section>

    <Section offset="true">
      <SectionText>
        <h3>Offering Support Service</h3>
        <p>
          Thorium is a Community Support project.{" "}
          <Link to="/blog/2019/04/13/community-support">
            Find out what that means.
          </Link>
        </p>
        <p>
          Thorium now offers personal support on a non-contract basis. Need a
          bug squashed? Need a special feature completed yesterday? Need someone
          to walk you through set-up and help you get everything working right?
          Just fill out a form and a Thorium expert will take care of whatever
          needs you have. If we live close, we'll even come on site!
        </p>
        <Button to="/service">Request Support</Button>
      </SectionText>
    </Section>
    <Section>
      <SectionText>
        <h3>Flexible Simulator Configs</h3>
        <p>
          Want to run a small shuttle? Done. Capital Class Carrier? You've got
          it. Any kind of ship you can imagine is possible. Thorium provides
          different visual themes and dozens of cards which can be arranged into
          whatever stations you want. Use one of the pre-built simulator
          configurations or make your own!
        </p>
      </SectionText>
      <SectionImage src={require("../img/cogs.svg")} draggable="false" />
    </Section>
    <Section offset="true">
      <SectionImage src={require("../img/code-branch.svg")} draggable="false" />
      <SectionText>
        <h3>Mission Timelines</h3>
        <p>
          Not comfortable running the mission by yourself? Thorium comes bundled
          with pre-written missions that remove the endless button clicking and
          lets you focus on what matters - telling a great story. It also
          features a built-in mission editor, allowing you to write your own
          missions.
        </p>
      </SectionText>
    </Section>
    <Section>
      <SectionText>
        <h3>Open Source</h3>
        <p>
          Do you sling divs? Got code chops? All of the code is available, so
          you can see how it works under the hood and even add your own
          features.{" "}
          <a href="https://github.com/Thorium-Sim/thorium">Check it out!</a>
        </p>
      </SectionText>
      <SectionImage src={require("../img/code.svg")} draggable="false" />
    </Section>
    <Section offset="true">
      {/* <SectionImage src="/img/ship.png" draggable="false" /> */}
      <SectionText>
        <h3>Multi-Platform</h3>
        <p>
          Thorium Server works on Windows, macOS, and Linux and the controls can
          be run on any modern web browser. Since Thorium is built using Web
          technologies, your client computers could be anything. They'll even
          operate on an electrical switch panel!
        </p>
      </SectionText>
    </Section>
    <Section>
      <SectionText>
        <h3>Sponsoring Organizations</h3>
        <FlexSection>
          {users.map((u) => {
            const image = data.sponsors.edges.find(
              (s) => s.node.name === u.image
            );
            return (
              <A
                href={u.infoLink}
                key={u.caption}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GImg
                  alt={u.caption}
                  fluid={image && image.node.childImageSharp.fluid}
                />
              </A>
            );
          })}
        </FlexSection>
      </SectionText>
    </Section>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fixed(width: 1440, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    ship: file(relativePath: { eq: "ship.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    carousel: allFile(filter: { dir: { glob: "**/carousel" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(
              quality: 70
              maxWidth: 1000
              traceSVG: { background: "black", color: "#333" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    sponsors: allFile(filter: { dir: { glob: "**/sponsors" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(
              maxWidth: 300
              traceSVG: { background: "black", color: "#333" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
