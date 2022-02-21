import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import * as styles from "../styles/HomePage.module.css"

export default function Home({ data }) {
  // console.log(props.data.site.siteMetadata)
  const { title, description } = data.site.siteMetadata
  // console.log(title)
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <section className={styles.header}>
        <div>
          <h2 className="">Design</h2>
          <h3>Develop & Deploy</h3>
          <p>React & React Native Developer in Gambia</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img
          src="/images/b4.png"
          alt="DOJ Side Banner"
          style={{ maxWidth: "100%", justifySelf: "end" }}
        />
      </section>
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
