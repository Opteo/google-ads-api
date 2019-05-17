module.exports = {
    name: 'CampaignLabel',
    object: {
        label: { _type: 'string', _description: 'The label assigned to the campaign.' },
        campaign: { _type: 'string', _description: 'The campaign to which the label is attached.' },
        resource_name: {
            _type: 'string',
            _description:
                'Name of the resource. Campaign label resource names have the form: <code>customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}</code>',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
