module.exports = {
    name: 'KeywordPlanAdGroup',
    object: {
        id: { _type: 'int64', _description: 'The ID of the keyword plan ad group.' },
        cpc_bid_micros: {
            _type: 'int64',
            _description:
                'A default ad group max cpc bid in micros in account currency for all biddable keywords under the keyword plan ad group. If not set, will inherit from parent campaign.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the Keyword Planner ad group. KeywordPlanAdGroup resource names have the form: <code>customers/{customer_id}/keywordPlanAdGroups/{kp_ad_group_id}</code>',
        },
        name: {
            _type: 'string',
            _description:
                'The name of the keyword plan ad group. This field is required and should not be empty when creating keyword plan ad group.',
        },
        keyword_plan_campaign: {
            _type: 'string',
            _description: 'The keyword plan campaign to which this ad group belongs.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
