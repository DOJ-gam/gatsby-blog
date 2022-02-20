import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import * as styles from "../styles/Navbar.module.css"

function Navbar() {
  const data = useStaticQuery(graphql`
    query getTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <div>
      <nav className={styles.nav}>
        {/* <h1>DOJ Gatsby Blog</h1> */}
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Portfolio Projects</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
