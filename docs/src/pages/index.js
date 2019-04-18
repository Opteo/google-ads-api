import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Section from '../components/section'
import Sidebar from '../components/sidebar'
// import SEO from '../components/seo'
import { getIds, getSections } from '../utils'

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const ids = getIds(edges)
    const sections_data = getSections(edges)

    const Sections = sections_data.map(section => {
        return <Section id={section.id} key={section.key} node={section.node} meta={section.meta} />
    })

    return (
        <Layout>
            {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
            <div
                style={{
                    width: `100%`,
                }}
            >
                <div
                    style={{
                        width: `20%`,
                        display: `inline-block`,
                        verticalAlign: `top`,
                    }}
                >
                    <Sidebar ids={ids} />
                </div>
                <div
                    style={{
                        width: `80%`,
                        display: `inline-block`,
                        paddingTop: `48px`,
                    }}
                >
                    {Sections}
                </div>
            </div>
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
