module.exports = {
    name: 'DisplayKeywordView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the display keyword view.\nDisplay Keyword view resource names have the form:\n\n`customers/{customer_id}/displayKeywordViews/{ad_group_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
