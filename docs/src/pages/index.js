import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Section from '../components/section'
import Sidebar from '../components/sidebar'
// import SEO from '../components/seo'
import { getIds, getSectionsData } from '../utils'

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const ids = getIds(edges)
    const sections_data = getSectionsData(edges)
    const Sections = sections_data.map(section => {
        return <Section id={section.id} name={section.key} node={section.node} meta={section.meta} />
    })

    const Container = styled.div`
        width: 100%;
    `
    const ColumnOne = styled.div`
        width: 20%;
        display: inline-block;
        vertical-align: top;
    `
    const ColumnTwo = styled.div`
        width: 80%;
        display: inline-block;
        vertical-align: top;
    `

    return (
        <Layout>
            {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
            <Container>
                <ColumnOne>
                    <Sidebar ids={ids} />
                </ColumnOne>
                <ColumnTwo>{Sections}</ColumnTwo>
            </Container>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
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
