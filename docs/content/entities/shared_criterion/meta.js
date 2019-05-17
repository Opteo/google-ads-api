module.exports = {
    name: 'SharedCriterion',
    object: {
        shared_set: { _type: 'string', _description: 'The shared set to which the shared criterion belongs.' },
        youtube_channel: {
            channel_id: {
                _type: 'string',
                _description: 'The YouTube uploader channel id or the channel code of a YouTube channel.',
            },
            _oneof: 'criterion',
        },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'KEYWORD', description: "Keyword. e.g. 'mars cruise'." },
                { s: 'PLACEMENT', description: "Placement, aka Website. e.g. 'www.flowers4sale.com'" },
                { s: 'MOBILE_APP_CATEGORY', description: 'Mobile application categories to target.' },
                { s: 'MOBILE_APPLICATION', description: 'Mobile applications to target.' },
                { s: 'DEVICE', description: 'Devices to target.' },
                { s: 'LOCATION', description: 'Locations to target.' },
                { s: 'LISTING_GROUP', description: 'Listing groups to target.' },
                { s: 'AD_SCHEDULE', description: 'Ad Schedule.' },
                { s: 'AGE_RANGE', description: 'Age range.' },
                { s: 'GENDER', description: 'Gender.' },
                { s: 'INCOME_RANGE', description: 'Income Range.' },
                { s: 'PARENTAL_STATUS', description: 'Parental status.' },
                { s: 'YOUTUBE_VIDEO', description: 'YouTube Video.' },
                { s: 'YOUTUBE_CHANNEL', description: 'YouTube Channel.' },
                { s: 'USER_LIST', description: 'User list.' },
                { s: 'PROXIMITY', description: 'Proximity.' },
                { s: 'TOPIC', description: 'A topic target on the display network (e.g. "Pets & Animals").' },
                { s: 'LISTING_SCOPE', description: 'Listing scope to target.' },
                { s: 'LANGUAGE', description: 'Language.' },
                { s: 'IP_BLOCK', description: 'IpBlock.' },
                { s: 'CONTENT_LABEL', description: 'Content Label for category exclusion.' },
                { s: 'CARRIER', description: 'Carrier.' },
                { s: 'USER_INTEREST', description: 'A category the user is interested in.' },
                { s: 'WEBPAGE', description: 'Webpage criterion for dynamic search ads.' },
                { s: 'OPERATING_SYSTEM_VERSION', description: 'Operating system version.' },
                { s: 'APP_PAYMENT_MODEL', description: 'App payment model.' },
                { s: 'MOBILE_DEVICE', description: 'Mobile device.' },
                { s: 'CUSTOM_AFFINITY', description: 'Custom affinity.' },
                { s: 'CUSTOM_INTENT', description: 'Custom intent.' },
                { s: 'LOCATION_GROUP', description: 'Location group.' },
            ],
            _description: 'The type of the criterion.',
        },
        mobile_app_category: {
            mobile_app_category_constant: {
                _type: 'string',
                _description: 'The mobile app category constant resource name.',
            },
            _oneof: 'criterion',
        },
        keyword: {
            match_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'EXACT', description: 'Exact match.' },
                    { s: 'PHRASE', description: 'Phrase match.' },
                    { s: 'BROAD', description: 'Broad match.' },
                ],
                _description: 'The match type of the keyword.',
            },
            text: { _type: 'string', _description: 'The text of the keyword (at most 80 characters and 10 words).' },
            _oneof: 'criterion',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the shared criterion. Shared set resource names have the form: <code>customers/{customer_id}/sharedCriteria/{shared_set_id}~{criterion_id}</code>',
        },
        criterion_id: { _type: 'int64', _description: 'The ID of the criterion. This field is ignored for mutates.' },
        placement: {
            url: { _type: 'string', _description: 'URL of the placement. For example, "http://www.domain.com".' },
            _oneof: 'criterion',
        },
        mobile_application: {
            app_id: {
                _type: 'string',
                _description:
                    'A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, this native identifier is the application\'s package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.',
            },
            name: { _type: 'string', _description: 'Name of this mobile application.' },
            _oneof: 'criterion',
        },
        youtube_video: {
            video_id: { _type: 'string', _description: 'YouTube video id as it appears on the YouTube watch page.' },
            _oneof: 'criterion',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
