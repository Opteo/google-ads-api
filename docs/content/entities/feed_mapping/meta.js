module.exports = {
    name: 'FeedMapping',
    object: {
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Feed mapping is enabled.' },
                { s: 'REMOVED', description: 'Feed mapping has been removed.' },
            ],
            _description: 'Status of the feed mapping.\nThis field is read-only.',
        },
        placeholder_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'SITELINK',
                    description:
                        'Lets you show links in your ad to pages from your website, including the\nmain landing page.',
                },
                {
                    s: 'CALL',
                    description:
                        'Lets you attach a phone number to an ad, allowing customers to call\ndirectly from the ad.',
                },
                {
                    s: 'APP',
                    description:
                        'Lets you provide users with a link that points to a mobile app in\naddition to a website.',
                },
                {
                    s: 'LOCATION',
                    description:
                        'Lets you show locations of businesses from your Google My Business\naccount in your ad. This helps people find your locations by showing your\nads with your address, a map to your location, or the distance to your\nbusiness. This extension type is useful to draw customers to your\nbrick-and-mortar location.',
                },
                {
                    s: 'AFFILIATE_LOCATION',
                    description:
                        'If you sell your product through retail chains, affiliate location\nextensions let you show nearby stores that carry your products.',
                },
                {
                    s: 'CALLOUT',
                    description:
                        'Lets you include additional text with your search ads that provide\ndetailed information about your business, including products and services\nyou offer. Callouts appear in ads at the top and bottom of Google search\nresults.',
                },
                {
                    s: 'STRUCTURED_SNIPPET',
                    description:
                        'Lets you add more info to your ad, specific to some predefined categories\nsuch as types, brands, styles, etc. A minimum of 3 text (SNIPPETS) values\nare required.',
                },
                {
                    s: 'MESSAGE',
                    description:
                        'Allows users to see your ad, click an icon, and contact you directly by\ntext message. With one tap on your ad, people can contact you to book an\nappointment, get a quote, ask for information, or request a service.',
                },
                {
                    s: 'PRICE',
                    description:
                        'Lets you display prices for a list of items along with your ads. A price\nfeed is composed of three to eight price table rows.',
                },
                {
                    s: 'PROMOTION',
                    description:
                        'Allows you to highlight sales and other promotions that let users see how\nthey can save by buying now.',
                },
                {
                    s: 'AD_CUSTOMIZER',
                    description: 'Lets you dynamically inject custom data into the title and description\nof your ads.',
                },
                {
                    s: 'DYNAMIC_EDUCATION',
                    description: 'Indicates that this feed is for education dynamic remarketing.',
                },
                { s: 'DYNAMIC_FLIGHT', description: 'Indicates that this feed is for flight dynamic remarketing.' },
                {
                    s: 'DYNAMIC_CUSTOM',
                    description:
                        "Indicates that this feed is for a custom dynamic remarketing type. Use\nthis only if the other business types don't apply to your products or\nservices.",
                },
                {
                    s: 'DYNAMIC_HOTEL',
                    description: 'Indicates that this feed is for hotels and rentals dynamic remarketing.',
                },
                {
                    s: 'DYNAMIC_REAL_ESTATE',
                    description: 'Indicates that this feed is for real estate dynamic remarketing.',
                },
                { s: 'DYNAMIC_TRAVEL', description: 'Indicates that this feed is for travel dynamic remarketing.' },
                { s: 'DYNAMIC_LOCAL', description: 'Indicates that this feed is for local deals dynamic remarketing.' },
                { s: 'DYNAMIC_JOB', description: 'Indicates that this feed is for job dynamic remarketing.' },
            ],
            _description:
                'The placeholder type of this mapping (i.e., if the mapping maps feed\nattributes to placeholder fields).',
            _oneof: 'target',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the feed mapping.\nFeed mapping resource names have the form:\n\n`customers/{customer_id}/feedMappings/{feed_id}~{feed_mapping_id}`',
        },
        criterion_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'LOCATION_EXTENSION_TARGETING',
                    description: 'Allows campaign targeting at locations within a location feed.',
                },
                {
                    s: 'DSA_PAGE_FEED',
                    description: 'Allows url targeting for your dynamic search ads within a page feed.',
                },
            ],
            _description:
                'The criterion type of this mapping (i.e., if the mapping maps feed\nattributes to criterion fields).',
            _oneof: 'target',
        },
        feed: { _type: 'string', _description: 'The feed of this feed mapping.' },
        attribute_field_mappings: {
            _type: 'array',
            _description:
                'Feed attributes to field mappings. These mappings are a one-to-many\nrelationship meaning that 1 feed attribute can be used to populate\nmultiple placeholder fields, but 1 placeholder field can only draw\ndata from 1 feed attribute. Ad Customizer is an exception, 1 placeholder\nfield can be mapped to multiple feed attributes. Required.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
