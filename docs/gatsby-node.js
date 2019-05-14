exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    switch (node.internal.type) {
        case 'MarkdownRemark': {
            const { relativePath, relativeDirectory } = getNode(node.parent)

            const order_map = {
                overview: 1,
                authentication: 2,
                reporting: 3,
                mutations: 4,
                enums: 5,
                utilities: 6,
                typescript: 7,
                misc: 8,
            }
            createNodeField({
                node,
                name: 'mega_order',
                value: order_map[node.frontmatter.entity] || 0,
            })

            createNodeField({
                node,
                name: 'group',
                value: relativeDirectory.split('/')[0],
            })
            createNodeField({
                node,
                name: 'directory',
                value: relativeDirectory || '',
            })
            createNodeField({
                node,
                name: 'is_entity_index',
                value: relativeDirectory.includes('entities') && relativePath.includes('index.md'),
            })
        }
    }
}
