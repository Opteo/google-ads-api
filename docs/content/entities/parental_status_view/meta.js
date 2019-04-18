module.exports = {
    name: 'ParentalStatusView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the parental status view.\nParental Status view resource names have the form:\n\n`customers/{customer_id}/parentalStatusViews/{ad_group_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
