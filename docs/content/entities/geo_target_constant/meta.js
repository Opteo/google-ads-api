module.exports = {
    name: 'GeoTargetConstant',
    object: {
        canonical_name: {
            _type: 'string',
            _description:
                "The fully qualified English name, consisting of the target's name and that of its parent and country.",
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the geo target constant. Geo target constant resource names have the form: <code>geoTargetConstants/{geo_target_constant_id}</code>',
        },
        country_code: {
            _type: 'string',
            _description: 'The ISO-3166-1 alpha-2 country code that is associated with the target.',
        },
        target_type: { _type: 'string', _description: 'Geo target constant target type.' },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'ENABLED', description: 'The geo target constant is valid.' },
                { s: 'REMOVAL_PLANNED', description: 'The geo target constant is obsolete and will be removed.' },
            ],
            _description: 'Geo target constant status.',
        },
        name: { _type: 'string', _description: 'Geo target constant English name.' },
        id: { _type: 'int64', _description: 'The ID of the geo target constant.' },
    },
    methods: ['get', 'list'],
}
