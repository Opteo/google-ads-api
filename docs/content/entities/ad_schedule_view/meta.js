module.exports = {
    name: 'AdScheduleView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the ad schedule view.\nAdSchedule view resource names have the form:\n\n`customers/{customer_id}/adScheduleViews/{campaign_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
