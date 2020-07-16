module.exports = {
    name: 'GeoTargetConstant',
    object: {
        canonical_name: {
            _description:
                "Output only. The fully qualified English name, consisting of the target's name and that of its parent and country.",
            _type: 'string',
        },
        country_code: {
            _description: 'Output only. The ISO-3166-1 alpha-2 country code that is associated with the target.',
            _type: 'string',
        },
        id: { _description: 'Output only. The ID of the geo target constant.', _type: 'int64' },
        name: { _description: 'Output only. Geo target constant English name.', _type: 'string' },
        resource_name: {
            _description:
                'Output only. The resource name of the geo target constant. Geo target constant resource names have the form: <code>geoTargetConstants/{geo_target_constant_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Output only. Geo target constant status.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'The geo target constant is valid.', index: 2 },
                {
                    s: 'REMOVAL_PLANNED',
                    description: 'The geo target constant is obsolete and will be removed.',
                    index: 3,
                },
            ],
            _type: 'enum',
        },
        target_type: { _description: 'Output only. Geo target constant target type.', _type: 'string' },
    },
    methods: ['get', 'list', 'suggest'],
}
