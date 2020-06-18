module.exports = {
    name: 'AdGroupSimulation',
    object: {
        ad_group_id: { _description: 'Output only. Ad group id of the simulation.', _type: 'int64' },
        cpc_bid_point_list: {
            _oneof: 'pointList',
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
        cpv_bid_point_list: {
            _oneof: 'pointList',
            _parent_description: 'Output only. Simulation points if the simulation type is CPV_BID.',
            points: {
                _parent_description: 'Projected metrics for a series of CPV bid amounts.',
                _type: 'array of objects',
                cost_micros: { _description: 'Projected cost in micros.', _type: 'int64' },
                cpv_bid_micros: {
                    _description: 'The simulated CPV bid upon which projected metrics are based.',
                    _type: 'int64',
                },
                impressions: { _description: 'Projected number of impressions.', _type: 'int64' },
                views: { _description: 'Projected number of views.', _type: 'int64' },
            },
        },
        end_date: {
            _description: 'Output only. Last day on which the simulation is based, in YYYY-MM-DD format',
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
                'Output only. The resource name of the ad group simulation. Ad group simulation resource names have the form: <code>customers/{customer_id}/adGroupSimulations/{ad_group_id}~{type}~{modification_method}~{start_date}~{end_date}</code>',
            _type: 'string',
        },
        start_date: {
            _description: 'Output only. First day on which the simulation is based, in YYYY-MM-DD format.',
            _type: 'string',
        },
        target_cpa_point_list: {
            _oneof: 'pointList',
            _parent_description: 'Output only. Simulation points if the simulation type is TARGET_CPA.',
            points: {
                _parent_description: 'Projected metrics for a series of target CPA amounts.',
                _type: 'array of objects',
                biddable_conversions: { _description: 'Projected number of biddable conversions.', _type: 'double' },
                biddable_conversions_value: {
                    _description: 'Projected total value of biddable conversions.',
                    _type: 'double',
                },
                clicks: { _description: 'Projected number of clicks.', _type: 'int64' },
                cost_micros: { _description: 'Projected cost in micros.', _type: 'int64' },
                impressions: { _description: 'Projected number of impressions.', _type: 'int64' },
                target_cpa_micros: {
                    _description: 'The simulated target CPA upon which projected metrics are based.',
                    _type: 'int64',
                },
                top_slot_impressions: {
                    _description:
                        'Projected number of top slot impressions. Only search advertising channel type supports this field.',
                    _type: 'int64',
                },
            },
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
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list'],
}
