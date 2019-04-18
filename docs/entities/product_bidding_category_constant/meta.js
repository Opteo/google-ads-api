module.exports = {
    name: 'ProductBiddingCategoryConstant',
    object: {
        localized_name: {
            _type: 'string',
            _description: 'Display value of the product bidding category localized according to\nlanguage_code.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the product bidding category.\nProduct bidding category resource names have the form:\n\n`productBiddingCategoryConstants/{country_code}~{level}~{id}`',
        },
        country_code: {
            _type: 'string',
            _description: 'Two-letter upper-case country code of the product bidding category.',
        },
        language_code: { _type: 'string', _description: 'Language code of the product bidding category.' },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ACTIVE', description: 'The category is active and can be used for bidding.' },
                { s: 'OBSOLETE', description: 'The category is obsolete. Used only for reporting purposes.' },
            ],
            _description: 'Status of the product bidding category.',
        },
        product_bidding_category_constant_parent: {
            _type: 'string',
            _description: 'Resource name of the parent product bidding category.',
        },
        level: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'LEVEL1', description: 'Level 1.' },
                { s: 'LEVEL2', description: 'Level 2.' },
                { s: 'LEVEL3', description: 'Level 3.' },
                { s: 'LEVEL4', description: 'Level 4.' },
                { s: 'LEVEL5', description: 'Level 5.' },
            ],
            _description: 'Level of the product bidding category.',
        },
        id: {
            _type: 'int64',
            _description:
                'ID of the product bidding category.\n\nThis ID is equivalent to the google_product_category ID as described in\nthis article: https://support.google.com/merchants/answer/6324436.',
        },
    },
    methods: ['get', 'list'],
}
