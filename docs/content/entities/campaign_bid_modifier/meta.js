module.exports = {
    name: 'CampaignBidModifier',
    object: {
        bid_modifier: { _description: 'The modifier for the bid when the criterion matches.', _type: 'double' },
        campaign: { _description: 'Output only. The campaign to which this criterion belongs.', _type: 'string' },
        criterion_id: {
            _description: 'Output only. The ID of the criterion to bid modify. This field is ignored for mutates.',
            _type: 'int64',
        },
        interaction_type: {
            _parent_description: 'Immutable. Criterion for interaction type. Only supported for search campaigns.',
            type: {
                _description: 'The interaction type.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'CALLS', description: 'Calls.', index: 8000 },
                ],
                _type: 'enum',
            },
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the campaign bid modifier. Campaign bid modifier resource names have the form: <code>customers/{customer_id}/campaignBidModifiers/{campaign_id}~{criterion_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
