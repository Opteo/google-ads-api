exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    switch (node.internal.type) {
        case 'MarkdownRemark': {
            //     const { permalink, layout } = node.frontmatter
            const { relativePath, relativeDirectory } = getNode(node.parent)
            createNodeField({
                node,
                name: 'directory',
                value: relativeDirectory || '',
            })
        }
    }
}
