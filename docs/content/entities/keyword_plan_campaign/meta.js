module.exports = {
    name: 'KeywordPlanCampaign',
    object: {
        cpc_bid_micros: {
            _description:
                'A default max cpc bid in micros, and in the account currency, for all ad groups under the campaign. This field is required and should not be empty when creating Keyword Plan campaigns.',
            _type: 'int64',
        },
        geo_targets: {
            _parent_description: 'The geo targets. Max number allowed: 20.',
            _type: 'array of objects',
            geo_target_constant: { _description: 'Required. The resource name of the geo target.', _type: 'string' },
        },
        id: { _description: 'Output only. The ID of the Keyword Plan campaign.', _type: 'int64' },
        keyword_plan: { _description: 'The keyword plan this campaign belongs to.', _type: 'string' },
        keyword_plan_network: {
            _description:
                'Targeting network. This field is required and should not be empty when creating Keyword Plan campaigns.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                { s: 'GOOGLE_SEARCH', description: 'Google Search.', index: 2 },
                { s: 'GOOGLE_SEARCH_AND_PARTNERS', description: 'Google Search + Search partners.', index: 3 },
            ],
            _type: 'enum',
        },
        language_constants: {
            _description: 'The languages targeted for the Keyword Plan campaign. Max allowed: 1.',
            _type: 'array of strings',
        },
        name: {
            _description:
                'The name of the Keyword Plan campaign. This field is required and should not be empty when creating Keyword Plan campaigns.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the Keyword Plan campaign. KeywordPlanCampaign resource names have the form: <code>customers/{customer_id}/keywordPlanCampaigns/{kp_campaign_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
