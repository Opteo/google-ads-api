module.exports = {
    name: 'CampaignCriterionSimulation',
    object: {
        bid_modifier_point_list: {
            points: {
                _type: 'array of objects',
                bid_modifier: {
                    _description: 'The simulated bid modifier upon which projected metrics are based.',
                    _type: 'double',
                },
                biddable_conversions: {
                    _description:
                        'Projected number of biddable conversions. Only search advertising channel type supports this field.',
                    _type: 'double',
                },
                biddable_conversions_value: {
                    _description:
                        'Projected total value of biddable conversions. Only search advertising channel type supports this field.',
                    _type: 'double',
                },
                clicks: { _description: 'Projected number of clicks.', _type: 'int64' },
                cost_micros: { _description: 'Projected cost in micros.', _type: 'int64' },
                impressions: { _description: 'Projected number of impressions.', _type: 'int64' },
                parent_biddable_conversions: {
                    _description:
                        'Projected number of biddable conversions for the parent resource. Only search advertising channel type supports this field.',
                    _type: 'double',
                },
                parent_biddable_conversions_value: {
                    _description:
                        'Projected total value of biddable conversions for the parent resource. Only search advertising channel type supports this field.',
                    _type: 'double',
                },
                parent_clicks: { _description: 'Projected number of clicks for the parent resource.', _type: 'int64' },
                parent_cost_micros: {
                    _description: 'Projected cost in micros for the parent resource.',
                    _type: 'int64',
                },
                parent_impressions: {
                    _description: 'Projected number of impressions for the parent resource.',
                    _type: 'int64',
                },
                parent_required_budget_micros: {
                    _description:
                        'Projected minimum daily budget that must be available to the parent resource to realize this simulation.',
                    _type: 'int64',
                },
                parent_top_slot_impressions: {
                    _description:
                        'Projected number of top slot impressions for the parent resource. Only search advertising channel type supports this field.',
                    _type: 'int64',
                },
                top_slot_impressions: {
                    _description:
                        'Projected number of top slot impressions. Only search advertising channel type supports this field.',
                    _type: 'int64',
                },
            },
        },
        campaign_id: { _description: 'Campaign ID of the simulation.', _type: 'int64' },
        criterion_id: { _description: 'Criterion ID of the simulation.', _type: 'int64' },
        end_date: { _description: 'Last day on which the simulation is based, in YYYY-MM-DD format.', _type: 'string' },
        modification_method: {
            _description: 'How the simulation modifies the field.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'UNIFORM',
                    description:
                        'The values in a simulation were applied to all children of a given\nresource uniformly. Overrides on child resources were not respected.',
                },
                {
                    s: 'DEFAULT',
                    description:
                        'The values in a simulation were applied to the given resource.\nOverrides on child resources were respected, and traffic estimates\ndo not include these resources.',
                },
            ],
            _type: 'enum',
        },
        resource_name: {
            _description:
                'The resource name of the campaign criterion simulation. Campaign criterion simulation resource names have the form: <code>customers/{customer_id}/campaignCriterionSimulations/{campaign_id}~{criterion_id}~{type}~{modification_method}~{start_date}~{end_date}</code>',
            _type: 'string',
        },
        start_date: {
            _description: 'First day on which the simulation is based, in YYYY-MM-DD format.',
            _type: 'string',
        },
        type: {
            _description: 'The field that the simulation modifies.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'CPC_BID', description: 'The simulation is for a cpc bid.' },
                { s: 'CPV_BID', description: 'The simulation is for a cpv bid.' },
                { s: 'TARGET_CPA', description: 'The simulation is for a cpa target.' },
                { s: 'BID_MODIFIER', description: 'The simulation is for a bid modifier.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list'],
}
