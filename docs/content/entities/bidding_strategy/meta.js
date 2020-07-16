module.exports = {
    name: 'BiddingStrategy',
    object: {
        campaign_count: {
            _description:
                'Output only. The number of campaigns attached to this bidding strategy. This field is read-only.',
            _type: 'int64',
        },
        enhanced_cpc: {
            _oneof: 'scheme',
            _parent_description:
                'A bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely.',
        },
        id: { _description: 'Output only. The ID of the bidding strategy.', _type: 'int64' },
        name: {
            _description:
                'The name of the bidding strategy. All bidding strategies within an account must be named distinctly. The length of this string should be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed).',
            _type: 'string',
        },
        non_removed_campaign_count: {
            _description:
                'Output only. The number of non-removed campaigns attached to this bidding strategy. This field is read-only.',
            _type: 'int64',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the bidding strategy. Bidding strategy resource names have the form: <code>customers/{customer_id}/biddingStrategies/{bidding_strategy_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Output only. The status of the bidding strategy. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'The bidding strategy is enabled.', index: 2 },
                { s: 'REMOVED', description: 'The bidding strategy is removed.', index: 3 },
            ],
            _type: 'enum',
        },
        target_cpa: {
            _oneof: 'scheme',
            _parent_description:
                'A bidding strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.',
            cpc_bid_ceiling_micros: {
                _description:
                    'Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            cpc_bid_floor_micros: {
                _description:
                    'Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            target_cpa_micros: {
                _description:
                    'Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account.',
                _type: 'int64',
            },
        },
        target_impression_share: {
            _oneof: 'scheme',
            _parent_description:
                'A bidding strategy that automatically optimizes towards a desired percentage of impressions.',
            cpc_bid_ceiling_micros: {
                _description:
                    'The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros.',
                _type: 'int64',
            },
            location: {
                _description: 'The targeted location on the search results page.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'ANYWHERE_ON_PAGE', description: 'Any location on the web page.', index: 2 },
                    { s: 'TOP_OF_PAGE', description: 'Top box of ads.', index: 3 },
                    { s: 'ABSOLUTE_TOP_OF_PAGE', description: 'Top slot in the top box of ads.', index: 4 },
                ],
                _type: 'enum',
            },
            location_fraction_micros: {
                _description:
                    'The desired fraction of ads to be shown in the targeted location in micros. E.g. 1% equals 10,000.',
                _type: 'int64',
            },
        },
        target_roas: {
            _oneof: 'scheme',
            _parent_description:
                'A bidding strategy that helps you maximize revenue while averaging a specific target Return On Ad Spend (ROAS).',
            cpc_bid_ceiling_micros: {
                _description:
                    'Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            cpc_bid_floor_micros: {
                _description:
                    'Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            target_roas: {
                _description:
                    'Required. The desired revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive.',
                _type: 'double',
            },
        },
        target_spend: {
            _oneof: 'scheme',
            _parent_description:
                'A bid strategy that sets your bids to help get as many clicks as possible within your budget.',
            cpc_bid_ceiling_micros: {
                _description:
                    'Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            target_spend_micros: {
                _description:
                    'The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target.',
                _type: 'int64',
            },
        },
        type: {
            _description:
                'Output only. The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'COMMISSION',
                    description:
                        'Commission is an automatic bidding strategy in which the advertiser pays\na certain portion of the conversion value.',
                    index: 16,
                },
                {
                    s: 'ENHANCED_CPC',
                    description:
                        'Enhanced CPC is a bidding strategy that raises bids for clicks\nthat seem more likely to lead to a conversion and lowers\nthem for clicks where they seem less likely.',
                    index: 2,
                },
                { s: 'MANUAL_CPC', description: 'Manual click based bidding where user pays per click.', index: 3 },
                {
                    s: 'MANUAL_CPM',
                    description: 'Manual impression based bidding\nwhere user pays per thousand impressions.',
                    index: 4,
                },
                {
                    s: 'MANUAL_CPV',
                    description: 'A bidding strategy that pays a configurable amount per video view.',
                    index: 13,
                },
                {
                    s: 'MAXIMIZE_CONVERSIONS',
                    description:
                        'A bidding strategy that automatically maximizes number of conversions\ngiven a daily budget.',
                    index: 10,
                },
                {
                    s: 'MAXIMIZE_CONVERSION_VALUE',
                    description:
                        'An automated bidding strategy that automatically sets bids to maximize\nrevenue while spending your budget.',
                    index: 11,
                },
                {
                    s: 'PAGE_ONE_PROMOTED',
                    description:
                        'Page-One Promoted bidding scheme, which sets max cpc bids to\ntarget impressions on page one or page one promoted slots on google.com.\nThis enum value is deprecated.',
                    index: 5,
                },
                {
                    s: 'PERCENT_CPC',
                    description:
                        'Percent Cpc is bidding strategy where bids are a fraction of the\nadvertised price for some good or service.',
                    index: 12,
                },
                {
                    s: 'TARGET_CPA',
                    description:
                        'Target CPA is an automated bid strategy that sets bids\nto help get as many conversions as possible\nat the target cost-per-acquisition (CPA) you set.',
                    index: 6,
                },
                {
                    s: 'TARGET_CPM',
                    description:
                        'Target CPM is an automated bid strategy that sets bids to help get\nas many impressions as possible at the target cost per one thousand\nimpressions (CPM) you set.',
                    index: 14,
                },
                {
                    s: 'TARGET_IMPRESSION_SHARE',
                    description:
                        'An automated bidding strategy that sets bids so that a certain percentage\nof search ads are shown at the top of the first page (or other targeted\nlocation).',
                    index: 15,
                },
                {
                    s: 'TARGET_OUTRANK_SHARE',
                    description:
                        'Target Outrank Share is an automated bidding strategy that sets bids\nbased on the target fraction of auctions where the advertiser\nshould outrank a specific competitor.\nThis enum value is deprecated.',
                    index: 7,
                },
                {
                    s: 'TARGET_ROAS',
                    description:
                        'Target ROAS is an automated bidding strategy\nthat helps you maximize revenue while averaging\na specific target Return On Average Spend (ROAS).',
                    index: 8,
                },
                {
                    s: 'TARGET_SPEND',
                    description:
                        'Target Spend is an automated bid strategy that sets your bids\nto help get as many clicks as possible within your budget.',
                    index: 9,
                },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
