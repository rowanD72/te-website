import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const products = ({ data }) => {
    return (
        <Layout>
            <SEO title='Products' />
                <h1>Products</h1>
                <ul>
                    {data.allShopifyProduct.edges.map(({ node }) => (
                        <li key={node.shopifyId}>
                            <h3>
                                <Link to={`/products/${node.handle}`}>{node.title}</Link>
                                {' - '}${node.priceRangeV2.minVariantPrice.amount}
                            </h3>
                            <p>{node.description}</p>
                        </li>
                    ))}
                </ul>
            <Link to='/'>Link to home page</Link>
        </Layout>
    )
}

export default products

//GraphQL 
export const query = graphql`  
    {
        allShopifyProduct(sort: { fields: [title] }) {
            edges {
                node {
                    title
                    shopifyId
                    description
                    handle
                    priceRangeV2 {
                        minVariantPrice {
                            amount
                        }
                    }
                }
            }
        }
    }
`