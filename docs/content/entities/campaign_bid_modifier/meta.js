module.exports = {
    name: 'CampaignBidModifier',
    object: {
        campaign: { _type: 'string', _description: 'The campaign to which this criterion belongs.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the campaign bid modifier. Campaign bid modifier resource names have the form: <code>customers/{customer_id}/campaignBidModifiers/{campaign_id}~{criterion_id}</code>',
        },
        bid_modifier: { _type: 'double', _description: 'The modifier for the bid when the criterion matches.' },
        interaction_type: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'CALLS', description: 'Calls.' },
                ],
                _description: 'The interaction type.',
            },
        },
        criterion_id: {
            _type: 'int64',
            _description: 'The ID of the criterion to bid modify. This field is ignored for mutates.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
