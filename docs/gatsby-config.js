module.exports = {
    pathPrefix: `/dev/google-ads-api`,
    siteMetadata: {
        title: `Opteo docs`,
        description: `hello world`,
        author: `Opteo`,
    },
    plugins: [
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: false,
                // Pedantic mode (default: true)
                pedantic: false,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [
                    // `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: null,
                        },
                    },
                    {
                        resolve: `gatsby-plugin-prefetch-google-fonts`,
                        options: {
                            fonts: [
                                {
                                    family: `Roboto Mono`,
                                    variants: [`400`],
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
}
