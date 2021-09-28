import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { productGrid } from '../components/styles/products.module.scss'

const Products = ({ data }) => {
    return (
        <Layout>
            <SEO title='Products' />
                <h1>Products</h1>
                <main className={productGrid}>
                    {data.allShopifyProduct.edges.map(({ node: product }) => (
                        <Link>
                        <div>
                            <GatsbyImage image={product.images[0].localFile.childImageSharp.gatsbyImageData} alt={product.title} />
                        </div>
                             <div>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                            </div>
                            <div>
                                    {
                                        product.priceRangeV2.maxVariantPrice.currencyCode,
                                        product.priceRangeV2.maxVariantPrice.amount
                                    }      
                            </div>
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
        allShopifyProduct {
            edges {
              node {
                title
                description
                priceRangeV2 {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(aspectRatio: 1, width: 640)
                    }
                  }
                }
              }
            }
          }
    }
`