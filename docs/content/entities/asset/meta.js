module.exports = {
    name: 'Asset',
    object: {
        id: { _description: 'The ID of the asset.', _type: 'int64' },
        image_asset: {
            _oneof: 'assetData',
            data: { _description: 'The raw bytes data of an image. This field is mutate only.', _type: 'byte' },
            file_size: { _description: 'File size of the image asset in bytes.', _type: 'int64' },
            full_size: {
                height_pixels: { _description: 'Height of the image.', _type: 'int64' },
                url: { _description: 'A URL that returns the image with this height and width.', _type: 'string' },
                width_pixels: { _description: 'Width of the image.', _type: 'int64' },
            },
            mime_type: {
                _description: 'MIME type of the image asset.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'The mime type has not been specified.' },
                    {
                        s: 'UNKNOWN',
                        description:
                            'The received value is not known in this version.\n\nThis is a response-only value.',
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
        },
        media_bundle_asset: {
            _oneof: 'assetData',
            data: {
                _description:
                    'Media bundle (ZIP file) asset data. The format of the uploaded ZIP file depends on the ad field where it will be used. For more information on the format, see the documentation of the ad field where you plan on using the MediaBundleAsset. This field is mutate only.',
                _type: 'byte',
            },
        },
        name: { _description: 'Optional name of the asset.', _type: 'string' },
        resource_name: {
            _description:
                'The resource name of the asset. Asset resource names have the form: <code>customers/{customer_id}/assets/{asset_id}</code>',
            _type: 'string',
        },
        text_asset: { _oneof: 'assetData', text: { _description: 'Text content of the text asset.', _type: 'string' } },
        type: {
            _description: 'Type of the asset.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'YOUTUBE_VIDEO', description: 'YouTube video asset.' },
                { s: 'MEDIA_BUNDLE', description: 'Media bundle asset.' },
                { s: 'IMAGE', description: 'Image asset.' },
                { s: 'TEXT', description: 'Text asset.' },
            ],
            _type: 'enum',
        },
        youtube_video_asset: {
            _oneof: 'assetData',
            youtube_video_id: {
                _description: 'YouTube video id. This is the 11 character string value used in the YouTube video URL.',
                _type: 'string',
            },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
