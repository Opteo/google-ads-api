module.exports = {
    name: 'MobileAppCategoryConstant',
    object: {
        id: { _description: 'The ID of the mobile app category constant.', _type: 'int32' },
        name: { _description: 'Mobile app category name.', _type: 'string' },
        resource_name: {
            _description:
                'The resource name of the mobile app category constant. Mobile app category constant resource names have the form: <code>mobileAppCategoryConstants/{mobile_app_category_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list'],
}
