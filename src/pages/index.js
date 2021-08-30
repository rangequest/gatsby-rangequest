import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to Gatsby.</p>
      <StaticImage
        alt="Gatsby development on VSCode"
        src="../images/gatsby-vscode-range-quest.png"
      />
    </Layout>
  )
}

export default IndexPage