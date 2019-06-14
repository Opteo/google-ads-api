module.exports = {
    name: 'DomainCategory',
    object: {
        campaign: { _description: 'The campaign this category is recommended for.', _type: 'string' },
        category: {
            _description:
                'Recommended category for the website domain. e.g. if you have a website about electronics, the categories could be "cameras", "televisions", etc.',
            _type: 'string',
        },
        category_rank: {
            _description:
                'The position of this category in the set of categories. Lower numbers indicate a better match for the domain. null indicates not recommended.',
            _type: 'int64',
        },
        coverage_fraction: {
            _description: 'Fraction of pages on your site that this category matches.',
            _type: 'double',
        },
        domain: {
            _description:
                'The domain for the website. The domain can be specified in the DynamicSearchAdsSetting required for dynamic search ads.',
            _type: 'string',
        },
        has_children: { _description: 'Indicates whether this category has sub-categories.', _type: 'boolean' },
        language_code: {
            _description:
                'The language code specifying the language of the website. e.g. "en" for English. The language can be specified in the DynamicSearchAdsSetting required for dynamic search ads. This is the language of the pages from your website that you want Google Ads to find, create ads for, and match searches with.',
            _type: 'string',
        },
        recommended_cpc_bid_micros: {
            _description: 'The recommended cost per click for the category.',
            _type: 'int64',
        },
        resource_name: {
            _description:
                'The resource name of the domain category. Domain category resource names have the form: <code>customers/{customer_id}/domainCategories/{campaign_id}~{category_base64}~{language_code}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list'],
}
