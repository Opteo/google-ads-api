import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// import SEO from '../components/seo'
import { getIds, getSections } from '../utils'

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const ids = getIds(edges)
    const Sections = getSections(edges)

    return (
        <Layout>
            {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
            <h1>google-ads-api</h1>
            <div>{Sections}</div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                    }
                    fields {
                        directory
                    }
                }
            }
        }
    }
`
