import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SpeakingPage = () => (
  <Layout>
    <SEO title="Speaking" keywords={[`dAVE Inden`, `code`, `contact`, `portfolio`, `presentations`, `talks`, `blog`, `open source`, `dancing vikings`, `games`, `speaking`, `api`, `javascript`]}/>
    <h1>Speaking</h1>
    <p>I prepare talks and presentations on various topics around my experience in tech and web development. I'm happy to speak at various meetups, user groups, or conferences on these topics.</p>
    <ul>
      <li>Using PKG for distributing apps to empower non-developers</li>
      <li>Getting started with Gatsby</li>
      <li>Using Gatsby as a learning tool</li>
      <li>Making a personal website in Gatsby</li>
      <li>Starting a game company to make learning new technologies fun</li>
      <li>Creating custom REPLs in Node.js</li>
      <li>Blowing up my dev environment to help declutter my learning process</li>
    </ul>
  </Layout>
)

export default SpeakingPage
