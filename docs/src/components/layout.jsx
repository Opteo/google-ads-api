/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../css/tachyons.min.css'
import '../css/reset.css'
import '../css/colors.css'
import '../css/main.css'
import '../css/sidebar.css'
import '../css/section.css'
// import '../css/two-column.css'
import '../css/content.css'
import '../css/prism-theme-dark.css'

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div className="">
                    <main>{children}</main>
                    <footer>© Opteo {new Date().getFullYear()}</footer>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
