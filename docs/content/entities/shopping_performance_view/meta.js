module.exports = {
    name: 'ShoppingPerformanceView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the Shopping performance view.\nShopping performance view resource names have the form:\n`customers/{customer_id}/shoppingPerformanceView`',
        },
    },
    methods: ['get', 'list'],
}
