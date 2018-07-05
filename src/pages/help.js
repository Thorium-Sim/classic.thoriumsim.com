import React from 'react'
import { Wrapper, Page, FlexSection, FlexAside } from '../components/styles'
import Link from 'gatsby-link'

const Help = () => (
  <Wrapper>
    <Page>
      <h1>Need Help?</h1>
      <p>Here's how to get the help you need.</p>
      <FlexSection>
        <FlexAside>
          <h2>Browse the Docs</h2>
          <p>
            Thorium is powerful, and as such might take a bit of study to learn
            how it works. Fortunately, all of the questions you have can be
            answered on this website.{' '}
            <Link to={'/docs/overview'}>
              Learn more using the documentation on this site.
            </Link>
          </p>
        </FlexAside>
        <FlexAside>
          <h2>Join the Conversation</h2>
          <p>
            Thorium hopes to be a community-based project, which is why we have
            a Discord channel. This allows you to get help, learn tips, and be
            involved with all of the other Thorium users.{' '}
            <a href="https://discord.gg/UvxTQZz">
              Ask questions about the documentation and project on Discord.
            </a>
          </p>
        </FlexAside>
        <FlexAside>
          <h2>Stay up to Date</h2>
          <p>
            Thorium is changing constantly, with a new release coming out every
            week. There's a lot you might miss if you don't stay up to date.{' '}
            <Link to="/blog">Find out what's new with this project</Link>
          </p>
        </FlexAside>
      </FlexSection>
    </Page>
  </Wrapper>
)
export default Help
