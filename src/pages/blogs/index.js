import { graphql, Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout"
import * as styles from "../../styles/blogs.module.css"
function Blogs({ data }) {
  // console.log(data)
  const blogs = data.blogs.nodes
  // console.log(blog)
  const { description, copyright } = data.metaData.siteMetadata
  // console.log(description)
  return (
    <Layout>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="copyright" content={copyright} />
      </Helmet>
      <div className={styles.blogs}>
        <h2>My Blogs</h2>
        <h3>Blogs & Tutorials I've created</h3>
        <div className={styles.blogsContainer}>
          {blogs.map(blog => (
            <Link to={"/blogs/" + blog.frontmatter.slug} key={blog.id}>
              <div className="">
                <h3>{blog.frontmatter.title}</h3>
                <p>{blog.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blogs

export const query = graphql`
  query MyQuery {
    blogs: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          author
        }
        id
      }
    }
    metaData: site {
      siteMetadata {
        description
        copyright
      }
    }
  }
`
