module.exports = {
    name: 'CampaignCriterionSimulation',
    object: {
        bid_modifier_point_list: {
            points: { _description: 'Projected metrics for a series of bid modifier amounts.', _type: 'array' },
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
