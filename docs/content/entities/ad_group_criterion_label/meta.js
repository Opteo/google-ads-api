module.exports = {
    name: 'AdGroupCriterionLabel',
    object: {
        ad_group_criterion: {
            _description: 'Immutable. The ad group criterion to which the label is attached.',
            _type: 'string',
        },
        label: { _description: 'Immutable. The label assigned to the ad group criterion.', _type: 'string' },
        resource_name: {
            _description:
                'Immutable. The resource name of the ad group criterion label. Ad group criterion label resource names have the form: <code>customers/{customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
