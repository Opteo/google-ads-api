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
        const { entity, order, title, type } = node.frontmatter

        if (!ids[entity]) {
            ids[entity] = {}
        }

        if (!type.includes('code')) {
            ids[entity][order] = {
                title,
                type,
                entity,
                id: getSectionId(node),
            }
        }
    })
    return ids
}

export const getSectionsData = edges => {
    const sections = {}

    edges.forEach(edge => {
        const { node } = edge
        const { entity } = node.frontmatter

        const section_data = {
            id: getSectionId(node),
            key: node.id,
            node,
            entity,
        }

        section_data.is_index = node.fields.is_index

        if (section_data.is_index) {
            const meta_file = require(`../content/${node.fields.directory}/meta.js`)
            section_data.meta = meta_file.object
        }

        const { type } = node.frontmatter
        const section_type = type.includes('code') ? 'code' : 'description'

        if (!sections[section_data.id]) {
            sections[section_data.id] = {}
        }
        sections[section_data.id][section_type] = section_data
    })

    return sections
}

export const capitalizeFirstLetter = str => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}
