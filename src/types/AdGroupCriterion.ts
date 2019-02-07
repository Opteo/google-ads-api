import { NewEntityConfig } from './Entity'

declare namespace AdGroupCriterion {
    /**
     * AdGroupCriterion Interface
     * @interface
     */
    export interface AdGroupCriterion {
        resource_name: string
        status: CriterionStatus
        quality_info: QualityInfo
        ad_group: string
        position_estimates: PositionEstimates
        effective_cpc_bid_micros: string | number
        effective_cpm_bid_micros: string | number
        effective_cpc_bid_source: BidSource
        effective_cpm_bid_source: BidSource
        type: CriterionType
        criterion_id: string | number
        negative: boolean
        final_urls: string
        listing_group: ListingGroup
    }

    /**
     * Quality Info Interface
     * @interface
     */
    interface QualityInfo {
        quality_score: number | string
        creative_quality_score: QualityScore
        post_click_quality_score: QualityScore
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
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Position Estimates Interface
     * @interface
     */
    interface PositionEstimates {
        first_page_cpc_micros?: string | number
        first_position_cpc_micros: string | number
        top_of_page_cpc_micros: string | number
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
        UNSPECIFIED = 'UNSPECIFIED',
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
        UNSPECIFIED = 'UNSPECIFIED',
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
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Interface for New Criterion Config
     * @interface
     * @param ad_group_id
     */
    export interface NewCriterionConfig extends NewEntityConfig {
        ad_group_id: string | number
        keyword?: object
        listing_group?: object
    }

    /**
     * Listing Group Interface
     * @interface
     */
    interface ListingGroup {
        type: ListingGroupType
        parent_ad_group_criterion: number | string
        case_value: CaseValue
    }

    /**
     * Enum for ListingGroupType
     * @readonly
     * @enum {string}
     */
    enum ListingGroupType {
        SUBDIVISION = 'SUBDIVISION',
        UNIT = 'UNIT',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Case Value Interface
     * @interface
     */
    interface CaseValue {
        product_type: ProductType
        product_offer_id: ProductOfferId
        listing_brand: ListingBrand
        listing_custom_attribute: ListingCustomAttribute
        product_channel: ProductChannel
        product_channel_exclusivity: ProductChannelExclusivity
        product_condition: ProductCondition
    }

    /**
     * Product Type Interface
     * @interface
     */
    interface ProductType {
        value: string | number
        level: ProductTypeLevel
    }

    /**
     * Product Offer Id Interface
     * @interface
     */
    interface ProductOfferId {
        value: string | number
    }

    /**
     * Listing Brand Interface
     * @interface
     */
    interface ListingBrand {
        value: string | number
    }

    /**
     * Listing Custom Attribute Interface
     * @interface
     */
    interface ListingCustomAttribute {
        index: ListingCustomAttributeIndex
        value: string | number
    }

    /**
     * Product Channel Interface
     * @interface
     */
    interface ProductChannel {
        channel: ProductChannelChannel
    }

    /**
     * Product Channel Exclusivity Interface
     * @interface
     */
    interface ProductChannelExclusivity {
        channel_exclusivity: ChannelExclusivity
    }

    /**
     * Product Condition Interface
     * @interface
     */
    interface ProductCondition {
        condition: ProductConditionCondition
    }

    /**
     * Enum for ProductTypeLevel
     * @readonly
     * @enum {string}
     */
    enum ProductTypeLevel {
        PRODUCT_TYPE_L1 = 'PRODUCT_TYPE_L1',
        PRODUCT_TYPE_L2 = 'PRODUCT_TYPE_L2',
        PRODUCT_TYPE_L3 = 'PRODUCT_TYPE_L3',
        PRODUCT_TYPE_L4 = 'PRODUCT_TYPE_L4',
        PRODUCT_TYPE_L5 = 'PRODUCT_TYPE_L5',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Enum for ListingCustomAttributeIndex
     * @readonly
     * @enum {string}
     */
    enum ListingCustomAttributeIndex {
        CUSTOM_ATTRIBUTE_0 = 'CUSTOM_ATTRIBUTE_0',
        CUSTOM_ATTRIBUTE_1 = 'CUSTOM_ATTRIBUTE_1',
        CUSTOM_ATTRIBUTE_2 = 'CUSTOM_ATTRIBUTE_2',
        CUSTOM_ATTRIBUTE_3 = 'CUSTOM_ATTRIBUTE_3',
        CUSTOM_ATTRIBUTE_4 = 'CUSTOM_ATTRIBUTE_4',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Enum for ProductChannelChannel
     * @readonly
     * @enum {string}
     */
    enum ProductChannelChannel {
        LOCAL = 'LOCAL',
        ONLINE = 'ONLINE',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Enum for ChannelExclusivity
     * @readonly
     * @enum {string}
     */
    enum ChannelExclusivity {
        LOCAL = 'MULTI_CHANNEL',
        ONLINE = 'SINGLE_CHANNEL',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Enum for ProductConditionCondition
     * @readonly
     * @enum {string}
     */
    enum ProductConditionCondition {
        NEW = 'NEW',
        REFURBISHED = 'REFURBISHED',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
        USED = 'USED',
    }
}
export = AdGroupCriterion
