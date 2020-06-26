import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "react-emotion";
import Img from "gatsby-image";
import SignupForm from "../components/nova/signupForm";
import Testimonial from "../components/nova/testimonial";
import Bio from "../components/nova/bio";
const Container = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  * {
    font-family: Montserrat, proxima-nova, system-ui, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Droid Sans, Helvetica Neue, Fira Sans, sans-serif !important;
  }
  p {
    font-size: 1.3rem;
    text-align: left;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Exo 2", system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Fira Sans,
      sans-serif !important;
    color: inherit;
  }
`;

const Wrapper = styled("div")`
  padding-top: 5rem;
  flex: 1;
  background-color: #fff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
  text-align: center;
`;

const HeaderImage = styled.img`
  max-width: 100%;
  padding: 0 2rem;
  width: 300px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 1));
`;

const Header = styled.h1`
  margin: 0;
  font-size: 6rem;
  font-weight: 800;
  color: white;
  line-height: 1.15;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  @media (min-width: 420px) {
    font-size: 4rem;
  }
`;

const Subheader = styled.h2`
  margin: 0;
  margin-top: 1rem;
  font-size: 3rem;
  color: white;
  line-height: 1.15;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  @media (min-width: 420px) {
    font-size: 2.5rem;
  }
`;
const StaticBackground = styled.div`
  width: 105%;
  height: 80vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: -1;
  background-color: #111;
  pointer-events: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  & > * {
    opacity: 0.4;
    height: 80vh;
  }
`;

const InlineImage = styled.figure`
  width: 100%;
  margin: 2rem 0;
`;
const Section = styled.section`
  max-width: 960px;
  width: calc(100% - 4rem);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  color: #111;
  p {
    width: 620px;
    max-width: 100%;
  }
  ul {
    width: 620px;
    max-width: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
    position: relative;
    margin-bottom: 2rem;
  }
  li {
    list-style: none;
    padding: 0.5rem 0;
    position: relative;
    font-size: 1.1rem;
    &:before {
      content: "";
      display: block;
      float: left;
      position: relative;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-right: 0.5rem;
      margin-top: 0.33rem;
      margin-bottom: 1rem;
      border: solid 3px rgba(198, 54, 189, 1);
    }
  }
`;
const Nova = () => (
  <StaticQuery
    query={graphql`
      query NovaQuery {
        scene: file(relativePath: { eq: "nova/space-scene.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, fit: CONTAIN) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        voyager: file(relativePath: { eq: "nova/voyager.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, fit: COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        voyager2: file(relativePath: { eq: "nova/voyager2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, fit: COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        jon: file(relativePath: { eq: "nova/jon.jpg" }) {
          childImageSharp {
            fixed(width: 60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={(data) => (
      <Container>
        <Helmet
          title="Thorium Nova"
          meta={[
            {
              name: "description",
              content:
                "Thorium Nova is the next generation of bridge simulation.",
            },
            {
              name: "keywords",
              content:
                "thorium, simulator, starship, spaceship, rocket, spacecamp controls, space, edventure, education, learning, wonder, bridge, simulation, next, generation",
            },
          ]}
        />
        <Wrapper>
          <HeaderImage
            src={require("../img/nova/logo.svg")}
            alt="Thorium Nova"
          />
          <StaticBackground>
            <Img fluid={data.scene.childImageSharp.fluid} />
          </StaticBackground>
          <Header>Thorium Nova</Header>
          <Subheader>The Future of Bridge Simulation</Subheader>
          <SignupForm />
          <Section>
            <h2>A Reimagining of Bridge Simulators</h2>
            <p>
              Everyone remembers the first time they fly in a starship
              simulator. They can tell you, with detail, what position they
              were, what their mission was, and whether they completed it
              successfully. These kinds of experiences stay with us for our
              entire lives.
            </p>
            <InlineImage>
              <Img fluid={data.voyager.childImageSharp.fluid} />
              <figcaption>
                The USS Voyager, my first bridge simulator experience
              </figcaption>
            </InlineImage>
            <p>
              I've been building bridge simulators since 2006, and Thorium
              Classic has been in development since 2016. I've learned a lot
              about how to build a simulator that balances action and narrative
              and provides the kinds of experiences that last lifetimes.
            </p>
            <p>
              Thorium Nova is the product of everything I know about building
              great bridge simulator experiences for both crews and flight
              directors. It takes the best parts of Thorium, like the flight
              director controls and timeline, and combines them with exciting
              new concepts, like a universal sandbox or inter-ship crew map.
            </p>
            <p>
              These new paradigms are woven into every part of the controls,
              creating an entirely new, unforgettable experience — whether
              flying your at a space center, from home, or over the internet.
            </p>
          </Section>
          <InlineImage shadow>
            <Img fluid={data.voyager2.childImageSharp.fluid} />
            <figcaption>The USS Voyager Mk II</figcaption>
          </InlineImage>
          <Section>
            <h2>What is a Bridge Simulator?</h2>
            <p>
              Bridge Simulators, like Thorium Nova, are platforms for running
              cooperative live-action role-play games in space. Players act out
              the roles of a bridge crew, such as communications officer,
              navigator, or captain. They work together to complete a set of
              mission objectives.
            </p>
            <p>
              In Thorium Classic, a flight director sits behind the scenes to
              act as a game master, controlling what happens inside the
              simulation and guiding the crew through the storyline.
            </p>
            <p>
              Many bridge simulators, like Artemis or Empty Epsilon, focus on
              arcade action. Thorium Classic is more suited for rich
              storytelling through talented flight directors.
            </p>
            <p>
              Thorium Nova attempts to bridge the gap by offering rich stories
              in a dynamic environment, while staying simple enough for anyone
              to enjoy among friends in their living room.
            </p>
          </Section>
          <Testimonial
            quote="Thorium’s creation by Alex has been a long, yet rewarding adventure. His product has changed my workplace for the better."
            name="Jon Parker"
            title="Assistant Director of Simulations, CMSC"
            image={data.jon.childImageSharp.fixed}
          ></Testimonial>

          <Section>
            <h2>What's Included</h2>
            <p>Thorium Nova keeps the best parts of Thorium intact:</p>
            <ul>
              <li>
                Powerful <strong>flight director controls</strong>, enabling
                deeply emotional storylines and unscripted narrations.
              </li>
              <li>
                Expressive <strong>mission timeline builder</strong> for
                crafting storylines.
              </li>
              <li>
                <strong>Easy to use</strong> — just run on one computer and
                connect via web browser.
              </li>
              <li>
                First-class show control features, like{" "}
                <strong>DMX lighting and sound effects</strong>.
              </li>
            </ul>
            <p>Thorium Nova also adds exciting new features:</p>
            <ul>
              <li>
                A <strong>Universal Sandbox</strong> which enables a beautiful
                viewscreen showing planets, stars, and ships in 3D space.
              </li>
              <li>
                Robust <strong>crew simulation</strong>, tracking the position
                and actions of every crew member on the ship.
              </li>
              <li>
                Powerful <strong>timeline automations</strong>, making flights
                possible without flight directors.
              </li>
              <li>
                Simpler, more{" "}
                <strong>approachable flight director controls</strong>, with a
                focus on helping beginners succeed.
              </li>
              <li>
                A sturdy networking architecture, making{" "}
                <strong>flights over the internet</strong> possible.
              </li>
            </ul>
          </Section>
          <Testimonial
            title="A person"
            image={data.jon.childImageSharp.fixed}
            name="Someone Cool"
            quote="I mean, it seems really cool, right? I think it's pretty cool."
          />
          <SignupForm />
          <Section>
            <h2>Frequently Asked Questions</h2>
            <p>
              <strong>What is going to happen to Thorium Classic</strong>
            </p>
            <p>
              Thorium Classic will still be available and maintained for the
              forseeable future. Thorium Nova does nothing to eliminate the
              value of Thorium Classic. On the contrary, things developed for
              Thorium Nova might end up making their way back into Thorium
              Classic
            </p>
            <p>
              In the event that Thorium Classic development has to cease, the
              project is open source so anyone can download the source code and
              make their own changes or fixes.
            </p>
            <p>
              <strong>When will Thorium Nova be completed?</strong>
            </p>
            <p>
              Development started on Thorium Nova in the Summer of 2020, and
              will likely continue for at least a year before a playable demo is
              made available. Fortunately, many of the lessons learned during
              Thorium Classic's development can speed the development process of
              Thorium Nova.
            </p>
            <p>
              <strong>
                Why didn't you just build new features into Thorium Classic?
              </strong>
            </p>
            <p>
              As I evaluated whether to build these new features into Thorium
              Classic, it became apparent that they would be a dramatic
              departure from the normal way of using Thorium. Instead of trying
              to wrangle Thorium to work with this new paradigm, I decided it
              made more sense to create an entirely separate product.
            </p>
            <p>
              Doing so has a lot of benefits. We get to start over with the
              designs and functionality; old code in Thorium can be replaced
              with the latest technologies; poorly implemented or rarely used
              features can be removed entirely, making it simpler.
            </p>
            <p>
              Also, this lets me focus my efforts on a product that appeals to a
              broader audience than brick and mortar space centers. Thorium Nova
              is designed with the hobbiest in mind.
            </p>
            <p>
              <strong>
                Will Thorium Nova be open-source like Thorium Classic?
              </strong>
            </p>
            <p>
              Thorium Classic being open-source is one of my favorite parts
              about it. I love that anyone can see and contribute to a robust
              set of simulator controls.
            </p>
            <p>
              That said, it doesn't have a sustainable business model. Donations
              for Thorium Classic are relatively low, and external contributions
              are infrequent. It really has been a labor of love for me.
            </p>
            <p>
              Thorium Nova will be a commercial product. You will pay to
              download the server software which you can use to run a simulation
              at home. Prices and terms haven't been decided yet.
            </p>
            <p>
              If I get a substantial number of patrons — between 100 and 200 —
              on the{" "}
              <a
                href="https://www.patreon.com/thoriumsim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thorium Patreon page, then I will consider open-sourcing Thorium
                Nova.
              </a>
            </p>
          </Section>
          <Bio />
        </Wrapper>
      </Container>
    )}
  ></StaticQuery>
);
export default Nova;
