import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'

// import SEO from '../components/seo'

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    return (
        <Layout>
            {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
            <Container edges={edges} />
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
