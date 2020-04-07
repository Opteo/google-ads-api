module.exports = {
    name: 'CarrierConstant',
    object: {
        country_code: {
            _description: 'The country code of the country where the carrier is located, e.g., "AR", "FR", etc.',
            _type: 'string',
        },
        id: { _description: 'The ID of the carrier criterion.', _type: 'int64' },
        name: { _description: 'The full name of the carrier in English.', _type: 'string' },
        resource_name: {
            _description:
                'The resource name of the carrier criterion. Carrier criterion resource names have the form: <code>carrierConstants/{criterion_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list'],
}
