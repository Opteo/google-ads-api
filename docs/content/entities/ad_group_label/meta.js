module.exports = {
    name: 'AdGroupLabel',
    object: {
        ad_group: { _description: 'Immutable. The ad group to which the label is attached.', _type: 'string' },
        label: { _description: 'Immutable. The label assigned to the ad group.', _type: 'string' },
        resource_name: {
            _description:
                'Immutable. The resource name of the ad group label. Ad group label resource names have the form: <code>customers/{customer_id}/adGroupLabels/{ad_group_id}~{label_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
