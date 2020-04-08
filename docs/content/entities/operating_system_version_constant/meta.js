module.exports = {
    name: 'OperatingSystemVersionConstant',
    object: {
        id: { _description: 'Output only. The ID of the operating system version.', _type: 'int64' },
        name: { _description: 'Output only. Name of the operating system.', _type: 'string' },
        operator_type: {
            _description:
                'Output only. Determines whether this constant represents a single version or a range of versions.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'EQUALS_TO', description: 'Equals to the specified version.' },
                { s: 'GREATER_THAN_EQUALS_TO', description: 'Greater than or equals to the specified version.' },
            ],
            _type: 'enum',
        },
        os_major_version: { _description: 'Output only. The OS Major Version number.', _type: 'int32' },
        os_minor_version: { _description: 'Output only. The OS Minor Version number.', _type: 'int32' },
        resource_name: {
            _description:
                'Output only. The resource name of the operating system version constant. Operating system version constant resource names have the form: <code>operatingSystemVersionConstants/{criterion_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list'],
}
