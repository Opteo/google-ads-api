module.exports = {
    name: 'AdGroupSimulation',
    object: {
        ad_group_id: { _description: 'Ad group id of the simulation.', _type: 'int64' },
        cpc_bid_point_list: {
            _oneof: 'pointList',
            points: { _description: 'Projected metrics for a series of CPC bid amounts.', _type: 'array' },
        },
        cpv_bid_point_list: {
            _oneof: 'pointList',
            points: { _description: 'Projected metrics for a series of CPV bid amounts.', _type: 'array' },
        },
        end_date: { _description: 'Last day on which the simulation is based, in YYYY-MM-DD format', _type: 'string' },
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
                'The resource name of the ad group simulation. Ad group simulation resource names have the form: <code>customers/{customer_id}/adGroupSimulations/{ad_group_id}~{type}~{modification_method}~{start_date}~{end_date}</code>',
            _type: 'string',
        },
        start_date: {
            _description: 'First day on which the simulation is based, in YYYY-MM-DD format.',
            _type: 'string',
        },
        target_cpa_point_list: {
            _oneof: 'pointList',
            points: { _description: 'Projected metrics for a series of target CPA amounts.', _type: 'array' },
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
