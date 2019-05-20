module.exports = {
    name: 'CampaignBudget',
    object: {
        has_recommended_budget: {
            _type: 'boolean',
            _description:
                'Indicates whether there is a recommended budget for this campaign budget. This field is read-only.',
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Budget is enabled.' },
                { s: 'REMOVED', description: 'Budget is removed.' },
            ],
            _description: 'The status of this campaign budget. This field is read-only.',
        },
        recommended_budget_amount_micros: {
            _type: 'int64',
            _description:
                'The recommended budget amount. If no recommendation is available, this will be set to the budget amount. Amount is specified in micros, where one million is equivalent to one currency unit. This field is read-only.',
        },
        period: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'DAILY', description: 'Daily budget.' },
                { s: 'CUSTOM', description: 'Custom budget.' },
                { s: 'FIXED_DAILY', description: 'Fixed daily budget.' },
            ],
            _description: 'Period over which to spend the budget. Defaults to DAILY if not specified.',
        },
        name: {
            _type: 'string',
            _description:
                "The name of the campaign budget. When creating a campaign budget through CampaignBudgetService, every explicitly shared campaign budget must have a non-null, non-empty name. Campaign budgets that are not explicitly shared derive their name from the attached campaign's name. The length of this string must be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed).",
        },
        id: {
            _type: 'int64',
            _description:
                'The ID of the campaign budget. A campaign budget is created using the CampaignBudgetService create operation and is assigned a budget ID. A budget ID can be shared across different campaigns; the system will then allocate the campaign budget among different campaigns to get optimum results.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the campaign budget. Campaign budget resource names have the form: <code>customers/{customer_id}/campaignBudgets/{budget_id}</code>',
        },
        recommended_budget_estimated_change_weekly_views: {
            _type: 'int64',
            _description:
                'The estimated change in weekly views if the recommended budget is applied. This field is read-only.',
        },
        recommended_budget_estimated_change_weekly_interactions: {
            _type: 'int64',
            _description:
                'The estimated change in weekly interactions if the recommended budget is applied. This field is read-only.',
        },
        delivery_method: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'STANDARD',
                    description: 'The budget server will throttle serving evenly across\nthe entire time period.',
                },
                {
                    s: 'ACCELERATED',
                    description:
                        'The budget server will not throttle serving,\nand ads will serve as fast as possible.',
                },
            ],
            _description:
                'The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation.',
        },
        total_amount_micros: {
            _type: 'int64',
            _description:
                'The lifetime amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit.',
        },
        recommended_budget_estimated_change_weekly_clicks: {
            _type: 'int64',
            _description:
                'The estimated change in weekly clicks if the recommended budget is applied. This field is read-only.',
        },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'STANDARD',
                    description:
                        'Budget type for standard Google Ads usage.\nCaps daily spend at two times the specified budget amount.\nFull details: https://support.google.com/google-ads/answer/6385083',
                },
                {
                    s: 'HOTEL_ADS_COMMISSION',
                    description:
                        'Budget type for Hotels Ads commission program.\nFull details: https://support.google.com/google-ads/answer/9243945\n\nThis type is only supported by campaigns with\nAdvertisingChannelType.HOTEL, BiddingStrategyType.COMMISSION and\nPaymentMode.CONVERSION_VALUE.',
                },
                {
                    s: 'FIXED_CPA',
                    description:
                        'Budget type with a fixed cost-per-acquisition (conversion).\nFull details: https://support.google.com/google-ads/answer/7528254\n\nThis type is only supported by campaigns with\nAdvertisingChannelType.DISPLAY (excluding\nAdvertisingChannelSubType.DISPLAY_GMAIL),\nBiddingStrategyType.TARGET_CPA and PaymentMode.CONVERSIONS.',
                },
            ],
            _description: 'The type of the campaign budget.',
        },
        recommended_budget_estimated_change_weekly_cost_micros: {
            _type: 'int64',
            _description:
                'The estimated change in weekly cost in micros if the recommended budget is applied. One million is equivalent to one currency unit. This field is read-only.',
        },
        explicitly_shared: {
            _type: 'boolean',
            _description:
                "Specifies whether the budget is explicitly shared. Defaults to true if unspecified in a create operation. If true, the budget was created with the purpose of sharing across one or more campaigns. If false, the budget was created with the intention of only being used with a single campaign. The budget's name and status will stay in sync with the campaign's name and status. Attempting to share the budget with a second campaign will result in an error. A non-shared budget can become an explicitly shared. The same operation must also assign the budget a name. A shared campaign budget can never become non-shared.",
        },
        amount_micros: {
            _type: 'int64',
            _description:
                'The amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit. Monthly spend is capped at 30.4 times this amount.',
        },
        reference_count: {
            _type: 'int64',
            _description: 'The number of campaigns actively using the budget. This field is read-only.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
