import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`dAVE Inden`, `code`, `contact`, `portfolio`, `presentations`, `talks`, `blog`, `open source`, `dancing vikings`, `games`, `speaking`, `smartsheet`, `api`, `developer advocate`, `smartsheet api`, `javascript`]}/>
    <h1>Contact Me</h1>
    <p>If you are looking to connect with me about my projects,  or having me speak please reach out.</p>
    <p>You can find me on twitter: <a href="https://twitter.com/daveskull81" target="_blank" rel="noopener noreferrer">@daveskull81</a></p>
    <p>or</p>
    <p>Fill out my <a href="https://app.smartsheet.com/b/form/8308276690d547729cf83d6da00fcae0" target="_blank" rel="noopener noreferrer">Contact Form</a></p>
  </Layout>
)

export default ContactPage
