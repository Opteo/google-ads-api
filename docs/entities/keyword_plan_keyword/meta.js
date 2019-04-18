module.exports = {
    name: 'KeywordPlanKeyword',
    object: {
        match_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'EXACT', description: 'Exact match.' },
                { s: 'PHRASE', description: 'Phrase match.' },
                { s: 'BROAD', description: 'Broad match.' },
            ],
            _description: 'The keyword match type.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the Keyword Plan ad group keyword.\nKeywordPlanKeyword resource names have the form:\n\n`customers/{customer_id}/keywordPlanKeywords/{kp_ad_group_keyword_id}`',
        },
        cpc_bid_micros: {
            _type: 'int64',
            _description:
                'A keyword level max cpc bid in micros, in the account currency, that\noverrides the keyword plan ad group cpc bid.',
        },
        keyword_plan_ad_group: {
            _type: 'string',
            _description: 'The Keyword Plan ad group to which this keyword belongs.',
        },
        text: { _type: 'string', _description: 'The keyword text.' },
        id: { _type: 'int64', _description: 'The ID of the Keyword Plan keyword.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
