import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import * as styles from "../styles/HomePage.module.css"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>DOJ Portfolio | Home</title>
        <meta name="description" content="DOJ's Portfolio, Homepage....." />
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
