module.exports = {
    name: 'FeedItemTarget',
    object: {
        ad_group: { _description: 'Immutable. The targeted ad group.', _oneof: 'target', _type: 'string' },
        ad_schedule: {
            _oneof: 'target',
            _parent_description: 'Immutable. The targeted schedule.',
            day_of_week: {
                _description:
                    'Day of the week the schedule applies to. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'MONDAY', description: 'Monday.', index: 2 },
                    { s: 'TUESDAY', description: 'Tuesday.', index: 3 },
                    { s: 'WEDNESDAY', description: 'Wednesday.', index: 4 },
                    { s: 'THURSDAY', description: 'Thursday.', index: 5 },
                    { s: 'FRIDAY', description: 'Friday.', index: 6 },
                    { s: 'SATURDAY', description: 'Saturday.', index: 7 },
                    { s: 'SUNDAY', description: 'Sunday.', index: 8 },
                ],
                _type: 'enum',
            },
            end_hour: {
                _description:
                    'Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _type: 'int32',
            },
            end_minute: {
                _description:
                    'Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'ZERO', description: 'Zero minutes past the hour.', index: 2 },
                    { s: 'FIFTEEN', description: 'Fifteen minutes past the hour.', index: 3 },
                    { s: 'THIRTY', description: 'Thirty minutes past the hour.', index: 4 },
                    { s: 'FORTY_FIVE', description: 'Forty-five minutes past the hour.', index: 5 },
                ],
                _type: 'enum',
            },
            start_hour: {
                _description:
                    'Starting hour in 24 hour time. This field must be between 0 and 23, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _type: 'int32',
            },
            start_minute: {
                _description:
                    'Minutes after the start hour at which this schedule starts. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'ZERO', description: 'Zero minutes past the hour.', index: 2 },
                    { s: 'FIFTEEN', description: 'Fifteen minutes past the hour.', index: 3 },
                    { s: 'THIRTY', description: 'Thirty minutes past the hour.', index: 4 },
                    { s: 'FORTY_FIVE', description: 'Forty-five minutes past the hour.', index: 5 },
                ],
                _type: 'enum',
            },
        },
        campaign: { _description: 'Immutable. The targeted campaign.', _oneof: 'target', _type: 'string' },
        device: {
            _description: 'Immutable. The targeted device.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'MOBILE', description: 'Mobile.', index: 2 },
            ],
            _oneof: 'target',
            _type: 'enum',
        },
        feed_item: {
            _description: 'Immutable. The feed item to which this feed item target belongs.',
            _type: 'string',
        },
        feed_item_target_id: {
            _description: 'Output only. The ID of the targeted resource. This field is read-only.',
            _type: 'int64',
        },
        feed_item_target_type: {
            _description: 'Output only. The target type of this feed item target. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'CAMPAIGN', description: 'Feed item targets a campaign.', index: 2 },
                { s: 'AD_GROUP', description: 'Feed item targets an ad group.', index: 3 },
                { s: 'CRITERION', description: 'Feed item targets a criterion.', index: 4 },
            ],
            _type: 'enum',
        },
        geo_target_constant: {
            _description: 'Immutable. The targeted geo target constant resource name.',
            _oneof: 'target',
            _type: 'string',
        },
        keyword: {
            _oneof: 'target',
            _parent_description: 'Immutable. The targeted keyword.',
            match_type: {
                _description: 'The match type of the keyword.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'EXACT', description: 'Exact match.', index: 2 },
                    { s: 'PHRASE', description: 'Phrase match.', index: 3 },
                    { s: 'BROAD', description: 'Broad match.', index: 4 },
                ],
                _type: 'enum',
            },
            text: { _description: 'The text of the keyword (at most 80 characters and 10 words).', _type: 'string' },
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the feed item target. Feed item target resource names have the form: <code>customers/{customer_id}/feedItemTargets/{feed_id}~{feed_item_id}~{feed_item_target_type}~{feed_item_target_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Output only. Status of the feed item target. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'Feed item target is enabled.', index: 2 },
                { s: 'REMOVED', description: 'Feed item target has been removed.', index: 3 },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
