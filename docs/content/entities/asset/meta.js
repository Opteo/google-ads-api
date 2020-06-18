module.exports = {
    name: 'Asset',
    object: {
        id: { _description: 'Output only. The ID of the asset.', _type: 'int64' },
        image_asset: {
            _oneof: 'assetData',
            _parent_description: 'Output only. An image asset.',
            data: { _description: 'The raw bytes data of an image. This field is mutate only.', _type: 'byte' },
            file_size: { _description: 'File size of the image asset in bytes.', _type: 'int64' },
            full_size: {
                _parent_description: 'Metadata for this image at its original size.',
                height_pixels: { _description: 'Height of the image.', _type: 'int64' },
                url: { _description: 'A URL that returns the image with this height and width.', _type: 'string' },
                width_pixels: { _description: 'Width of the image.', _type: 'int64' },
            },
            mime_type: {
                _description: 'MIME type of the image asset.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'The mime type has not been specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description:
                            'The received value is not known in this version.\n\nThis is a response-only value.',
                        index: 1,
                    },
                    { s: 'IMAGE_JPEG', description: 'MIME type of image/jpeg.', index: 2 },
                    { s: 'IMAGE_GIF', description: 'MIME type of image/gif.', index: 3 },
                    { s: 'IMAGE_PNG', description: 'MIME type of image/png.', index: 4 },
                    { s: 'FLASH', description: 'MIME type of application/x-shockwave-flash.', index: 5 },
                    { s: 'TEXT_HTML', description: 'MIME type of text/html.', index: 6 },
                    { s: 'PDF', description: 'MIME type of application/pdf.', index: 7 },
                    { s: 'MSWORD', description: 'MIME type of application/msword.', index: 8 },
                    { s: 'MSEXCEL', description: 'MIME type of application/vnd.ms-excel.', index: 9 },
                    { s: 'RTF', description: 'MIME type of application/rtf.', index: 10 },
                    { s: 'AUDIO_WAV', description: 'MIME type of audio/wav.', index: 11 },
                    { s: 'AUDIO_MP3', description: 'MIME type of audio/mp3.', index: 12 },
                    { s: 'HTML5_AD_ZIP', description: 'MIME type of application/x-html5-ad-zip.', index: 13 },
                ],
                _type: 'enum',
            },
        },
        media_bundle_asset: {
            _oneof: 'assetData',
            _parent_description: 'Immutable. A media bundle asset.',
            data: {
                _description:
                    'Media bundle (ZIP file) asset data. The format of the uploaded ZIP file depends on the ad field where it will be used. For more information on the format, see the documentation of the ad field where you plan on using the MediaBundleAsset. This field is mutate only.',
                _type: 'byte',
            },
        },
        name: { _description: 'Immutable. Optional name of the asset.', _type: 'string' },
        resource_name: {
            _description:
                'Immutable. The resource name of the asset. Asset resource names have the form: <code>customers/{customer_id}/assets/{asset_id}</code>',
            _type: 'string',
        },
        text_asset: {
            _oneof: 'assetData',
            _parent_description: 'Output only. A text asset.',
            text: { _description: 'Text content of the text asset.', _type: 'string' },
        },
        type: {
            _description: 'Output only. Type of the asset.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'YOUTUBE_VIDEO', description: 'YouTube video asset.', index: 2 },
                { s: 'MEDIA_BUNDLE', description: 'Media bundle asset.', index: 3 },
                { s: 'IMAGE', description: 'Image asset.', index: 4 },
                { s: 'TEXT', description: 'Text asset.', index: 5 },
            ],
            _type: 'enum',
        },
        youtube_video_asset: {
            _oneof: 'assetData',
            _parent_description: 'Immutable. A YouTube video asset.',
            youtube_video_id: {
                _description: 'YouTube video id. This is the 11 character string value used in the YouTube video URL.',
                _type: 'string',
            },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
