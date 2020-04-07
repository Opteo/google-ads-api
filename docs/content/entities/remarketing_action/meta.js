module.exports = {
    name: 'RemarketingAction',
    object: {
        id: { _description: 'Id of the remarketing action.', _type: 'int64' },
        name: {
            _description:
                'The name of the remarketing action. This field is required and should not be empty when creating new remarketing actions.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'The resource name of the remarketing action. Remarketing action resource names have the form: <code>customers/{customer_id}/remarketingActions/{remarketing_action_id}</code>',
            _type: 'string',
        },
        tag_snippets: {
            _type: 'array of objects',
            event_snippet: {
                _description:
                    'The event snippet that works with the site tag to track actions that should be counted as conversions.',
                _type: 'string',
            },
            global_site_tag: {
                _description:
                    'The site tag that adds visitors to your basic remarketing lists and sets new cookies on your domain.',
                _type: 'string',
            },
            page_format: {
                _description:
                    'The format of the web page where the tracking tag and snippet will be installed, e.g. HTML.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'HTML', description: 'Standard HTML page format.' },
                    { s: 'AMP', description: 'Google AMP page format.' },
                ],
                _type: 'enum',
            },
            type: {
                _description: 'The type of the generated tag snippets for tracking conversions.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'WEBPAGE', description: 'The snippet that is fired as a result of a website page loading.' },
                    {
                        s: 'WEBPAGE_ONCLICK',
                        description:
                            'The snippet contains a JavaScript function which fires the tag. This\nfunction is typically called from an onClick handler added to a link or\nbutton element on the page.',
                    },
                    {
                        s: 'CLICK_TO_CALL',
                        description:
                            'For embedding on a mobile webpage. The snippet contains a JavaScript\nfunction which fires the tag.',
                    },
                    {
                        s: 'WEBSITE_CALL',
                        description:
                            'The snippet that is used to replace the phone number on your website with\na Google forwarding number for call tracking purposes.',
                    },
                ],
                _type: 'enum',
            },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
