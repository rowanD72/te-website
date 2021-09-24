import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'


const Layout = ( { children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div style={{ margin: `0 auto`, maxWidth: 900, padding: `0 1rem` }}>
            <main>{children}</main>
            <footer style={{marginTop:`0.0625rem`}}>
                ©{new Date().getFullYear()}, Created By <a href='https://www.dr3webdev.com'>DR3 Web Dev & Design</a>
            </footer>
        </div>
    )
}

export default Layout
