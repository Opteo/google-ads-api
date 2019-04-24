export const getSectionId = node => {
    const { title } = node.frontmatter
    return title
        .split(' ')
        .join('-')
        .toLowerCase()
}

export const getIds = edges => {
    const ids = {}
    edges.forEach(edge => {
        const { node } = edge
        const { entity, order, title } = node.frontmatter

        if (!ids[entity]) {
            ids[entity] = {}
        }
        ids[entity][order] = {
            title,
            id: getSectionId(node),
        }
    })
    return ids
}

export const getSectionsData = edges => {
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
