import React from 'react'
import styled, { css } from 'react-emotion'
import { Page, FlexSection } from '../components/styles'

export const users = [
  {
    caption: "The Lion's Gate Center",
    image: '/img/tlgc.jpg',
    infoLink: 'https://thelionsgatecenter.com',
  },
  {
    caption: 'Farpoint Space Center',
    image: '/img/farpoint.png',
    infoLink: 'https://farpointcadets.weebly.com',
  },
  {
    caption: 'Christa McAuliffe Space Education Center',
    image: '/img/cmsec.png',
    infoLink: 'https://spacecenter.alpineschools.org',
  },
  {
    caption: 'Telos Discovery Space Center',
    image: '/img/tdsc.png',
    infoLink: 'https://discoveryspacecenter.com',
  },
]

const donors = [
  'Thomas Delclite 🇧🇪',
  'Chuck Smith 🇺🇸',
  "The Lion's Gate Center 🇺🇸",
  'Brent Anderson 🇺🇸',
  'Maeson Busk 🇺🇸',
  'The Christa McAuliffe Space Education Center 🛰',
  'Victor Williamson 👽',
  'The Telos Discovery Space Center 🌌',
]

export const A = styled('a')`
  display: block;
  flex: 1;
  margin: 1rem;
`
export const Img = styled('img')`
  width: 100%;
`
const Users = () => {
  return (
    <div
      className="outerContainer"
      css={css`
        background-color: black;
      `}
    >
      <Page>
        <h1>A Friendly Community</h1>
        <p>
          Thorium is happy to be supported by an ever-increasing number of
          organizations, donors, and contributors. Thank you for all you do to
          make Thorium possible.
        </p>
        <h2>Organizations</h2>
        <FlexSection>
          {users.map(u => (
            <A
              href={u.infoLink}
              key={u.caption}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img alt={u.caption} src={u.image} />
            </A>
          ))}
        </FlexSection>
        <h2>Donors</h2>
        <ul>{donors.map(d => <li key={d}>{d}</li>)}</ul>
      </Page>
    </div>
  )
}
export default Users
