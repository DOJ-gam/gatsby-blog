import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/blogs.module.css"
function Blogs({ data }) {
  // console.log(data)
  const blogs = data.allMarkdownRemark.nodes
  // console.log(blog)
  return (
    <Layout>
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
    allMarkdownRemark {
      nodes {
        frontmatter {
          author
          slug
          stack
          title
        }
        id
      }
    }
  }
`
