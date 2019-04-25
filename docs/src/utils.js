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
        const { is_index } = node.fields

        const section_data = {
            id: getSectionId(node),
            key: edge.node.id,
            node,
        }

        if (is_index) {
            const meta_file = require(`../content/${node.fields.directory}/meta.js`)
            section_data.meta = meta_file.object
        }

        return section_data
    })
}
