module.exports = {
    name: 'CampaignCriterionSimulation',
    object: {
        bid_modifier_point_list: {
            _parent_description: 'Output only. Simulation points if the simulation type is BID_MODIFIER.',
            points: {
                _parent_description: 'Projected metrics for a series of bid modifier amounts.',
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
        campaign_id: { _description: 'Output only. Campaign ID of the simulation.', _type: 'int64' },
        criterion_id: { _description: 'Output only. Criterion ID of the simulation.', _type: 'int64' },
        end_date: {
            _description: 'Output only. Last day on which the simulation is based, in YYYY-MM-DD format.',
            _type: 'string',
        },
        modification_method: {
            _description: 'Output only. How the simulation modifies the field.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'UNIFORM',
                    description:
                        'The values in a simulation were applied to all children of a given\nresource uniformly. Overrides on child resources were not respected.',
                    index: 2,
                },
                {
                    s: 'DEFAULT',
                    description:
                        'The values in a simulation were applied to the given resource.\nOverrides on child resources were respected, and traffic estimates\ndo not include these resources.',
                    index: 3,
                },
            ],
            _type: 'enum',
        },
        resource_name: {
            _description:
                'Output only. The resource name of the campaign criterion simulation. Campaign criterion simulation resource names have the form: <code>customers/{customer_id}/campaignCriterionSimulations/{campaign_id}~{criterion_id}~{type}~{modification_method}~{start_date}~{end_date}</code>',
            _type: 'string',
        },
        start_date: {
            _description: 'Output only. First day on which the simulation is based, in YYYY-MM-DD format.',
            _type: 'string',
        },
        type: {
            _description: 'Output only. The field that the simulation modifies.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'CPC_BID', description: 'The simulation is for a cpc bid.', index: 2 },
                { s: 'CPV_BID', description: 'The simulation is for a cpv bid.', index: 3 },
                { s: 'TARGET_CPA', description: 'The simulation is for a cpa target.', index: 4 },
                { s: 'BID_MODIFIER', description: 'The simulation is for a bid modifier.', index: 5 },
                { s: 'TARGET_ROAS', description: 'The simulation is for a ROAS target.', index: 6 },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list'],
}
