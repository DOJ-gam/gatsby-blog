import React from "react"
import Layout from "../components/Layout"
import HomePage from "../components/HomePage"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Home({ data }) {
  // console.log(props.data.site.siteMetadata)
  const { title, description } = data.site.siteMetadata
  console.log(title)
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <HomePage />
    </Layout>
  )
}

export const query = graphql`
  query siteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
