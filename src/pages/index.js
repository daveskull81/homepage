import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`dAVE Inden`, `code`, `portfolio`, `presentations`, `talks`, `blog`, `open source`, `dancing vikings`, `games`, `speaking`, `api`, `javascript`]} />
    <h1>Hi there!</h1>
    <p>
      My name is dAVE Inden. I like writing code &amp; talking about code &amp; drinking coffee &amp; making games.
      I am currently working mostly in Javascript, Node.js, Express, React, Gatsby, &amp; dabbling in the realm of TypeScript.
    </p>
    <p>
      I have technical talks about these and other technologies. I'm happy to <Link to="/speaking/">speak</Link> to groups of all sizes about my perspective in technology.
    </p>
    <p>
      I have an open source game "company" I call <a href="https://dancing-vikings.github.io" target="_blank" rel="noopener noreferrer">Dancing Vikings</a> that I use to help me learn more about coding by focusing the <a href="https://dev.to/daveskull81/starting-a-game-company-to-focus-on-fun-projects--3bne" target="_blank" rel="noopener noreferrer">projects</a> on making fun games for people to play.
    </p>
    <p>
      I write about my experiences learning to write code, learning to make games, and working in technology on my <a href="https://dev.to/daveskull81" target="_blank" rel="noopener noreferrer">DEV Community</a> page.
    </p>
    <p>Want to say hello?</p>
    <p>Have a question about one of my projects?</p>
    <p>Want me to speak at your meetup, user group, or conference?</p>
    <p>Check out my <Link to="/contact/">Contact</Link> page for ways to get in touch.</p>
  </Layout>
)

export default IndexPage
