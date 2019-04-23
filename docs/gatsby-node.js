exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    switch (node.internal.type) {
        case 'MarkdownRemark': {
            const { relativePath, relativeDirectory } = getNode(node.parent)

            createNodeField({
                node,
                name: 'directory',
                value: relativeDirectory || '',
            })
            createNodeField({
                node,
                name: 'is_index',
                value: relativePath.includes('index.md'),
            })
        }
    }
}
