module.exports = {
    name: 'AdGroupAdLabel',
    object: {
        ad_group_ad: { _description: 'Immutable. The ad group ad to which the label is attached.', _type: 'string' },
        label: { _description: 'Immutable. The label assigned to the ad group ad.', _type: 'string' },
        resource_name: {
            _description:
                'Immutable. The resource name of the ad group ad label. Ad group ad label resource names have the form: <code>customers/{customer_id}/adGroupAdLabels/{ad_group_id}~{ad_id}~{label_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
