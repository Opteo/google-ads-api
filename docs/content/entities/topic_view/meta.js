module.exports = {
    name: 'TopicView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the topic view.\nTopic view resource names have the form:\n\n`customers/{customer_id}/topicViews/{ad_group_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
