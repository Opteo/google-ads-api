module.exports = {
    name: 'LanguageConstant',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the language constant. Language constant resource names have the form: <code>languageConstants/{criterion_id}</code>',
        },
        name: {
            _type: 'string',
            _description: 'The full name of the language in English, e.g., "English (US)", "Spanish", etc.',
        },
        code: { _type: 'string', _description: 'The language code, e.g. "en_US", "en_AU", "es", "fr", etc.' },
        targetable: { _type: 'boolean', _description: 'Whether the language is targetable.' },
        id: { _type: 'int64', _description: 'The ID of the language constant.' },
    },
    methods: ['get', 'list'],
}
