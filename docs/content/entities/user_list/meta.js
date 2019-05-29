module.exports = {
    name: 'UserList',
    object: {
        access_reason: {
            _description:
                'Indicates the reason this account has been granted access to the list. The reason can be SHARED, OWNED, LICENSED or SUBSCRIBED. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'OWNED', description: 'The resource is owned by the user.' },
                { s: 'SHARED', description: 'The resource is shared to the user.' },
                { s: 'LICENSED', description: 'The resource is licensed to the user.' },
                { s: 'SUBSCRIBED', description: 'The user subscribed to the resource.' },
                { s: 'AFFILIATED', description: 'The resource is accessible to the user.' },
            ],
            _type: 'enum',
        },
        account_user_list_status: {
            _description:
                'Indicates if this share is still enabled. When a UserList is shared with the user this field is set to ENABLED. Later the userList owner can decide to revoke the share and make it DISABLED. The default value of this field is set to ENABLED.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'The access is enabled.' },
                { s: 'DISABLED', description: 'The access is disabled.' },
            ],
            _type: 'enum',
        },
        basic_user_list: {
            _oneof: 'userList',
            actions: { _description: 'Actions associated with this user list.', _type: 'array' },
        },
        closing_reason: {
            _description:
                'Indicating the reason why this user list membership status is closed. It is only populated on lists that were automatically closed due to inactivity, and will be cleared once the list membership status becomes open.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'UNUSED', description: 'The userlist was closed because of not being used for over one year.' },
            ],
            _type: 'enum',
        },
        crm_based_user_list: {
            _oneof: 'userList',
            app_id: {
                _description:
                    'A string that uniquely identifies a mobile application from which the data was collected to the Google Ads API. For iOS, the ID string is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, the ID string is the application\'s package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). Required when creating CrmBasedUserList for uploading mobile advertising IDs.',
                _type: 'string',
            },
            data_source_type: {
                _description:
                    'Data source of the list. Default value is FIRST_PARTY. Only whitelisted customers can create third-party sourced CRM lists.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'FIRST_PARTY', description: 'The uploaded data is first-party data.' },
                    {
                        s: 'THIRD_PARTY_CREDIT_BUREAU',
                        description: 'The uploaded data is from a third-party credit bureau.',
                    },
                    { s: 'THIRD_PARTY_VOTER_FILE', description: 'The uploaded data is from a third-party voter file.' },
                ],
                _type: 'enum',
            },
            upload_key_type: {
                _description:
                    'Matching key type of the list. Mixed data types are not allowed on the same list. This field is required for an ADD operation.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'CONTACT_INFO',
                        description:
                            'Members are matched from customer info such as email address, phone\nnumber or physical address.',
                    },
                    {
                        s: 'CRM_ID',
                        description: 'Members are matched from a user id generated and assigned by the\nadvertiser.',
                    },
                    { s: 'MOBILE_ADVERTISING_ID', description: 'Members are matched from mobile advertising ids.' },
                ],
                _type: 'enum',
            },
        },
        description: { _description: 'Description of this user list.', _type: 'string' },
        eligible_for_display: {
            _description: 'Indicates this user list is eligible for Google Display Network. This field is read-only.',
            _type: 'boolean',
        },
        eligible_for_search: {
            _description: 'Indicates if this user list is eligible for Google Search Network.',
            _type: 'boolean',
        },
        id: { _description: 'Id of the user list.', _type: 'int64' },
        integration_code: {
            _description:
                'An ID from external system. It is used by user list sellers to correlate IDs on their systems.',
            _type: 'string',
        },
        logical_user_list: {
            _oneof: 'userList',
            rules: {
                _description:
                    'Logical list rules that define this user list. The rules are defined as a logical operator (ALL/ANY/NONE) and a list of user lists. All the rules are ANDed when they are evaluated. Required for creating a logical user list.',
                _type: 'array',
            },
        },
        membership_life_span: {
            _description:
                "Number of days a user's cookie stays on your list since its most recent addition to the list. This field must be between 0 and 540 inclusive. However, for CRM based userlists, this field can be set to 10000 which means no expiration. It'll be ignored for logical_user_list.",
            _type: 'int64',
        },
        membership_status: {
            _description:
                'Membership status of this user list. Indicates whether a user list is open or active. Only open user lists can accumulate more users and can be targeted to.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'OPEN', description: 'Open status - List is accruing members and can be targeted to.' },
                {
                    s: 'CLOSED',
                    description: 'Closed status - No new members being added. Cannot be used for targeting.',
                },
            ],
            _type: 'enum',
        },
        name: {
            _description:
                'Name of this user list. Depending on its access_reason, the user list name may not be unique (e.g. if access_reason=SHARED)',
            _type: 'string',
        },
        read_only: {
            _description:
                'A flag that indicates if a user may edit a list. Depends on the list ownership and list type. For example, external remarketing user lists are not editable. This field is read-only.',
            _type: 'boolean',
        },
        resource_name: {
            _description:
                'The resource name of the user list. User list resource names have the form: <code>customers/{customer_id}/userLists/{user_list_id}</code>',
            _type: 'string',
        },
        rule_based_user_list: {
            _oneof: 'userList',
            combined_rule_user_list: {
                left_operand: {
                    rule_item_groups: {
                        _description:
                            'List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.',
                        _type: 'array',
                    },
                    rule_type: {
                        _description:
                            'Rule type is used to determine how to group rule items. The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together. Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.' },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.' },
                        ],
                        _type: 'enum',
                    },
                },
                right_operand: {
                    rule_item_groups: {
                        _description:
                            'List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.',
                        _type: 'array',
                    },
                    rule_type: {
                        _description:
                            'Rule type is used to determine how to group rule items. The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together. Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.' },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.' },
                        ],
                        _type: 'enum',
                    },
                },
                rule_operator: {
                    _description:
                        'Operator to connect the two operands. Required for creating a combined rule user list.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'AND', description: 'A AND B.' },
                        { s: 'AND_NOT', description: 'A AND NOT B.' },
                    ],
                    _type: 'enum',
                },
            },
            date_specific_rule_user_list: {
                end_date: {
                    _description:
                        "End date of users visit. If set to 2037-12-30, then the list includes all users after start_date. The date's format should be YYYY-MM-DD. Required for creating a data specific rule user list.",
                    _type: 'string',
                },
                rule: {
                    rule_item_groups: {
                        _description:
                            'List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.',
                        _type: 'array',
                    },
                    rule_type: {
                        _description:
                            'Rule type is used to determine how to group rule items. The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together. Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.' },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.' },
                        ],
                        _type: 'enum',
                    },
                },
                start_date: {
                    _description:
                        "Start date of users visit. If set to 2000-01-01, then the list includes all users before end_date. The date's format should be YYYY-MM-DD. Required for creating a data specific rule user list.",
                    _type: 'string',
                },
            },
            expression_rule_user_list: {
                rule: {
                    rule_item_groups: {
                        _description:
                            'List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.',
                        _type: 'array',
                    },
                    rule_type: {
                        _description:
                            'Rule type is used to determine how to group rule items. The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together. Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.' },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.' },
                        ],
                        _type: 'enum',
                    },
                },
            },
            prepopulation_status: {
                _description:
                    "The status of pre-population. The field is default to NONE if not set which means the previous users will not be considered. If set to REQUESTED, past site visitors or app users who match the list definition will be included in the list (works on the Display Network only). This will only add past users from within the last 30 days, depending on the list's membership duration and the date when the remarketing tag is added. The status will be updated to FINISHED once request is processed, or FAILED if the request fails.",
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'REQUESTED', description: 'Prepopoulation is being requested.' },
                    { s: 'FINISHED', description: 'Prepopulation is finished.' },
                    { s: 'FAILED', description: 'Prepopulation failed.' },
                ],
                _type: 'enum',
            },
        },
        similar_user_list: {
            _oneof: 'userList',
            seed_user_list: { _description: 'Seed UserList from which this list is derived.', _type: 'string' },
        },
        size_for_display: {
            _description:
                'Estimated number of users in this user list, on the Google Display Network. This value is null if the number of users has not yet been determined. This field is read-only.',
            _type: 'int64',
        },
        size_for_search: {
            _description:
                'Estimated number of users in this user list in the google.com domain. These are the users available for targeting in Search campaigns. This value is null if the number of users has not yet been determined. This field is read-only.',
            _type: 'int64',
        },
        size_range_for_display: {
            _description:
                'Size range in terms of number of users of the UserList, on the Google Display Network. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'LESS_THAN_FIVE_HUNDRED', description: 'User list has less than 500 users.' },
                { s: 'LESS_THAN_ONE_THOUSAND', description: 'User list has number of users in range of 500 to 1000.' },
                {
                    s: 'ONE_THOUSAND_TO_TEN_THOUSAND',
                    description: 'User list has number of users in range of 1000 to 10000.',
                },
                {
                    s: 'TEN_THOUSAND_TO_FIFTY_THOUSAND',
                    description: 'User list has number of users in range of 10000 to 50000.',
                },
                {
                    s: 'FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 50000 to 100000.',
                },
                {
                    s: 'ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 100000 to 300000.',
                },
                {
                    s: 'THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 300000 to 500000.',
                },
                {
                    s: 'FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION',
                    description: 'User list has number of users in range of 500000 to 1 million.',
                },
                {
                    s: 'ONE_MILLION_TO_TWO_MILLION',
                    description: 'User list has number of users in range of 1 to 2 millions.',
                },
                {
                    s: 'TWO_MILLION_TO_THREE_MILLION',
                    description: 'User list has number of users in range of 2 to 3 millions.',
                },
                {
                    s: 'THREE_MILLION_TO_FIVE_MILLION',
                    description: 'User list has number of users in range of 3 to 5 millions.',
                },
                {
                    s: 'FIVE_MILLION_TO_TEN_MILLION',
                    description: 'User list has number of users in range of 5 to 10 millions.',
                },
                {
                    s: 'TEN_MILLION_TO_TWENTY_MILLION',
                    description: 'User list has number of users in range of 10 to 20 millions.',
                },
                {
                    s: 'TWENTY_MILLION_TO_THIRTY_MILLION',
                    description: 'User list has number of users in range of 20 to 30 millions.',
                },
                {
                    s: 'THIRTY_MILLION_TO_FIFTY_MILLION',
                    description: 'User list has number of users in range of 30 to 50 millions.',
                },
                { s: 'OVER_FIFTY_MILLION', description: 'User list has over 50 million users.' },
            ],
            _type: 'enum',
        },
        size_range_for_search: {
            _description:
                'Size range in terms of number of users of the UserList, for Search ads. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'LESS_THAN_FIVE_HUNDRED', description: 'User list has less than 500 users.' },
                { s: 'LESS_THAN_ONE_THOUSAND', description: 'User list has number of users in range of 500 to 1000.' },
                {
                    s: 'ONE_THOUSAND_TO_TEN_THOUSAND',
                    description: 'User list has number of users in range of 1000 to 10000.',
                },
                {
                    s: 'TEN_THOUSAND_TO_FIFTY_THOUSAND',
                    description: 'User list has number of users in range of 10000 to 50000.',
                },
                {
                    s: 'FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 50000 to 100000.',
                },
                {
                    s: 'ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 100000 to 300000.',
                },
                {
                    s: 'THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 300000 to 500000.',
                },
                {
                    s: 'FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION',
                    description: 'User list has number of users in range of 500000 to 1 million.',
                },
                {
                    s: 'ONE_MILLION_TO_TWO_MILLION',
                    description: 'User list has number of users in range of 1 to 2 millions.',
                },
                {
                    s: 'TWO_MILLION_TO_THREE_MILLION',
                    description: 'User list has number of users in range of 2 to 3 millions.',
                },
                {
                    s: 'THREE_MILLION_TO_FIVE_MILLION',
                    description: 'User list has number of users in range of 3 to 5 millions.',
                },
                {
                    s: 'FIVE_MILLION_TO_TEN_MILLION',
                    description: 'User list has number of users in range of 5 to 10 millions.',
                },
                {
                    s: 'TEN_MILLION_TO_TWENTY_MILLION',
                    description: 'User list has number of users in range of 10 to 20 millions.',
                },
                {
                    s: 'TWENTY_MILLION_TO_THIRTY_MILLION',
                    description: 'User list has number of users in range of 20 to 30 millions.',
                },
                {
                    s: 'THIRTY_MILLION_TO_FIFTY_MILLION',
                    description: 'User list has number of users in range of 30 to 50 millions.',
                },
                { s: 'OVER_FIFTY_MILLION', description: 'User list has over 50 million users.' },
            ],
            _type: 'enum',
        },
        type: {
            _description: 'Type of this list. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'REMARKETING', description: 'UserList represented as a collection of conversion types.' },
                { s: 'LOGICAL', description: 'UserList represented as a combination of other user lists/interests.' },
                { s: 'EXTERNAL_REMARKETING', description: 'UserList created in the Google Ad Manager platform.' },
                { s: 'RULE_BASED', description: 'UserList associated with a rule.' },
                { s: 'SIMILAR', description: 'UserList with users similar to users of another UserList.' },
                {
                    s: 'CRM_BASED',
                    description:
                        'UserList of first-party CRM data provided by advertiser in the form of\nemails or other formats.',
                },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
