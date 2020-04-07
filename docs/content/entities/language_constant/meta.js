module.exports = {
    name: 'LanguageConstant',
    object: {
        code: { _description: 'The language code, e.g. "en_US", "en_AU", "es", "fr", etc.', _type: 'string' },
        id: { _description: 'The ID of the language constant.', _type: 'int64' },
        name: {
            _description: 'The full name of the language in English, e.g., "English (US)", "Spanish", etc.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'The resource name of the language constant. Language constant resource names have the form: <code>languageConstants/{criterion_id}</code>',
            _type: 'string',
        },
        targetable: { _description: 'Whether the language is targetable.', _type: 'boolean' },
    },
    methods: ['get', 'list'],
}
