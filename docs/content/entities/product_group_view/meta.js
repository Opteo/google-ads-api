module.exports = {
    name: 'ProductGroupView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the product group view.\nProduct group view resource names have the form:\n\n`customers/{customer_id}/productGroupViews/{ad_group_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
