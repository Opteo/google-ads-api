module.exports = {
    name: 'CarrierConstant',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the carrier criterion. Carrier criterion resource names have the form: <code>carrierConstants/{criterion_id}</code>',
        },
        name: { _type: 'string', _description: 'The full name of the carrier in English.' },
        id: { _type: 'int64', _description: 'The ID of the carrier criterion.' },
        country_code: {
            _type: 'string',
            _description: 'The country code of the country where the carrier is located, e.g., "AR", "FR", etc.',
        },
    },
    methods: ['get', 'list'],
}
