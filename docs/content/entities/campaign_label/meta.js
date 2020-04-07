module.exports = {
    name: 'CampaignLabel',
    object: {
        campaign: { _description: 'The campaign to which the label is attached.', _type: 'string' },
        label: { _description: 'The label assigned to the campaign.', _type: 'string' },
        resource_name: {
            _description:
                'Name of the resource. Campaign label resource names have the form: <code>customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
