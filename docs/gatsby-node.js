exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    switch (node.internal.type) {
        case 'MarkdownRemark': {
            const { relativePath, relativeDirectory } = getNode(node.parent)

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
