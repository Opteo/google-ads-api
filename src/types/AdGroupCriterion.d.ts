
declare namespace AdGroupCriterion {
    /**
     * AdGroupCriterion Interface
     * @interface
     */
    export interface AdGroupCriterion {
        resource_name: string,
        status: CriterionStatus,
        quality_info: QualityInfo,
        ad_group: string,
        position_estimates: PositionEstimates,
        effective_cpc_bid_micros: string|number,
        effective_cpm_bid_micros: string|number,
        effective_cpc_bid_source: BidSource,
        effective_cpm_bid_source: BidSource,
        type: CriterionType,
        criterion_id: string|number,
        negative: boolean,
        final_urls: string
    }

    /**
     * Quality Info Interface
     * @interface
     */
    interface QualityInfo {
        quality_score: number|string,
        creative_quality_score: QualityScore,
        post_click_quality_score: QualityScore,
        search_predicted_ctr: QualityScore
    }

     /**
     * Enum for QualityScore
     * @readonly
     * @enum {string}
     */
    enum QualityScore {
        ABOVE_AVERAGE = 'ABOVE_AVERAGE',
        AVERAGE = 'AVERAGE',
        BELOW_AVERAGE = 'BELOW_AVERAGE',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }

    /**
     * Position Estimates Interface
     * @interface
     */
    interface PositionEstimates {
        first_page_cpc_micros?: string|number,
        first_position_cpc_micros: string|number,
        top_of_page_cpc_micros: string|number,
    }

    /**
     * Enum for CriterionStatus
     * @readonly
     * @enum {string}
     */
    enum CriterionStatus {
        ENABLED = 'ENABLED',
        PAUSED = 'PAUSED',
        REMOVED = 'REMOVED',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }
    /**
     * Enum for BidSource
     * @readonly
     * @enum {string}
     */
    enum BidSource {
        ADGROUP = 'ADGROUP',
        CAMPAIGN_BIDDING_STRATEGY = 'CAMPAIGN_BIDDING_STRATEGY',
        CRITERION = 'CRITERION',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }
    /**
     * Enum for CriterionType
     * @readonly
     * @enum {string}
     */
    enum CriterionType {
        KEYWORD = 'KEYWORD',
        LISTING_GROUP = 'LISTING_GROUP',
        LOCATION = 'LOCATION',
        PLATFORM = 'PLATFORM',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }

}
export = AdGroupCriterion