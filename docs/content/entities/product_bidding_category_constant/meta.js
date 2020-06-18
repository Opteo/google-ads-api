module.exports = {
    name: 'ProductBiddingCategoryConstant',
    object: {
        country_code: {
            _description: 'Output only. Two-letter upper-case country code of the product bidding category.',
            _type: 'string',
        },
        id: {
            _description:
                'Output only. ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436.',
            _type: 'int64',
        },
        language_code: { _description: 'Output only. Language code of the product bidding category.', _type: 'string' },
        level: {
            _description: 'Output only. Level of the product bidding category.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'LEVEL1', description: 'Level 1.', index: 7 },
                { s: 'LEVEL2', description: 'Level 2.', index: 8 },
                { s: 'LEVEL3', description: 'Level 3.', index: 9 },
                { s: 'LEVEL4', description: 'Level 4.', index: 10 },
                { s: 'LEVEL5', description: 'Level 5.', index: 11 },
            ],
            _type: 'enum',
        },
        localized_name: {
            _description:
                'Output only. Display value of the product bidding category localized according to language_code.',
            _type: 'string',
        },
        product_bidding_category_constant_parent: {
            _description: 'Output only. Resource name of the parent product bidding category.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'Output only. The resource name of the product bidding category. Product bidding category resource names have the form: <code>productBiddingCategoryConstants/{country_code}~{level}~{id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Output only. Status of the product bidding category.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'ACTIVE', description: 'The category is active and can be used for bidding.', index: 2 },
                { s: 'OBSOLETE', description: 'The category is obsolete. Used only for reporting purposes.', index: 3 },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list'],
}
