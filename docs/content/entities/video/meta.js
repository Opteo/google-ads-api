module.exports = {
    name: 'Video',
    object: {
        channel_id: { _description: 'The owner channel id of the video.', _type: 'string' },
        duration_millis: { _description: 'The duration of the video in milliseconds.', _type: 'int64' },
        id: { _description: 'The ID of the video.', _type: 'string' },
        resource_name: {
            _description:
                'The resource name of the video. Video resource names have the form: <code>customers/{customer_id}/videos/{video_id}</code>',
            _type: 'string',
        },
        title: { _description: 'The title of the video.', _type: 'string' },
    },
    methods: ['get', 'list'],
}
