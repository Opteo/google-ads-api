module.exports = {
    name: 'KeywordPlanAdGroup',
    object: {
        keyword_plan_campaign: {
            _type: 'string',
            _description: 'The keyword plan campaign to which this ad group belongs.',
        },
        id: { _type: 'int64', _description: 'The ID of the keyword plan ad group.' },
        cpc_bid_micros: {
            _type: 'int64',
            _description:
                'A default ad group max cpc bid in micros in account currency for all\nbiddable keywords under the keyword plan ad group.\nIf not set, will inherit from parent campaign.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the Keyword Planner ad group.\nKeywordPlanAdGroup resource names have the form:\n\n`customers/{customer_id}/keywordPlanAdGroups/{kp_ad_group_id}`',
        },
        name: {
            _type: 'string',
            _description:
                'The name of the keyword plan ad group.\n\nThis field is required and should not be empty when creating keyword plan\nad group.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
