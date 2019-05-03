import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'

// import SEO from '../components/seo'
import { getIds, getSectionsData } from '../utils'

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const ids = getIds(edges)
    const sections_data = getSectionsData(edges)

    return (
        <Layout>
            {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
            <Container ids={ids} sectionsData={sections_data} />
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___entity, frontmatter___order] }) {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        order
                        type
                        entity
                    }
                    fields {
                        directory
                        is_index
                    }
                }
            }
        }
    }
`
