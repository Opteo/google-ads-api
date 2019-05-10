const endsWith = require('lodash.endswith')

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
        const { group } = node.fields
        const { entity, order, title, type } = node.frontmatter

        if (!ids[group]) {
            ids[group] = {}
        }
        if (!ids[group][entity]) {
            ids[group][entity] = {}
        }

        if (!type.includes('code')) {
            ids[group][entity][order] = {
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

        section_data.is_entity_index = node.fields.is_entity_index

        if (section_data.is_entity_index) {
            const meta_file = require(`../content/${node.fields.directory}/meta.js`)
            section_data.meta = meta_file.object
        }

        const { type } = node.frontmatter
        const section_type = type.includes('code') ? 'code' : 'description'

        if (!sections[section_data.id]) {
            sections[section_data.id] = {}
        }
        sections[section_data.id].group = node.fields.group
        sections[section_data.id][section_type] = section_data
    })

    return sections
}

export const capitalizeFirstLetter = str => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

export const getSubsectionTitle = ({ entity, type, title }) => {
    const AN = ['O', 'A'].includes(entity.slice(0, 1)) ? 'an' : 'a'

    switch (type) {
        case 'manual': {
            return capitalizeFirstLetter(title)
        }
        case 'object': {
            return `The ${entity} Object`
        }
        case 'list': {
            if (endsWith(entity, 'Criterion')) {
                return `List all ${entity.replace('Criterion', 'Criteria')}`
            }

            if (endsWith(entity, 'Strategy')) {
                return `List all  ${entity.replace('Strategy', 'Strategies')}`
            }

            if (endsWith(entity, 'Category')) {
                return `List all  ${entity.replace('Category', 'Categories')}`
            }
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

export const getGroupDisplayName = name => {
    switch (name) {
        case 'entities': {
            return `Core Resources`
        }
        case 'concepts': {
            return `Concepts`
        }
        case 'other': {
            return `Other`
        }
        default:
            return name
    }
}

export const jumpTo = section_id => (window.location.href = section_id)

export const centerSidebarToId = id => {
    const sidebar_id = 'sidebar-' + id

    const el = document.getElementById(sidebar_id)

    if (el) {
        window.requestAnimationFrame(() => {
            const distance_from_top = el.parentNode.offsetTop 

            const scrollable = el.parentNode.parentNode.parentNode.parentNode.parentNode;

            scrollable.scrollTop = distance_from_top - 200
            
            // el.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'center',
            // })
        })
    }
}
