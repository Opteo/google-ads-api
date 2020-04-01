module.exports = {
    name: 'KeywordPlanKeyword',
    object: {
        cpc_bid_micros: {
            _description:
                'A keyword level max cpc bid in micros, in the account currency, that overrides the keyword plan ad group cpc bid.',
            _type: 'int64',
        },
        id: { _description: 'Output only. The ID of the Keyword Plan keyword.', _type: 'int64' },
        keyword_plan_ad_group: {
            _description: 'The Keyword Plan ad group to which this keyword belongs.',
            _type: 'string',
        },
        match_type: {
            _description: 'The keyword match type.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'EXACT', description: 'Exact match.' },
                { s: 'PHRASE', description: 'Phrase match.' },
                { s: 'BROAD', description: 'Broad match.' },
            ],
            _type: 'enum',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the Keyword Plan ad group keyword. KeywordPlanKeyword resource names have the form: <code>customers/{customer_id}/keywordPlanKeywords/{kp_ad_group_keyword_id}</code>',
            _type: 'string',
        },
        text: { _description: 'The keyword text.', _type: 'string' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
