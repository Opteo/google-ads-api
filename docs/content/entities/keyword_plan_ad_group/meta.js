module.exports = {
    name: 'KeywordPlanAdGroup',
    object: {
        cpc_bid_micros: {
            _description:
                'A default ad group max cpc bid in micros in account currency for all biddable keywords under the keyword plan ad group. If not set, will inherit from parent campaign.',
            _type: 'int64',
        },
        id: { _description: 'The ID of the keyword plan ad group.', _type: 'int64' },
        keyword_plan_campaign: {
            _description: 'The keyword plan campaign to which this ad group belongs.',
            _type: 'string',
        },
        name: {
            _description:
                'The name of the keyword plan ad group. This field is required and should not be empty when creating keyword plan ad group.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'The resource name of the Keyword Planner ad group. KeywordPlanAdGroup resource names have the form: <code>customers/{customer_id}/keywordPlanAdGroups/{kp_ad_group_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
