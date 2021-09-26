import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


const Products = ({ data }) => {
    return (
        <Layout>
            <SEO title='Products' />
                <h1>Products</h1>
                <main>
                    {data.allShopifyProduct.edges.map(({ node: product }) => (
                        <Link>
                            <GatsbyImage 
                                image={product.featuredImage.gatsbyImageData} 
                                alt={product.title}
                            />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h4>{product.priceRangeV2.minVariantPrice.amount}</h4>
                            
                        </Link>
                    ))}
                </main>
            <Link to='/'>Link to home page</Link>
        </Layout>
    )
}

export default Products

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
                            currencyCode
                        }
                    }
                    featuredImage {
                        localFile {
                            childrenImageSharp {
                                gatsbyImageData(aspectRatio: 1,  width: 640)
                            }
                        }
                    }
                    handle
                }
            }
        }
    }
`