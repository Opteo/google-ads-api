import * as fields from 'google-ads-node/build/lib/fields'

export type Attributes =
    | fields.AccountBudgetFields
    | fields.AccountBudgetProposalFields
    | fields.AdGroupFields
    | fields.AdGroupAdFields
    | fields.AdGroupAdLabelFields
    | fields.AdGroupAudienceViewFields
    | fields.AdGroupBidModifierFields
    | fields.AdGroupCriterionFields
    | fields.AdGroupCriterionLabelFields
    | fields.AdGroupCriterionSimulationFields
    | fields.AdGroupExtensionSettingFields
    | fields.AdGroupFeedFields
    | fields.AdGroupLabelFields
    | fields.AdGroupSimulationFields
    | fields.AdScheduleViewFields
    | fields.AgeRangeViewFields
    | fields.AssetFields
    | fields.BiddingStrategyFields
    | fields.BillingSetupFields
    | fields.CampaignFields
    | fields.CampaignAudienceViewFields
    | fields.CampaignBidModifierFields
    | fields.CampaignBudgetFields
    | fields.CampaignCriterionFields
    | fields.CampaignCriterionSimulationFields
    | fields.CampaignExtensionSettingFields
    | fields.CampaignFeedFields
    | fields.CampaignLabelFields
    | fields.CampaignSharedSetFields
    | fields.CarrierConstantFields
    | fields.ChangeStatusFields
    | fields.ClickViewFields
    | fields.ConversionActionFields
    | fields.CustomInterestFields
    | fields.CustomerFields
    | fields.CustomerClientFields
    | fields.CustomerClientLinkFields
    | fields.CustomerExtensionSettingFields
    | fields.CustomerFeedFields
    | fields.CustomerLabelFields
    | fields.CustomerManagerLinkFields
    | fields.CustomerNegativeCriterionFields
    | fields.DetailPlacementViewFields
    | fields.DisplayKeywordViewFields
    | fields.DomainCategoryFields
    | fields.DynamicSearchAdsSearchTermViewFields
    | fields.ExtensionFeedItemFields
    | fields.FeedFields
    | fields.FeedItemFields
    | fields.FeedItemTargetFields
    | fields.FeedMappingFields
    | fields.FeedPlaceholderViewFields
    | fields.GenderViewFields
    | fields.GeoTargetConstantFields
    | fields.GeographicViewFields
    | fields.GroupPlacementViewFields
    | fields.HotelGroupViewFields
    | fields.HotelPerformanceViewFields
    | fields.KeywordPlanFields
    | fields.KeywordPlanAdGroupFields
    | fields.KeywordPlanCampaignFields
    | fields.KeywordPlanKeywordFields
    | fields.KeywordPlanNegativeKeywordFields
    | fields.KeywordViewFields
    | fields.LabelFields
    | fields.LanguageConstantFields
    | fields.LocationViewFields
    | fields.ManagedPlacementViewFields
    | fields.MediaFileFields
    | fields.MobileAppCategoryConstantFields
    | fields.MobileDeviceConstantFields
    | fields.OperatingSystemVersionConstantFields
    | fields.ParentalStatusViewFields
    | fields.ProductBiddingCategoryConstantFields
    | fields.ProductGroupViewFields
    | fields.RecommendationFields
    | fields.RemarketingActionFields
    | fields.SearchTermViewFields
    | fields.SharedCriterionFields
    | fields.SharedSetFields
    | fields.ShoppingPerformanceViewFields
    | fields.TopicConstantFields
    | fields.TopicViewFields
    | fields.UserInterestFields
    | fields.UserListFields
    | fields.VideoFields

export type Metrics =
    | fields.AdGroupMetrics
    | fields.AdGroupAdMetrics
    | fields.AdGroupAudienceViewMetrics
    | fields.AdScheduleViewMetrics
    | fields.AgeRangeViewMetrics
    | fields.AssetMetrics
    | fields.BiddingStrategyMetrics
    | fields.CampaignMetrics
    | fields.CampaignAudienceViewMetrics
    | fields.CampaignBidModifierMetrics
    | fields.CampaignBudgetMetrics
    | fields.ClickViewMetrics
    | fields.CustomerMetrics
    | fields.DetailPlacementViewMetrics
    | fields.DisplayKeywordViewMetrics
    | fields.DynamicSearchAdsSearchTermViewMetrics
    | fields.ExtensionFeedItemMetrics
    | fields.FeedItemMetrics
    | fields.FeedPlaceholderViewMetrics
    | fields.GenderViewMetrics
    | fields.GeographicViewMetrics
    | fields.GroupPlacementViewMetrics
    | fields.HotelGroupViewMetrics
    | fields.HotelPerformanceViewMetrics
    | fields.KeywordViewMetrics
    | fields.LocationViewMetrics
    | fields.ManagedPlacementViewMetrics
    | fields.ParentalStatusViewMetrics
    | fields.ProductGroupViewMetrics
    | fields.SearchTermViewMetrics
    | fields.ShoppingPerformanceViewMetrics
    | fields.TopicViewMetrics
    | fields.VideoMetrics

export type Segments =
    | fields.AdGroupSegments
    | fields.AdGroupAdSegments
    | fields.AdGroupAudienceViewSegments
    | fields.AdScheduleViewSegments
    | fields.AgeRangeViewSegments
    | fields.AssetSegments
    | fields.BiddingStrategySegments
    | fields.CampaignSegments
    | fields.CampaignAudienceViewSegments
    | fields.CampaignBudgetSegments
    | fields.ClickViewSegments
    | fields.CustomerSegments
    | fields.DetailPlacementViewSegments
    | fields.DisplayKeywordViewSegments
    | fields.DynamicSearchAdsSearchTermViewSegments
    | fields.ExtensionFeedItemSegments
    | fields.FeedItemSegments
    | fields.FeedPlaceholderViewSegments
    | fields.GenderViewSegments
    | fields.GeographicViewSegments
    | fields.GroupPlacementViewSegments
    | fields.HotelGroupViewSegments
    | fields.HotelPerformanceViewSegments
    | fields.KeywordViewSegments
    | fields.LocationViewSegments
    | fields.ManagedPlacementViewSegments
    | fields.ParentalStatusViewSegments
    | fields.ProductGroupViewSegments
    | fields.SearchTermViewSegments
    | fields.ShoppingPerformanceViewSegments
    | fields.TopicViewSegments
    | fields.VideoSegments

export interface BaseReportOptions {
    entity: fields.ResourceName
    attributes?: Attributes
    metrics?: Metrics
    segments?: Segments
    constraints?: Array<string | object | Constraint> | object
    date_constant?: DateConstant
    from_date?: string // ISO 8601(YYYY-MM-DD) format
    to_date?: string // ISO 8601(YYYY-MM-DD) format
    limit?: number
    order_by?: string | Array<string>
    sort_order?: string
}

export interface ReportOptions extends BaseReportOptions {
    page_size?: number
}

export interface ReportStreamOptions extends BaseReportOptions {}

/**
 * String union for Date Constant
 * @readonly
 * @union {string}
 */
export type DateConstant =
    | 'LAST_7_DAYS'
    | 'LAST_14_DAYS'
    | 'LAST_30_DAYS'
    | 'LAST_BUSINESS_WEEK'
    | 'LAST_MONTH'
    | 'THIS_MONTH'
    | 'LAST_WEEK_MON_SUN'
    | 'LAST_WEEK_SUN_SAT'
    | 'THIS_WEEK_MON_TODAY'
    | 'THIS_WEEK_SUN_TODAY'
    | 'YESTERDAY'
    | 'TODAY'

/**
 *  Constraint value
 * @interface
 */
export type ConstraintValue = string | number | boolean | Array<string | number | boolean>

/**
 *  Constraint object with full parameters
 * @interface
 */
export interface Constraint {
    key: string
    op:
        | '='
        | '!='
        | '>'
        | '>='
        | '<'
        | '<='
        | 'IN'
        | 'NOT IN'
        | 'LIKE'
        | 'NOT LIKE'
        | 'CONTAINS ANY'
        | 'CONTAINS ALL'
        | 'CONTAINS NONE'
        | 'IS NULL'
        | 'IS NOT NULL'
        | 'DURING'
        | 'BETWEEN'
    val: ConstraintValue
}

/**
 * Service List Method Options
 * @interface
 * @description Options available when listing entities via a service
 */
export interface ServiceListOptions {
    limit?: number
    order_by?: string
    constraints?: Array<string | object | Constraint> | object
}

/**
 * Service Create Method Options
 * @interface
 * @description Options available when creating resources via a service
 */
export interface ServiceCreateOptions {
    validate_only?: boolean
    partial_failure?: boolean
}

export interface MutateResourceOperation {
    _resource: string
    _operation?: 'create' | 'update' | 'delete'
    // Allow any resource field
    [key: string]: any
}

interface PreQueryHookArgs {
    query: string
    cid: string
}

interface PostQueryHookArgs {
    query: string
    cid: string
    result: any
    report_config: any
}

export type PreReportHook = (options: PreQueryHookArgs) => void | Promise<any>
export type PostReportHook = (options: PostQueryHookArgs) => void
