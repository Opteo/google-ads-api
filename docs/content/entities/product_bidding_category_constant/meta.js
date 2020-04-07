module.exports = {
    name: 'ProductBiddingCategoryConstant',
    object: {
        country_code: {
            _description: 'Two-letter upper-case country code of the product bidding category.',
            _type: 'string',
        },
        id: {
            _description:
                'ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436.',
            _type: 'int64',
        },
        language_code: { _description: 'Language code of the product bidding category.', _type: 'string' },
        level: {
            _description: 'Level of the product bidding category.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'LEVEL1', description: 'Level 1.' },
                { s: 'LEVEL2', description: 'Level 2.' },
                { s: 'LEVEL3', description: 'Level 3.' },
                { s: 'LEVEL4', description: 'Level 4.' },
                { s: 'LEVEL5', description: 'Level 5.' },
            ],
            _type: 'enum',
        },
        localized_name: {
            _description: 'Display value of the product bidding category localized according to language_code.',
            _type: 'string',
        },
        product_bidding_category_constant_parent: {
            _description: 'Resource name of the parent product bidding category.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'The resource name of the product bidding category. Product bidding category resource names have the form: <code>productBiddingCategoryConstants/{country_code}~{level}~{id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Status of the product bidding category.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ACTIVE', description: 'The category is active and can be used for bidding.' },
                { s: 'OBSOLETE', description: 'The category is obsolete. Used only for reporting purposes.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list'],
}
