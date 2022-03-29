import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import * as styles from "../styles/HomePage.module.css"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  // console.log(data)/
  // const image = getImage(data.file.childImageSharp.fluid)
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
        {/* <GatsbyImage image={image} alt="T" /> */}
        {/* <StaticImage
          src="https://cdn.dribbble.com/userupload/2445800/file/original-0071c639d6c05f1ba97f1c2ec93ff90c.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=800x600"
          alt="Test"
          width={100}
          height={400}
          layout="fixed"
        /> */}
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query Banner {
//     file(relativePath: { eq: "dic3.png" }) {
//       childImageSharp {
//         fluid {
//           aspectRatio
//           base64
//           sizes
//         }
//       }
//     }
//   }
// `
