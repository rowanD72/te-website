import * as React from "react"
import * as styles from '../styles/index.module.scss'
import Layout from "../components/Layout"
import SEO from '../components/seo'
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <h1 className={styles.intro__style}>Tranquil Essence Candle Company</h1>
      <p>Home Page</p>
      <Link to='products'>Products page</Link>
    </Layout>
  )
}

export default IndexPage
