export const getSectionId = node => {
    const { title } = node.frontmatter
    return `${node.fields.directory.split('/').join('-')}-${title.split(' ').join('-')}`
}

export const getIds = edges => {
    const ids = {}
    edges.forEach(edge => {
        const { node } = edge
        ids[getSectionId(node)] = node.frontmatter.title
    })
    return ids
}

export const getSections = edges => {
    return edges.map(edge => {
        const { node } = edge
        const meta = require(`../content/${node.fields.directory}/meta.js`)
        const id = getSectionId(node)
        return {
            id,
            key: edge.node.id,
            node,
            meta,
        }
    })
}
