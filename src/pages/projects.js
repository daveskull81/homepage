import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`dAVE Inden`, `code`, `contact`, `portfolio`, `presentations`, `talks`, `blog`, `open source`, `dancing vikings`, `games`, `speaking`, `api`, `javascript`]}/>
    <h1>Projects</h1>
    <p>Outside of maintaining the Smartsheet Developers site I have a few other ongoing projects.</p>
    <ul>
      <li><a href="https://dancing-vikings.github.io/" target="_blank" rel="noopener noreferrer">Dancing Vikings</a></li>
      <p>- My open source game "company" I use to focus my learning by making fun projects.</p>
      <li>Tech Sticker Book Collection</li>
      <p>- I collect tech &amp; dev related stickers in a book rather than putting them on my laptop.</p>
      <li>Writing</li>
      <p>- I write about my experiences with tech and web development on my <a href="https://dev.to/daveskull81" target="_blank" rel="noopener noreferrer">Dev.to</a> page.</p>
    </ul>
  </Layout>
)

export default ProjectsPage
