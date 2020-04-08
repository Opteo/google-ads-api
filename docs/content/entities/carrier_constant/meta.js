module.exports = {
    name: 'CarrierConstant',
    object: {
        country_code: {
            _description:
                'Output only. The country code of the country where the carrier is located, e.g., "AR", "FR", etc.',
            _type: 'string',
        },
        id: { _description: 'Output only. The ID of the carrier criterion.', _type: 'int64' },
        name: { _description: 'Output only. The full name of the carrier in English.', _type: 'string' },
        resource_name: {
            _description:
                'Output only. The resource name of the carrier criterion. Carrier criterion resource names have the form: <code>carrierConstants/{criterion_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list'],
}
