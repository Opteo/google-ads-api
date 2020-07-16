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
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'MOBILE', description: 'Mobile phones.', index: 2 },
                { s: 'TABLET', description: 'Tablets.', index: 3 },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list'],
}
