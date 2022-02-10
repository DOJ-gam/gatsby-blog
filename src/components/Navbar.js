import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/Navbar.module.css"

function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <h1>DOJ Gatsby Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Portfolio Projects</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
