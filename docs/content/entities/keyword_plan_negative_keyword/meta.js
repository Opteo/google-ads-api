module.exports = {
    name: 'KeywordPlanNegativeKeyword',
    object: {
        id: { _type: 'int64', _description: 'The ID of the Keyword Plan negative keyword.' },
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
                'The resource name of the Keyword Plan negative keyword. KeywordPlanNegativeKeyword resource names have the form: <code>customers/{customer_id}/keywordPlanNegativeKeywords/{kp_negative_keyword_id}</code>',
        },
        keyword_plan_campaign: {
            _type: 'string',
            _description: 'The Keyword Plan campaign to which this negative keyword belongs.',
        },
        text: { _type: 'string', _description: 'The keyword text.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
