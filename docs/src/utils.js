import React from 'react'
import Section from './components/section'

export const getSectionId = node => {
    const { title } = node.frontmatter
    return `${node.fields.directory.split('/').join('-')}-${title.split(' ').join('-')}`
}

export const getIds = edges => {
    return edges.map(edge => {
        const { node } = edge
        return getSectionId(node)
    })
}

export const getSections = edges => {
    return edges.map(edge => {
        const { node } = edge
        const meta = require(`../content/${node.fields.directory}/meta.js`)
        const id = getSectionId(node)

        return <Section id={id} key={edge.node.id} node={node} meta={meta} />
    })
}
