module.exports = {
    name: 'MobileDeviceConstant',
    object: {
        id: { _description: 'Output only. The ID of the mobile device constant.', _type: 'int64' },
        manufacturer_name: { _description: 'Output only. The manufacturer of the mobile device.', _type: 'string' },
        name: { _description: 'Output only. The name of the mobile device.', _type: 'string' },
        operating_system_name: {
            _description: 'Output only. The operating system of the mobile device.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'Output only. The resource name of the mobile device constant. Mobile device constant resource names have the form: <code>mobileDeviceConstants/{criterion_id}</code>',
            _type: 'string',
        },
        type: {
            _description: 'Output only. The type of mobile device.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'MOBILE', description: 'Mobile phones.' },
                { s: 'TABLET', description: 'Tablets.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list'],
}
