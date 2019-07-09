module.exports = {
    name: 'MediaFile',
    object: {
        audio: {
            _oneof: 'mediatype',
            ad_duration_millis: { _description: 'The duration of the Audio in milliseconds.', _type: 'int64' },
        },
        file_size: { _description: 'The size of the media file in bytes.', _type: 'int64' },
        id: { _description: 'The ID of the media file.', _type: 'int64' },
        image: { _oneof: 'mediatype', data: { _description: 'Raw image data.', _type: 'byte' } },
        media_bundle: { _oneof: 'mediatype', data: { _description: 'Raw zipped data.', _type: 'byte' } },
        mime_type: {
            _description: 'The mime type of the media file.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'The mime type has not been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'IMAGE_JPEG', description: 'MIME type of image/jpeg.' },
                { s: 'IMAGE_GIF', description: 'MIME type of image/gif.' },
                { s: 'IMAGE_PNG', description: 'MIME type of image/png.' },
                { s: 'FLASH', description: 'MIME type of application/x-shockwave-flash.' },
                { s: 'TEXT_HTML', description: 'MIME type of text/html.' },
                { s: 'PDF', description: 'MIME type of application/pdf.' },
                { s: 'MSWORD', description: 'MIME type of application/msword.' },
                { s: 'MSEXCEL', description: 'MIME type of application/vnd.ms-excel.' },
                { s: 'RTF', description: 'MIME type of application/rtf.' },
                { s: 'AUDIO_WAV', description: 'MIME type of audio/wav.' },
                { s: 'AUDIO_MP3', description: 'MIME type of audio/mp3.' },
                { s: 'HTML5_AD_ZIP', description: 'MIME type of application/x-html5-ad-zip.' },
            ],
            _type: 'enum',
        },
        name: {
            _description:
                'The name of the media file. The name can be used by clients to help identify previously uploaded media.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'The resource name of the media file. Media file resource names have the form: <code>customers/{customer_id}/mediaFiles/{media_file_id}</code>',
            _type: 'string',
        },
        source_url: {
            _description:
                'The URL of where the original media file was downloaded from (or a file name). Only used for media of type AUDIO and IMAGE.',
            _type: 'string',
        },
        type: {
            _description: 'Type of the media file.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'The media type has not been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'IMAGE', description: 'Static image, used for image ad.' },
                { s: 'ICON', description: 'Small image, used for map ad.' },
                { s: 'MEDIA_BUNDLE', description: 'ZIP file, used in fields of template ads.' },
                { s: 'AUDIO', description: 'Audio file.' },
                { s: 'VIDEO', description: 'Video file.' },
                { s: 'DYNAMIC_IMAGE', description: 'Animated image, such as animated GIF.' },
            ],
            _type: 'enum',
        },
        video: {
            _oneof: 'mediatype',
            ad_duration_millis: { _description: 'The duration of the Video in milliseconds.', _type: 'int64' },
            advertising_id_code: {
                _description:
                    'The Advertising Digital Identification code for this video, as defined by the American Association of Advertising Agencies, used mainly for television commercials.',
                _type: 'string',
            },
            isci_code: {
                _description:
                    'The Industry Standard Commercial Identifier code for this video, used mainly for television commercials.',
                _type: 'string',
            },
            youtube_video_id: { _description: 'The YouTube video ID (as seen in YouTube URLs).', _type: 'string' },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
