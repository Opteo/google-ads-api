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

        const section_data = {
            id: getSectionId(node),
            key: node.id,
            node,
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

export const getSubsectionTitle = ({ entity, type }) => {
    const AN = ['O', 'A'].includes(entity.slice(0, 1)) ? 'an' : 'a'

    switch (type) {
        case 'object': {
            return `The ${entity} Object`
        }
        case 'list': {
            return `List all ${entity}s`
        }
        default:
            return `${capitalizeFirstLetter(type)} ${AN} ${entity}`
    }
}

export const stringMatch = (a, b) => {
    const a_low = a.toLowerCase()
    const b_low = b.toLowerCase()

    const a_split = a.replace(/([A-Z])/g, ' $1').toLowerCase()
    const b_split = b.replace(/([A-Z])/g, ' $1').toLowerCase()

    return a_low.includes(b_low) || a_split.includes(b_split)
}
