import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/HomePage.module.css"

const HomePage = () => {
  return (
    <section className={styles.header}>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>React & React Native Developer in Gambia</p>
        <Link className={styles.btn} to="/projects">
          My Portfolio Projects
        </Link>
      </div>
    </section>
  )
}

export default HomePage
