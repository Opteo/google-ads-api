module.exports = {
    name: 'KeywordPlan',
    object: {
        forecast_period: {
            _parent_description: 'The date period used for forecasting the plan.',
            date_interval: {
                _description: 'A future date range relative to the current date used for forecasting.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    {
                        s: 'NEXT_WEEK',
                        description:
                            "The next week date range for keyword plan. The next week is based\non the default locale of the user's account and is mostly SUN-SAT or\nMON-SUN.\nThis can be different from next-7 days.",
                        index: 3,
                    },
                    { s: 'NEXT_MONTH', description: 'The next month date range for keyword plan.', index: 4 },
                    { s: 'NEXT_QUARTER', description: 'The next quarter date range for keyword plan.', index: 5 },
                ],
                _type: 'enum',
            },
            date_range: {
                _parent_description:
                    'The custom date range used for forecasting. The start and end dates must be in the future. Otherwise, an error will be returned when the forecasting action is performed. The start and end dates are inclusive.',
                end_date: {
                    _description: 'The end date, in yyyy-mm-dd format. This date is inclusive.',
                    _type: 'string',
                },
                start_date: {
                    _description: 'The start date, in yyyy-mm-dd format. This date is inclusive.',
                    _type: 'string',
                },
            },
        },
        id: { _description: 'Output only. The ID of the keyword plan.', _type: 'int64' },
        name: {
            _description:
                'The name of the keyword plan. This field is required and should not be empty when creating new keyword plans.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the Keyword Planner plan. KeywordPlan resource names have the form: <code>customers/{customer_id}/keywordPlans/{kp_plan_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
