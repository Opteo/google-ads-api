module.exports = {
    name: 'UserList',
    object: {
        access_reason: {
            _description:
                'Output only. Indicates the reason this account has been granted access to the list. The reason can be SHARED, OWNED, LICENSED or SUBSCRIBED. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'OWNED', description: 'The resource is owned by the user.', index: 2 },
                { s: 'SHARED', description: 'The resource is shared to the user.', index: 3 },
                { s: 'LICENSED', description: 'The resource is licensed to the user.', index: 4 },
                { s: 'SUBSCRIBED', description: 'The user subscribed to the resource.', index: 5 },
                { s: 'AFFILIATED', description: 'The resource is accessible to the user.', index: 6 },
            ],
            _type: 'enum',
        },
        account_user_list_status: {
            _description:
                'Indicates if this share is still enabled. When a UserList is shared with the user this field is set to ENABLED. Later the userList owner can decide to revoke the share and make it DISABLED. The default value of this field is set to ENABLED.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'The access is enabled.', index: 2 },
                { s: 'DISABLED', description: 'The access is disabled.', index: 3 },
            ],
            _type: 'enum',
        },
        basic_user_list: {
            _oneof: 'userList',
            _parent_description: 'User list targeting as a collection of conversion or remarketing actions.',
            actions: {
                _parent_description: 'Actions associated with this user list.',
                _type: 'array of objects',
                conversion_action: {
                    _description: "A conversion action that's not generated from remarketing.",
                    _type: 'string',
                },
                remarketing_action: { _description: 'A remarketing action.', _type: 'string' },
            },
        },
        closing_reason: {
            _description:
                'Indicating the reason why this user list membership status is closed. It is only populated on lists that were automatically closed due to inactivity, and will be cleared once the list membership status becomes open.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'UNUSED',
                    description: 'The userlist was closed because of not being used for over one year.',
                    index: 2,
                },
            ],
            _type: 'enum',
        },
        crm_based_user_list: {
            _oneof: 'userList',
            _parent_description: 'User list of CRM users provided by the advertiser.',
            app_id: {
                _description:
                    'A string that uniquely identifies a mobile application from which the data was collected to the Google Ads API. For iOS, the ID string is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, the ID string is the application\'s package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). Required when creating CrmBasedUserList for uploading mobile advertising IDs.',
                _type: 'string',
            },
            data_source_type: {
                _description:
                    'Data source of the list. Default value is FIRST_PARTY. Only whitelisted customers can create third-party sourced CRM lists.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'FIRST_PARTY', description: 'The uploaded data is first-party data.', index: 2 },
                    {
                        s: 'THIRD_PARTY_CREDIT_BUREAU',
                        description: 'The uploaded data is from a third-party credit bureau.',
                        index: 3,
                    },
                    {
                        s: 'THIRD_PARTY_VOTER_FILE',
                        description: 'The uploaded data is from a third-party voter file.',
                        index: 4,
                    },
                ],
                _type: 'enum',
            },
            upload_key_type: {
                _description:
                    'Matching key type of the list. Mixed data types are not allowed on the same list. This field is required for an ADD operation.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    {
                        s: 'CONTACT_INFO',
                        description:
                            'Members are matched from customer info such as email address, phone\nnumber or physical address.',
                        index: 2,
                    },
                    {
                        s: 'CRM_ID',
                        description: 'Members are matched from a user id generated and assigned by the\nadvertiser.',
                        index: 3,
                    },
                    {
                        s: 'MOBILE_ADVERTISING_ID',
                        description: 'Members are matched from mobile advertising ids.',
                        index: 4,
                    },
                ],
                _type: 'enum',
            },
        },
        description: { _description: 'Description of this user list.', _type: 'string' },
        eligible_for_display: {
            _description:
                'Output only. Indicates this user list is eligible for Google Display Network. This field is read-only.',
            _type: 'boolean',
        },
        eligible_for_search: {
            _description: 'Indicates if this user list is eligible for Google Search Network.',
            _type: 'boolean',
        },
        id: { _description: 'Output only. Id of the user list.', _type: 'int64' },
        integration_code: {
            _description:
                'An ID from external system. It is used by user list sellers to correlate IDs on their systems.',
            _type: 'string',
        },
        logical_user_list: {
            _oneof: 'userList',
            _parent_description: 'User list that is a custom combination of user lists and user interests.',
            rules: {
                _parent_description:
                    'Logical list rules that define this user list. The rules are defined as a logical operator (ALL/ANY/NONE) and a list of user lists. All the rules are ANDed when they are evaluated. Required for creating a logical user list.',
                _type: 'array of objects',
                operator: {
                    _description: 'The logical operator of the rule.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                            index: 1,
                        },
                        { s: 'ALL', description: 'And - all of the operands.', index: 2 },
                        { s: 'ANY', description: 'Or - at least one of the operands.', index: 3 },
                        { s: 'NONE', description: 'Not - none of the operands.', index: 4 },
                    ],
                    _type: 'enum',
                },
                rule_operands: {
                    _parent_description: 'The list of operands of the rule.',
                    _type: 'array of objects',
                    user_list: { _description: 'Resource name of a user list as an operand.', _type: 'string' },
                },
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
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'OPEN', description: 'Open status - List is accruing members and can be targeted to.', index: 2 },
                {
                    s: 'CLOSED',
                    description: 'Closed status - No new members being added. Cannot be used for targeting.',
                    index: 3,
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
                'Output only. A flag that indicates if a user may edit a list. Depends on the list ownership and list type. For example, external remarketing user lists are not editable. This field is read-only.',
            _type: 'boolean',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the user list. User list resource names have the form: <code>customers/{customer_id}/userLists/{user_list_id}</code>',
            _type: 'string',
        },
        rule_based_user_list: {
            _oneof: 'userList',
            _parent_description: 'User list generated by a rule.',
            combined_rule_user_list: {
                _parent_description:
                    'User lists defined by combining two rules. There are two operators: AND, where the left and right operands have to be true; AND_NOT where left operand is true but right operand is false.',
                left_operand: {
                    _parent_description:
                        'Left operand of the combined rule. This field is required and must be populated when creating new combined rule based user list.',
                    rule_item_groups: {
                        _parent_description:
                            'List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.',
                        _type: 'array of objects',
                        rule_items: {
                            _parent_description: 'Rule items that will be grouped together based on rule_type.',
                            _type: 'array of objects',
                            date_rule_item: {
                                _parent_description: 'An atomic rule item composed of a date operation.',
                                offset_in_days: {
                                    _description:
                                        'The relative date value of the right hand side denoted by number of days offset from now. The value field will override this field when both are present.',
                                    _type: 'int64',
                                },
                                operator: {
                                    _description:
                                        'Date comparison operator. This field is required and must be populated when creating new date rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'EQUALS', description: 'Equals.', index: 2 },
                                        { s: 'NOT_EQUALS', description: 'Not Equals.', index: 3 },
                                        { s: 'BEFORE', description: 'Before.', index: 4 },
                                        { s: 'AFTER', description: 'After.', index: 5 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        "String representing date value to be compared with the rule variable. Supported date format is YYYY-MM-DD. Times are reported in the customer's time zone.",
                                    _type: 'string',
                                },
                            },
                            name: {
                                _description:
                                    "Rule variable name. It should match the corresponding key name fired by the pixel. A name must begin with US-ascii letters or underscore or UTF8 code that is greater than 127 and consist of US-ascii letters or digits or underscore or UTF8 code that is greater than 127. For websites, there are two built-in variable URL (name = 'url__') and referrer URL (name = 'ref_url__'). This field must be populated when creating a new rule item.",
                                _type: 'string',
                            },
                            number_rule_item: {
                                _parent_description: 'An atomic rule item composed of a number operation.',
                                operator: {
                                    _description:
                                        'Number comparison operator. This field is required and must be populated when creating a new number rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'GREATER_THAN', description: 'Greater than.', index: 2 },
                                        { s: 'GREATER_THAN_OR_EQUAL', description: 'Greater than or equal.', index: 3 },
                                        { s: 'EQUALS', description: 'Equals.', index: 4 },
                                        { s: 'NOT_EQUALS', description: 'Not equals.', index: 5 },
                                        { s: 'LESS_THAN', description: 'Less than.', index: 6 },
                                        { s: 'LESS_THAN_OR_EQUAL', description: 'Less than or equal.', index: 7 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        'Number value to be compared with the variable. This field is required and must be populated when creating a new number rule item.',
                                    _type: 'double',
                                },
                            },
                            string_rule_item: {
                                _parent_description: 'An atomic rule item composed of a string operation.',
                                operator: {
                                    _description:
                                        'String comparison operator. This field is required and must be populated when creating a new string rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'CONTAINS', description: 'Contains.', index: 2 },
                                        { s: 'EQUALS', description: 'Equals.', index: 3 },
                                        { s: 'STARTS_WITH', description: 'Starts with.', index: 4 },
                                        { s: 'ENDS_WITH', description: 'Ends with.', index: 5 },
                                        { s: 'NOT_EQUALS', description: 'Not equals.', index: 6 },
                                        { s: 'NOT_CONTAINS', description: 'Not contains.', index: 7 },
                                        { s: 'NOT_STARTS_WITH', description: 'Not starts with.', index: 8 },
                                        { s: 'NOT_ENDS_WITH', description: 'Not ends with.', index: 9 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        'The right hand side of the string rule item. For URLs or referrer URLs, the value can not contain illegal URL chars such as newlines, quotes, tabs, or parentheses. This field is required and must be populated when creating a new string rule item.',
                                    _type: 'string',
                                },
                            },
                        },
                    },
                    rule_type: {
                        _description:
                            'Rule type is used to determine how to group rule items. The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together. Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.', index: 2 },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.', index: 3 },
                        ],
                        _type: 'enum',
                    },
                },
                right_operand: {
                    _parent_description:
                        'Right operand of the combined rule. This field is required and must be populated when creating new combined rule based user list.',
                    rule_item_groups: {
                        _parent_description:
                            'List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.',
                        _type: 'array of objects',
                        rule_items: {
                            _parent_description: 'Rule items that will be grouped together based on rule_type.',
                            _type: 'array of objects',
                            date_rule_item: {
                                _parent_description: 'An atomic rule item composed of a date operation.',
                                offset_in_days: {
                                    _description:
                                        'The relative date value of the right hand side denoted by number of days offset from now. The value field will override this field when both are present.',
                                    _type: 'int64',
                                },
                                operator: {
                                    _description:
                                        'Date comparison operator. This field is required and must be populated when creating new date rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'EQUALS', description: 'Equals.', index: 2 },
                                        { s: 'NOT_EQUALS', description: 'Not Equals.', index: 3 },
                                        { s: 'BEFORE', description: 'Before.', index: 4 },
                                        { s: 'AFTER', description: 'After.', index: 5 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        "String representing date value to be compared with the rule variable. Supported date format is YYYY-MM-DD. Times are reported in the customer's time zone.",
                                    _type: 'string',
                                },
                            },
                            name: {
                                _description:
                                    "Rule variable name. It should match the corresponding key name fired by the pixel. A name must begin with US-ascii letters or underscore or UTF8 code that is greater than 127 and consist of US-ascii letters or digits or underscore or UTF8 code that is greater than 127. For websites, there are two built-in variable URL (name = 'url__') and referrer URL (name = 'ref_url__'). This field must be populated when creating a new rule item.",
                                _type: 'string',
                            },
                            number_rule_item: {
                                _parent_description: 'An atomic rule item composed of a number operation.',
                                operator: {
                                    _description:
                                        'Number comparison operator. This field is required and must be populated when creating a new number rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'GREATER_THAN', description: 'Greater than.', index: 2 },
                                        { s: 'GREATER_THAN_OR_EQUAL', description: 'Greater than or equal.', index: 3 },
                                        { s: 'EQUALS', description: 'Equals.', index: 4 },
                                        { s: 'NOT_EQUALS', description: 'Not equals.', index: 5 },
                                        { s: 'LESS_THAN', description: 'Less than.', index: 6 },
                                        { s: 'LESS_THAN_OR_EQUAL', description: 'Less than or equal.', index: 7 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        'Number value to be compared with the variable. This field is required and must be populated when creating a new number rule item.',
                                    _type: 'double',
                                },
                            },
                            string_rule_item: {
                                _parent_description: 'An atomic rule item composed of a string operation.',
                                operator: {
                                    _description:
                                        'String comparison operator. This field is required and must be populated when creating a new string rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'CONTAINS', description: 'Contains.', index: 2 },
                                        { s: 'EQUALS', description: 'Equals.', index: 3 },
                                        { s: 'STARTS_WITH', description: 'Starts with.', index: 4 },
                                        { s: 'ENDS_WITH', description: 'Ends with.', index: 5 },
                                        { s: 'NOT_EQUALS', description: 'Not equals.', index: 6 },
                                        { s: 'NOT_CONTAINS', description: 'Not contains.', index: 7 },
                                        { s: 'NOT_STARTS_WITH', description: 'Not starts with.', index: 8 },
                                        { s: 'NOT_ENDS_WITH', description: 'Not ends with.', index: 9 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        'The right hand side of the string rule item. For URLs or referrer URLs, the value can not contain illegal URL chars such as newlines, quotes, tabs, or parentheses. This field is required and must be populated when creating a new string rule item.',
                                    _type: 'string',
                                },
                            },
                        },
                    },
                    rule_type: {
                        _description:
                            'Rule type is used to determine how to group rule items. The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together. Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.', index: 2 },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.', index: 3 },
                        ],
                        _type: 'enum',
                    },
                },
                rule_operator: {
                    _description:
                        'Operator to connect the two operands. Required for creating a combined rule user list.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                            index: 1,
                        },
                        { s: 'AND', description: 'A AND B.', index: 2 },
                        { s: 'AND_NOT', description: 'A AND NOT B.', index: 3 },
                    ],
                    _type: 'enum',
                },
            },
            date_specific_rule_user_list: {
                _parent_description:
                    'Visitors of a page during specific dates. The visiting periods are defined as follows: Between start_date (inclusive) and end_date (inclusive); Before end_date (exclusive) with start_date = 2000-01-01; After start_date (exclusive) with end_date = 2037-12-30.',
                end_date: {
                    _description:
                        "End date of users visit. If set to 2037-12-30, then the list includes all users after start_date. The date's format should be YYYY-MM-DD. Required for creating a data specific rule user list.",
                    _type: 'string',
                },
                rule: {
                    _parent_description:
                        'Boolean rule that defines visitor of a page. Required for creating a date specific rule user list.',
                    rule_item_groups: {
                        _parent_description:
                            'List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.',
                        _type: 'array of objects',
                        rule_items: {
                            _parent_description: 'Rule items that will be grouped together based on rule_type.',
                            _type: 'array of objects',
                            date_rule_item: {
                                _parent_description: 'An atomic rule item composed of a date operation.',
                                offset_in_days: {
                                    _description:
                                        'The relative date value of the right hand side denoted by number of days offset from now. The value field will override this field when both are present.',
                                    _type: 'int64',
                                },
                                operator: {
                                    _description:
                                        'Date comparison operator. This field is required and must be populated when creating new date rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'EQUALS', description: 'Equals.', index: 2 },
                                        { s: 'NOT_EQUALS', description: 'Not Equals.', index: 3 },
                                        { s: 'BEFORE', description: 'Before.', index: 4 },
                                        { s: 'AFTER', description: 'After.', index: 5 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        "String representing date value to be compared with the rule variable. Supported date format is YYYY-MM-DD. Times are reported in the customer's time zone.",
                                    _type: 'string',
                                },
                            },
                            name: {
                                _description:
                                    "Rule variable name. It should match the corresponding key name fired by the pixel. A name must begin with US-ascii letters or underscore or UTF8 code that is greater than 127 and consist of US-ascii letters or digits or underscore or UTF8 code that is greater than 127. For websites, there are two built-in variable URL (name = 'url__') and referrer URL (name = 'ref_url__'). This field must be populated when creating a new rule item.",
                                _type: 'string',
                            },
                            number_rule_item: {
                                _parent_description: 'An atomic rule item composed of a number operation.',
                                operator: {
                                    _description:
                                        'Number comparison operator. This field is required and must be populated when creating a new number rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'GREATER_THAN', description: 'Greater than.', index: 2 },
                                        { s: 'GREATER_THAN_OR_EQUAL', description: 'Greater than or equal.', index: 3 },
                                        { s: 'EQUALS', description: 'Equals.', index: 4 },
                                        { s: 'NOT_EQUALS', description: 'Not equals.', index: 5 },
                                        { s: 'LESS_THAN', description: 'Less than.', index: 6 },
                                        { s: 'LESS_THAN_OR_EQUAL', description: 'Less than or equal.', index: 7 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        'Number value to be compared with the variable. This field is required and must be populated when creating a new number rule item.',
                                    _type: 'double',
                                },
                            },
                            string_rule_item: {
                                _parent_description: 'An atomic rule item composed of a string operation.',
                                operator: {
                                    _description:
                                        'String comparison operator. This field is required and must be populated when creating a new string rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'CONTAINS', description: 'Contains.', index: 2 },
                                        { s: 'EQUALS', description: 'Equals.', index: 3 },
                                        { s: 'STARTS_WITH', description: 'Starts with.', index: 4 },
                                        { s: 'ENDS_WITH', description: 'Ends with.', index: 5 },
                                        { s: 'NOT_EQUALS', description: 'Not equals.', index: 6 },
                                        { s: 'NOT_CONTAINS', description: 'Not contains.', index: 7 },
                                        { s: 'NOT_STARTS_WITH', description: 'Not starts with.', index: 8 },
                                        { s: 'NOT_ENDS_WITH', description: 'Not ends with.', index: 9 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        'The right hand side of the string rule item. For URLs or referrer URLs, the value can not contain illegal URL chars such as newlines, quotes, tabs, or parentheses. This field is required and must be populated when creating a new string rule item.',
                                    _type: 'string',
                                },
                            },
                        },
                    },
                    rule_type: {
                        _description:
                            'Rule type is used to determine how to group rule items. The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together. Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.', index: 2 },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.', index: 3 },
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
                _parent_description: 'Visitors of a page. The page visit is defined by one boolean rule expression.',
                rule: {
                    _parent_description:
                        'Boolean rule that defines this user list. The rule consists of a list of rule item groups and each rule item group consists of a list of rule items. All the rule item groups are ORed or ANDed together for evaluation based on rule.rule_type. Required for creating an expression rule user list.',
                    rule_item_groups: {
                        _parent_description:
                            'List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.',
                        _type: 'array of objects',
                        rule_items: {
                            _parent_description: 'Rule items that will be grouped together based on rule_type.',
                            _type: 'array of objects',
                            date_rule_item: {
                                _parent_description: 'An atomic rule item composed of a date operation.',
                                offset_in_days: {
                                    _description:
                                        'The relative date value of the right hand side denoted by number of days offset from now. The value field will override this field when both are present.',
                                    _type: 'int64',
                                },
                                operator: {
                                    _description:
                                        'Date comparison operator. This field is required and must be populated when creating new date rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'EQUALS', description: 'Equals.', index: 2 },
                                        { s: 'NOT_EQUALS', description: 'Not Equals.', index: 3 },
                                        { s: 'BEFORE', description: 'Before.', index: 4 },
                                        { s: 'AFTER', description: 'After.', index: 5 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        "String representing date value to be compared with the rule variable. Supported date format is YYYY-MM-DD. Times are reported in the customer's time zone.",
                                    _type: 'string',
                                },
                            },
                            name: {
                                _description:
                                    "Rule variable name. It should match the corresponding key name fired by the pixel. A name must begin with US-ascii letters or underscore or UTF8 code that is greater than 127 and consist of US-ascii letters or digits or underscore or UTF8 code that is greater than 127. For websites, there are two built-in variable URL (name = 'url__') and referrer URL (name = 'ref_url__'). This field must be populated when creating a new rule item.",
                                _type: 'string',
                            },
                            number_rule_item: {
                                _parent_description: 'An atomic rule item composed of a number operation.',
                                operator: {
                                    _description:
                                        'Number comparison operator. This field is required and must be populated when creating a new number rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'GREATER_THAN', description: 'Greater than.', index: 2 },
                                        { s: 'GREATER_THAN_OR_EQUAL', description: 'Greater than or equal.', index: 3 },
                                        { s: 'EQUALS', description: 'Equals.', index: 4 },
                                        { s: 'NOT_EQUALS', description: 'Not equals.', index: 5 },
                                        { s: 'LESS_THAN', description: 'Less than.', index: 6 },
                                        { s: 'LESS_THAN_OR_EQUAL', description: 'Less than or equal.', index: 7 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        'Number value to be compared with the variable. This field is required and must be populated when creating a new number rule item.',
                                    _type: 'double',
                                },
                            },
                            string_rule_item: {
                                _parent_description: 'An atomic rule item composed of a string operation.',
                                operator: {
                                    _description:
                                        'String comparison operator. This field is required and must be populated when creating a new string rule item.',
                                    _enums: [
                                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                                        {
                                            s: 'UNKNOWN',
                                            description:
                                                'Used for return value only. Represents value unknown in this version.',
                                            index: 1,
                                        },
                                        { s: 'CONTAINS', description: 'Contains.', index: 2 },
                                        { s: 'EQUALS', description: 'Equals.', index: 3 },
                                        { s: 'STARTS_WITH', description: 'Starts with.', index: 4 },
                                        { s: 'ENDS_WITH', description: 'Ends with.', index: 5 },
                                        { s: 'NOT_EQUALS', description: 'Not equals.', index: 6 },
                                        { s: 'NOT_CONTAINS', description: 'Not contains.', index: 7 },
                                        { s: 'NOT_STARTS_WITH', description: 'Not starts with.', index: 8 },
                                        { s: 'NOT_ENDS_WITH', description: 'Not ends with.', index: 9 },
                                    ],
                                    _type: 'enum',
                                },
                                value: {
                                    _description:
                                        'The right hand side of the string rule item. For URLs or referrer URLs, the value can not contain illegal URL chars such as newlines, quotes, tabs, or parentheses. This field is required and must be populated when creating a new string rule item.',
                                    _type: 'string',
                                },
                            },
                        },
                    },
                    rule_type: {
                        _description:
                            'Rule type is used to determine how to group rule items. The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together. Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.', index: 2 },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.', index: 3 },
                        ],
                        _type: 'enum',
                    },
                },
            },
            prepopulation_status: {
                _description:
                    "The status of pre-population. The field is default to NONE if not set which means the previous users will not be considered. If set to REQUESTED, past site visitors or app users who match the list definition will be included in the list (works on the Display Network only). This will only add past users from within the last 30 days, depending on the list's membership duration and the date when the remarketing tag is added. The status will be updated to FINISHED once request is processed, or FAILED if the request fails.",
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'REQUESTED', description: 'Prepopoulation is being requested.', index: 2 },
                    { s: 'FINISHED', description: 'Prepopulation is finished.', index: 3 },
                    { s: 'FAILED', description: 'Prepopulation failed.', index: 4 },
                ],
                _type: 'enum',
            },
        },
        similar_user_list: {
            _oneof: 'userList',
            _parent_description:
                'Output only. User list which are similar to users from another UserList. These lists are readonly and automatically created by google.',
            seed_user_list: { _description: 'Seed UserList from which this list is derived.', _type: 'string' },
        },
        size_for_display: {
            _description:
                'Output only. Estimated number of users in this user list, on the Google Display Network. This value is null if the number of users has not yet been determined. This field is read-only.',
            _type: 'int64',
        },
        size_for_search: {
            _description:
                'Output only. Estimated number of users in this user list in the google.com domain. These are the users available for targeting in Search campaigns. This value is null if the number of users has not yet been determined. This field is read-only.',
            _type: 'int64',
        },
        size_range_for_display: {
            _description:
                'Output only. Size range in terms of number of users of the UserList, on the Google Display Network. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'LESS_THAN_FIVE_HUNDRED', description: 'User list has less than 500 users.', index: 2 },
                {
                    s: 'LESS_THAN_ONE_THOUSAND',
                    description: 'User list has number of users in range of 500 to 1000.',
                    index: 3,
                },
                {
                    s: 'ONE_THOUSAND_TO_TEN_THOUSAND',
                    description: 'User list has number of users in range of 1000 to 10000.',
                    index: 4,
                },
                {
                    s: 'TEN_THOUSAND_TO_FIFTY_THOUSAND',
                    description: 'User list has number of users in range of 10000 to 50000.',
                    index: 5,
                },
                {
                    s: 'FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 50000 to 100000.',
                    index: 6,
                },
                {
                    s: 'ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 100000 to 300000.',
                    index: 7,
                },
                {
                    s: 'THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 300000 to 500000.',
                    index: 8,
                },
                {
                    s: 'FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION',
                    description: 'User list has number of users in range of 500000 to 1 million.',
                    index: 9,
                },
                {
                    s: 'ONE_MILLION_TO_TWO_MILLION',
                    description: 'User list has number of users in range of 1 to 2 millions.',
                    index: 10,
                },
                {
                    s: 'TWO_MILLION_TO_THREE_MILLION',
                    description: 'User list has number of users in range of 2 to 3 millions.',
                    index: 11,
                },
                {
                    s: 'THREE_MILLION_TO_FIVE_MILLION',
                    description: 'User list has number of users in range of 3 to 5 millions.',
                    index: 12,
                },
                {
                    s: 'FIVE_MILLION_TO_TEN_MILLION',
                    description: 'User list has number of users in range of 5 to 10 millions.',
                    index: 13,
                },
                {
                    s: 'TEN_MILLION_TO_TWENTY_MILLION',
                    description: 'User list has number of users in range of 10 to 20 millions.',
                    index: 14,
                },
                {
                    s: 'TWENTY_MILLION_TO_THIRTY_MILLION',
                    description: 'User list has number of users in range of 20 to 30 millions.',
                    index: 15,
                },
                {
                    s: 'THIRTY_MILLION_TO_FIFTY_MILLION',
                    description: 'User list has number of users in range of 30 to 50 millions.',
                    index: 16,
                },
                { s: 'OVER_FIFTY_MILLION', description: 'User list has over 50 million users.', index: 17 },
            ],
            _type: 'enum',
        },
        size_range_for_search: {
            _description:
                'Output only. Size range in terms of number of users of the UserList, for Search ads. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'LESS_THAN_FIVE_HUNDRED', description: 'User list has less than 500 users.', index: 2 },
                {
                    s: 'LESS_THAN_ONE_THOUSAND',
                    description: 'User list has number of users in range of 500 to 1000.',
                    index: 3,
                },
                {
                    s: 'ONE_THOUSAND_TO_TEN_THOUSAND',
                    description: 'User list has number of users in range of 1000 to 10000.',
                    index: 4,
                },
                {
                    s: 'TEN_THOUSAND_TO_FIFTY_THOUSAND',
                    description: 'User list has number of users in range of 10000 to 50000.',
                    index: 5,
                },
                {
                    s: 'FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 50000 to 100000.',
                    index: 6,
                },
                {
                    s: 'ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 100000 to 300000.',
                    index: 7,
                },
                {
                    s: 'THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 300000 to 500000.',
                    index: 8,
                },
                {
                    s: 'FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION',
                    description: 'User list has number of users in range of 500000 to 1 million.',
                    index: 9,
                },
                {
                    s: 'ONE_MILLION_TO_TWO_MILLION',
                    description: 'User list has number of users in range of 1 to 2 millions.',
                    index: 10,
                },
                {
                    s: 'TWO_MILLION_TO_THREE_MILLION',
                    description: 'User list has number of users in range of 2 to 3 millions.',
                    index: 11,
                },
                {
                    s: 'THREE_MILLION_TO_FIVE_MILLION',
                    description: 'User list has number of users in range of 3 to 5 millions.',
                    index: 12,
                },
                {
                    s: 'FIVE_MILLION_TO_TEN_MILLION',
                    description: 'User list has number of users in range of 5 to 10 millions.',
                    index: 13,
                },
                {
                    s: 'TEN_MILLION_TO_TWENTY_MILLION',
                    description: 'User list has number of users in range of 10 to 20 millions.',
                    index: 14,
                },
                {
                    s: 'TWENTY_MILLION_TO_THIRTY_MILLION',
                    description: 'User list has number of users in range of 20 to 30 millions.',
                    index: 15,
                },
                {
                    s: 'THIRTY_MILLION_TO_FIFTY_MILLION',
                    description: 'User list has number of users in range of 30 to 50 millions.',
                    index: 16,
                },
                { s: 'OVER_FIFTY_MILLION', description: 'User list has over 50 million users.', index: 17 },
            ],
            _type: 'enum',
        },
        type: {
            _description: 'Output only. Type of this list. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'REMARKETING',
                    description: 'UserList represented as a collection of conversion types.',
                    index: 2,
                },
                {
                    s: 'LOGICAL',
                    description: 'UserList represented as a combination of other user lists/interests.',
                    index: 3,
                },
                {
                    s: 'EXTERNAL_REMARKETING',
                    description: 'UserList created in the Google Ad Manager platform.',
                    index: 4,
                },
                { s: 'RULE_BASED', description: 'UserList associated with a rule.', index: 5 },
                { s: 'SIMILAR', description: 'UserList with users similar to users of another UserList.', index: 6 },
                {
                    s: 'CRM_BASED',
                    description:
                        'UserList of first-party CRM data provided by advertiser in the form of\nemails or other formats.',
                    index: 7,
                },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
