module.exports = {
    name: 'KeywordPlan',
    object: {
        id: { _type: 'int64', _description: 'The ID of the keyword plan.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the Keyword Planner plan. KeywordPlan resource names have the form: <code>customers/{customer_id}/keywordPlans/{kp_plan_id}</code>',
        },
        name: {
            _type: 'string',
            _description:
                'The name of the keyword plan. This field is required and should not be empty when creating new keyword plans.',
        },
        forecast_period: {
            date_range: {
                end_date: { _type: 'string', _description: 'The end date, in yyyy-mm-dd format.' },
                start_date: { _type: 'string', _description: 'The start date, in yyyy-mm-dd format.' },
            },
            date_interval: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    {
                        s: 'NEXT_WEEK',
                        description:
                            "The next week date range for keyword plan. The next week is based\non the default locale of the user's account and is mostly SUN-SAT or\nMON-SUN.\nThis can be different from next-7 days.",
                    },
                    { s: 'NEXT_MONTH', description: 'The next month date range for keyword plan.' },
                    { s: 'NEXT_QUARTER', description: 'The next quarter date range for keyword plan.' },
                ],
                _description: 'A future date range relative to the current date used for forecasting.',
            },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
