module.exports = {
    name: 'Video',
    object: {
        channel_id: { _description: 'Output only. The owner channel id of the video.', _type: 'string' },
        duration_millis: { _description: 'Output only. The duration of the video in milliseconds.', _type: 'int64' },
        id: { _description: 'Output only. The ID of the video.', _type: 'string' },
        resource_name: {
            _description:
                'Output only. The resource name of the video. Video resource names have the form: <code>customers/{customer_id}/videos/{video_id}</code>',
            _type: 'string',
        },
        title: { _description: 'Output only. The title of the video.', _type: 'string' },
    },
    methods: ['get', 'list'],
}
