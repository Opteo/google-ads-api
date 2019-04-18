module.exports = {
    name: 'BiddingStrategy',
    object: {
        enhanced_cpc: { _oneof: 'scheme' },
        target_spend: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'Maximum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            target_spend_micros: {
                _type: 'int64',
                _description:
                    'The spend target under which to maximize clicks.\nA TargetSpend bidder will attempt to spend the smaller of this value\nor the natural throttling spend amount.\nIf not specified, the budget is used as the spend target.',
            },
            _oneof: 'scheme',
        },
        campaign_count: {
            _type: 'int64',
            _description: 'The number of campaigns attached to this bidding strategy.\n\nThis field is read-only.',
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'ENABLED', description: 'The bidding strategy is enabled.' },
                { s: 'REMOVED', description: 'The bidding strategy is removed.' },
            ],
            _description: 'The status of the bidding strategy.\n\nThis field is read-only.',
        },
        name: {
            _type: 'string',
            _description:
                'The name of the bidding strategy.\nAll bidding strategies within an account must be named distinctly.\n\nThe length of this string should be between 1 and 255, inclusive,\nin UTF-8 bytes, (trimmed).',
        },
        page_one_promoted: {
            raise_cpc_bid_when_budget_constrained: {
                _type: 'boolean',
                _description:
                    'Whether the strategy is allowed to raise bids when the throttling\nrate of the budget it is serving out of rises above a threshold.',
            },
            bid_modifier: {
                _type: 'double',
                _description:
                    "Bid multiplier to be applied to the relevant bid estimate (depending on\nthe `strategy_goal`) in determining a keyword's new CPC bid.",
            },
            only_raise_cpc_bids: {
                _type: 'boolean',
                _description:
                    "Whether the strategy should always follow bid estimate changes, or only\nincrease.\nIf false, always sets a keyword's new bid to the current bid estimate.\nIf true, only updates a keyword's bid if the current bid estimate is\ngreater than the current bid.",
            },
            raise_cpc_bid_when_quality_score_is_low: {
                _type: 'boolean',
                _description:
                    'Whether the strategy is allowed to raise bids on keywords with\nlower-range quality scores.',
            },
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'Maximum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            strategy_goal: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'FIRST_PAGE', description: 'First page on google.com.' },
                    { s: 'FIRST_PAGE_PROMOTED', description: 'Top slots of the first page on google.com.' },
                ],
                _description: 'The strategy goal of where impressions are desired to be shown on\nsearch result pages.',
            },
            _oneof: 'scheme',
        },
        id: { _type: 'int64', _description: 'The ID of the bidding strategy.' },
        non_removed_campaign_count: {
            _type: 'int64',
            _description:
                'The number of non-removed campaigns attached to this bidding strategy.\n\nThis field is read-only.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the bidding strategy.\nBidding strategy resource names have the form:\n\n`customers/{customer_id}/biddingStrategies/{bidding_strategy_id}`',
        },
        target_cpa: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'Maximum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            cpc_bid_floor_micros: {
                _type: 'int64',
                _description:
                    'Minimum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            target_cpa_micros: {
                _type: 'int64',
                _description:
                    'Average CPA target.\nThis target should be greater than or equal to minimum billable unit based\non the currency for the account.',
            },
            _oneof: 'scheme',
        },
        target_outrank_share: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'Maximum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            target_outrank_share_micros: {
                _type: 'int32',
                _description:
                    'The target fraction of auctions where the advertiser should outrank the\ncompetitor.\nThe advertiser outranks the competitor in an auction if either the\nadvertiser appears above the competitor in the search results, or appears\nin the search results when the competitor does not.\nValue must be between 1 and 1000000, inclusive.',
            },
            only_raise_cpc_bids: {
                _type: 'boolean',
                _description:
                    "Whether the strategy should always follow bid estimate changes,\nor only increase.\nIf false, always set a keyword's new bid to the current bid estimate.\nIf true, only updates a keyword's bid if the current bid estimate is\ngreater than the current bid.",
            },
            competitor_domain: { _type: 'string', _description: "Competitor's visible domain URL." },
            raise_cpc_bid_when_quality_score_is_low: {
                _type: 'boolean',
                _description:
                    'Whether the strategy is allowed to raise bids on keywords with\nlower-range quality scores.',
            },
            _oneof: 'scheme',
        },
        target_roas: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'Maximum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            target_roas: {
                _type: 'double',
                _description:
                    'Required. The desired revenue (based on conversion data) per unit of spend.\nValue must be between 0.01 and 1000.0, inclusive.',
            },
            cpc_bid_floor_micros: {
                _type: 'int64',
                _description:
                    'Minimum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            _oneof: 'scheme',
        },
        target_impression_share: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'The highest CPC bid the automated bidding system is permitted to specify.\nThis is a required field entered by the advertiser that sets the ceiling\nand specified in local micros.',
            },
            location: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'ANYWHERE_ON_PAGE', description: 'Any location on the web page.' },
                    { s: 'TOP_OF_PAGE', description: 'Top box of ads.' },
                    { s: 'ABSOLUTE_TOP_OF_PAGE', description: 'Top slot in the top box of ads.' },
                ],
                _description: 'The targeted location on the search results page.',
            },
            location_fraction_micros: {
                _type: 'int64',
                _description:
                    'The desired fraction of ads to be shown in the targeted location in micros.\nE.g. 1% equals 10,000.',
            },
            _oneof: 'scheme',
        },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'ENHANCED_CPC',
                    description:
                        'Enhanced CPC is a bidding strategy that raises bids for clicks\nthat seem more likely to lead to a conversion and lowers\nthem for clicks where they seem less likely.',
                },
                { s: 'MANUAL_CPC', description: 'Manual click based bidding where user pays per click.' },
                {
                    s: 'MANUAL_CPM',
                    description: 'Manual impression based bidding\nwhere user pays per thousand impressions.',
                },
                { s: 'MANUAL_CPV', description: 'A bidding strategy that pays a configurable amount per video view.' },
                {
                    s: 'MAXIMIZE_CONVERSIONS',
                    description:
                        'A bidding strategy that automatically maximizes number of conversions\ngiven a daily budget.',
                },
                {
                    s: 'MAXIMIZE_CONVERSION_VALUE',
                    description:
                        'An automated bidding strategy that automatically sets bids to maximize\nrevenue while spending your budget.',
                },
                {
                    s: 'PAGE_ONE_PROMOTED',
                    description:
                        'Page-One Promoted bidding scheme, which sets max cpc bids to\ntarget impressions on page one or page one promoted slots on google.com.',
                },
                {
                    s: 'PERCENT_CPC',
                    description:
                        'Percent Cpc is bidding strategy where bids are a fraction of the\nadvertised price for some good or service.',
                },
                {
                    s: 'TARGET_CPA',
                    description:
                        'Target CPA is an automated bid strategy that sets bids\nto help get as many conversions as possible\nat the target cost-per-acquisition (CPA) you set.',
                },
                {
                    s: 'TARGET_CPM',
                    description:
                        'Target CPM is an automated bid strategy that sets bids to help get\nas many impressions as possible at the target cost per one thousand\nimpressions (CPM) you set.',
                },
                {
                    s: 'TARGET_IMPRESSION_SHARE',
                    description:
                        'An automated bidding strategy that sets bids so that a certain percentage\nof search ads are shown at the top of the first page (or other targeted\nlocation).',
                },
                {
                    s: 'TARGET_OUTRANK_SHARE',
                    description:
                        'Target Outrank Share is an automated bidding strategy that sets bids\nbased on the target fraction of auctions where the advertiser\nshould outrank a specific competitor.',
                },
                {
                    s: 'TARGET_ROAS',
                    description:
                        'Target ROAS is an automated bidding strategy\nthat helps you maximize revenue while averaging\na specific target Return On Average Spend (ROAS).',
                },
                {
                    s: 'TARGET_SPEND',
                    description:
                        'Target Spend is an automated bid strategy that sets your bids\nto help get as many clicks as possible within your budget.',
                },
            ],
            _description:
                'The type of the bidding strategy.\nCreate a bidding strategy by setting the bidding scheme.\n\nThis field is read-only.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
