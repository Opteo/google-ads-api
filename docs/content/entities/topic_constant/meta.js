module.exports = {
    name: 'TopicConstant',
    object: {
        id: { _type: 'int64', _description: 'The ID of the topic.' },
        path: {
            _type: 'array',
            _description:
                'The category to target or exclude. Each subsequent element in the array describes a more specific sub-category. For example, {"Pets &amp; Animals", "Pets", "Dogs"} represents the "Pets &amp; Animals/Pets/Dogs" category. A complete list of available topic categories is available <a href="https://developers.google.com/adwords/api/docs/appendix/verticals">here</a>',
        },
        topic_constant_parent: { _type: 'string', _description: 'Resource name of parent of the topic constant.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the topic constant. topic constant resource names have the form: <code>topicConstants/{topic_id}</code>',
        },
    },
    methods: ['get', 'list'],
}
