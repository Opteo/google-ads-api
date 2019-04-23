module.exports = {
    name: 'AdGroupAudienceView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the ad group audience view.\nAd group audience view resource names have the form:\n\n`customers/{customer_id}/adGroupAudienceViews/{ad_group_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
