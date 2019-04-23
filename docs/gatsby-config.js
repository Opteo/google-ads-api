module.exports = {
    siteMetadata: {
        title: `Opteo docs`,
        description: `hello world`,
        author: `Opteo`,
    },
    plugins: [
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [],
            },
        },
    ],
}
