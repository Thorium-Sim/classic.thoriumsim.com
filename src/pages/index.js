import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'
import Carousel from '../components/carousel'

const Hero = styled('div')`
  width: 100%;
  height: 90vh;
  padding-top: 50px;
  background-image: url(${require('../img/hero.jpg')});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
const HeroImage = styled('img')`
width: 10rem;
`
const HeroHeader1 = styled('h1')`
color: #eee;
font-size: 5rem;
text-shadow:2px 2px 2px rgba(0,0,0,.5);
`
const HeroHeader2 = styled('h2')`
color: #eee;
font-size: 2rem;
text-shadow:2px 2px 2px rgba(0,0,0,.5);
text-align: center;
`
const ButtonContainer = styled('div')`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const buttonStyle = css`
    font-size: 1.5rem;
    text-shadow: 3px 3px 5px rgba(0,0,0,.5);
    box-shadow: 3px 3px 5px rgba(0,0,0,.5), inset 3px 3px 5px rgba(0,0,0,.5);
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
    text-decoration: none;
    transition: background .3s,color .3s;
    &:hover {
      background: #37203c;
      color: white;
    }
`
const SectionInner = styled('div')`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    line-height: 1.7;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SectionOuter = styled('section')`
    padding: 3rem;
    background-color: ${props => (props.offset ? '#444' : '#222')};
    color: white;
`
const sectionImageStyle = css`
    flex: 1;
`
const SectionImage = props => (
  <div css={sectionImageStyle}>
    <img style={{ maxHeight: '10rem' }} {...props} />
  </div>
)
const SectionText = styled('div')`
flex: 2;
margin: 0 2rem;
`
const Section = props => (
  <SectionOuter {...props}>
    <SectionInner {...props} />
  </SectionOuter>
)
const IndexPage = () => (
  <Fragment>
    <Hero>
      <HeroImage
        src={require('../img/thorium.svg')}
        alt="Thorium"
        draggable="false"
      />
      <HeroHeader1>Thorium</HeroHeader1>
      <HeroHeader2>Next Generation Starship Simulator Controls</HeroHeader2>
      <ButtonContainer>
        <Link css={buttonStyle} to="/docs/overview">
          Get Started
        </Link>
        <Link css={buttonStyle} to="/download">
          Download
        </Link>
        <Link css={buttonStyle} to="/contribute">
          Contribute
        </Link>
      </ButtonContainer>
    </Hero>
    <Section>
      <SectionImage src={require('../img/ship.png')} draggable="false" />
      <SectionText>
        <h3>What is Thorium?</h3>
        <p>
          Thorium is a platform for running starship bridge simulations.
          Participants are given roles on the ship, like weapons officer,
          navigator, or captain. Each role comes with its own computer station
          and responsibilities. The crew can use the Thorium controls to direct
          the ship wherever they want in their space mission. A flight director
          sits behind the scenes to act as a game master, controling what
          happens inside the simulation.
        </p>
      </SectionText>
    </Section>
    <Section offset="true">
      <Carousel />
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
      <SectionImage src={require('../img/cogs.svg')} draggable="false" />
    </Section>
    <Section offset="true">
      <SectionImage src={require('../img/code-branch.svg')} draggable="false" />
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
          features.
        </p>
      </SectionText>
      <SectionImage src={require('../img/code.svg')} draggable="false" />
    </Section>
    <Section offset="true">
      {/* <SectionImage src="/img/ship.png" draggable="false" /> */}
      <SectionText>
        <h3>Multi-Platform</h3>
        <p>
          Thorium Server works on Windows, macOS, Linux, and the controls work
          with anything that runs a modern web browser. They'll even operate on
          a electrical switch panel! And, since Thorium is built with Web
          technologies, your client computers can be anything that runs a modern
          web browser.
        </p>
      </SectionText>
    </Section>
  </Fragment>
)

export default IndexPage
