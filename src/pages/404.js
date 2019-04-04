import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just found a page that doesn&#39;t exist...</p>
    <p>How did you do that?</p>
    <Link to="/contact">Let me know</Link>
  </Layout>
)

export default NotFoundPage
