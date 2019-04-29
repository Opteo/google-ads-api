module.exports = {
    name: 'MobileDeviceConstant',
    object: {
        operating_system_name: { _type: 'string', _description: 'The operating system of the mobile device.' },
        name: { _type: 'string', _description: 'The name of the mobile device.' },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'MOBILE', description: 'Mobile phones.' },
                { s: 'TABLET', description: 'Tablets.' },
            ],
            _description: 'The type of mobile device.',
        },
        id: { _type: 'int64', _description: 'The ID of the mobile device constant.' },
        manufacturer_name: { _type: 'string', _description: 'The manufacturer of the mobile device.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the mobile device constant. Mobile device constant resource names have the form: <code>mobileDeviceConstants/{criterion_id}</code>',
        },
    },
    methods: ['get', 'list'],
}
