// @ts-ignore
import { BiddingStrategy } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The bidding_strategy entity:

const bidding_strategy = {
    enhanced_cpc: {},
    target_spend: {
        cpc_bid_ceiling_micros: 'int64', // Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        target_spend_micros: 'int64', // The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target.
    },
    campaign_count: 'int64', // The number of campaigns attached to this bidding strategy.  This field is read-only.
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED', // The status of the bidding strategy.  This field is read-only.
    name: 'string', // The name of the bidding strategy. All bidding strategies within an account must be named distinctly.  The length of this string should be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed).
    page_one_promoted: {
        raise_cpc_bid_when_budget_constrained: 'boolean', // Whether the strategy is allowed to raise bids when the throttling rate of the budget it is serving out of rises above a threshold.
        bid_modifier: 'double', // Bid multiplier to be applied to the relevant bid estimate (depending on the `strategy_goal`) in determining a keyword's new CPC bid.
        only_raise_cpc_bids: 'boolean', // Whether the strategy should always follow bid estimate changes, or only increase. If false, always sets a keyword's new bid to the current bid estimate. If true, only updates a keyword's bid if the current bid estimate is greater than the current bid.
        raise_cpc_bid_when_quality_score_is_low: 'boolean', // Whether the strategy is allowed to raise bids on keywords with lower-range quality scores.
        cpc_bid_ceiling_micros: 'int64', // Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        strategy_goal: 'UNSPECIFIED | UNKNOWN | FIRST_PAGE | FIRST_PAGE_PROMOTED', // The strategy goal of where impressions are desired to be shown on search result pages.
    },
    id: 'int64', // The ID of the bidding strategy.
    non_removed_campaign_count: 'int64', // The number of non-removed campaigns attached to this bidding strategy.  This field is read-only.
    resource_name: 'string', // The resource name of the bidding strategy. Bidding strategy resource names have the form:  `customers/{customer_id}/biddingStrategies/{bidding_strategy_id}`
    target_cpa: {
        cpc_bid_ceiling_micros: 'int64', // Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        cpc_bid_floor_micros: 'int64', // Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        target_cpa_micros: 'int64', // Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account.
    },
    target_outrank_share: {
        cpc_bid_ceiling_micros: 'int64', // Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        target_outrank_share_micros: 'int32', // The target fraction of auctions where the advertiser should outrank the competitor. The advertiser outranks the competitor in an auction if either the advertiser appears above the competitor in the search results, or appears in the search results when the competitor does not. Value must be between 1 and 1000000, inclusive.
        only_raise_cpc_bids: 'boolean', // Whether the strategy should always follow bid estimate changes, or only increase. If false, always set a keyword's new bid to the current bid estimate. If true, only updates a keyword's bid if the current bid estimate is greater than the current bid.
        competitor_domain: 'string', // Competitor's visible domain URL.
        raise_cpc_bid_when_quality_score_is_low: 'boolean', // Whether the strategy is allowed to raise bids on keywords with lower-range quality scores.
    },
    target_roas: {
        cpc_bid_ceiling_micros: 'int64', // Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        target_roas: 'double', // Required. The desired revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive.
        cpc_bid_floor_micros: 'int64', // Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
    },
    target_impression_share: {
        cpc_bid_ceiling_micros: 'int64', // The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros.
        location: 'UNSPECIFIED | UNKNOWN | ANYWHERE_ON_PAGE | TOP_OF_PAGE | ABSOLUTE_TOP_OF_PAGE', // The targeted location on the search results page.
        location_fraction_micros: 'int64', // The desired fraction of ads to be shown in the targeted location in micros. E.g. 1% equals 10,000.
    },
    type:
        'UNSPECIFIED | UNKNOWN | ENHANCED_CPC | MANUAL_CPC | MANUAL_CPM | MANUAL_CPV | MAXIMIZE_CONVERSIONS | MAXIMIZE_CONVERSION_VALUE | PAGE_ONE_PROMOTED | PERCENT_CPC | TARGET_CPA | TARGET_CPM | TARGET_IMPRESSION_SHARE | TARGET_OUTRANK_SHARE | TARGET_ROAS | TARGET_SPEND', // The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme.  This field is read-only.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'biddingStrategies'
const MUTATE_METHOD = 'mutatebiddingStrategies'
const MUTATE_REQUEST = 'MutateBiddingStrategiesRequest'
const OPERATION_REQUEST = 'BiddingStrategyOperation'
const GET_METHOD = 'getBiddingStrategy'
const GET_REQUEST = 'GetBiddingStrategyRequest'
const RESOURCE = 'BiddingStrategy'

export default class BiddingStrategyService extends Service {
    public async get(id: number | string): Promise<BiddingStrategy> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as BiddingStrategy
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ bidding_strategy: BiddingStrategy }>> {
        return this.getListResults('bidding_strategy', options)
    }

    public async create(
        bidding_strategy: BiddingStrategy | Array<BiddingStrategy>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, bidding_strategy],
            ...options,
        })
    }

    public async update(
        bidding_strategy: BiddingStrategy | Array<BiddingStrategy>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, bidding_strategy],
            ...options,
        })
    }

    public async delete(id: number | string, options?: ServiceCreateOptions) {
        return this.serviceDelete({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            entity_id: id,
            ...options,
        })
    }
}
