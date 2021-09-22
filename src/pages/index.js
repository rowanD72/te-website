import * as React from "react"
import * as styles from '../styles/index.module.scss'
import Layout from "../components/layout"


// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1 className={styles.intro__style}>Tranquil Essence Candle Company</h1>
      <p>Home Page</p>
    </Layout>
  )
}

export default IndexPage
