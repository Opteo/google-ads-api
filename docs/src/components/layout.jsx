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
import '../css/content.css'
import '../css/manual-content.css'
import '../css/code-blocks.css'
import '../css/media-queries.css'

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
                    <footer
                        className="tc opteo-middle-gray"
                        style={{ 
                            marginBottom: '3rem',
                            marginLeft: '280px', 
                            width: 'calc(100% - 280px)' 
                        }}
                    >
                        © Opteo {new Date().getFullYear()}
                    </footer>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
