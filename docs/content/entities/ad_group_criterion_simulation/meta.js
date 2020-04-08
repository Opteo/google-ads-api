module.exports = {
    name: 'AdGroupCriterionSimulation',
    object: {
        ad_group_id: { _description: 'Output only. AdGroup ID of the simulation.', _type: 'int64' },
        cpc_bid_point_list: {
            _parent_description: 'Output only. Simulation points if the simulation type is CPC_BID.',
            points: {
                _parent_description: 'Projected metrics for a series of CPC bid amounts.',
                _type: 'array of objects',
                biddable_conversions: { _description: 'Projected number of biddable conversions.', _type: 'double' },
                biddable_conversions_value: {
                    _description: 'Projected total value of biddable conversions.',
                    _type: 'double',
                },
                clicks: { _description: 'Projected number of clicks.', _type: 'int64' },
                cost_micros: { _description: 'Projected cost in micros.', _type: 'int64' },
                cpc_bid_micros: {
                    _description: 'The simulated CPC bid upon which projected metrics are based.',
                    _type: 'int64',
                },
                impressions: { _description: 'Projected number of impressions.', _type: 'int64' },
                top_slot_impressions: {
                    _description:
                        'Projected number of top slot impressions. Only search advertising channel type supports this field.',
                    _type: 'int64',
                },
            },
        },
        criterion_id: { _description: 'Output only. Criterion ID of the simulation.', _type: 'int64' },
        end_date: {
            _description: 'Output only. Last day on which the simulation is based, in YYYY-MM-DD format.',
            _type: 'string',
        },
        modification_method: {
            _description: 'Output only. How the simulation modifies the field.',
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
                'Output only. The resource name of the ad group criterion simulation. Ad group criterion simulation resource names have the form: <code>customers/{customer_id}/adGroupCriterionSimulations/{ad_group_id}~{criterion_id}~{type}~{modification_method}~{start_date}~{end_date}</code>',
            _type: 'string',
        },
        start_date: {
            _description: 'Output only. First day on which the simulation is based, in YYYY-MM-DD format.',
            _type: 'string',
        },
        type: {
            _description: 'Output only. The field that the simulation modifies.',
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
