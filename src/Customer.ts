/* Services */
import CampaignService from './services/campaign'
import CampaignBudgetService from './services/campaign_budget'
import AdGroupService from './services/ad_group'
import AccountBudgetProposalService from './services/account_budget_proposal'
import AccountBudgetService from './services/account_budget'
import AdGroupAdLabelService from './services/ad_group_ad_label'
import AdGroupAdService from './services/ad_group_ad'
import AdGroupAudienceViewService from './services/ad_group_audience_view'
import AdGroupBidModifierService from './services/ad_group_bid_modifier'
import AdGroupCriterionLabelService from './services/ad_group_criterion_label'
import AdGroupCriterionService from './services/ad_group_criterion'
import AdGroupExtensionSettingService from './services/ad_group_extension_setting'
import AdGroupFeedService from './services/ad_group_feed'
import AdGroupLabelService from './services/ad_group_label'
// TODO: Missing protos
// import AdParameterService from './services/ad_parameter'
import AdScheduleViewService from './services/ad_schedule_view'
import AgeRangeViewService from './services/age_range_view'
import BiddingStrategyService from './services/bidding_strategy'
import BillingSetupService from './services/billing_setup'
import CampaignAudienceViewService from './services/campaign_audience_view'
import CampaignBidModifierService from './services/campaign_bid_modifier'
import CampaignCriterionService from './services/campaign_criterion'
import CampaignExtensionSettingService from './services/campaign_extension_setting'
import CampaignFeedService from './services/campaign_feed'
import CampaignLabelService from './services/campaign_label'
import CampaignSharedSetService from './services/campaign_shared_set'
import CarrierConstantService from './services/carrier_constant'
import ChangeStatusService from './services/change_status'
import ClickViewService from './services/click_view'
import ConversionActionService from './services/conversion_action'
// TODO: Missing protos
// import ConversionUploadService from './services/conversion_upload'
import CustomInterestService from './services/custom_interest'
import CustomerClientLinkService from './services/customer_client_link'
import CustomerClientService from './services/customer_client'
import CustomerExtensionSettingService from './services/customer_extension_setting'
import CustomerFeedService from './services/customer_feed'
import CustomerLabelService from './services/customer_label'
import CustomerManagerLinkService from './services/customer_manager_link'
import CustomerNegativeCriterionService from './services/customer_negative_criterion'
import DisplayKeywordViewService from './services/display_keyword_view'
import DomainCategoryService from './services/domain_category'
import DynamicSearchAdsSearchTermViewService from './services/dynamic_search_ads_search_term_view'
import ExtensionFeedItemService from './services/extension_feed_item'
import FeedItemService from './services/feed_item'
import FeedItemTargetService from './services/feed_item_target'
import FeedMappingService from './services/feed_mapping'
import FeedPlaceholderViewService from './services/feed_placeholder_view'
import FeedService from './services/feed'
import GenderViewService from './services/gender_view'
import GeoTargetConstantService from './services/geo_target_constant'
import GeographicViewService from './services/geographic_view'
import GroupPlacementViewService from './services/group_placement_view'
import HotelGroupViewService from './services/hotel_group_view'
import HotelPerformanceViewService from './services/hotel_performance_view'
import KeywordPlanAdGroupService from './services/keyword_plan_ad_group'
import KeywordPlanCampaignService from './services/keyword_plan_campaign'
// TODO: Missing protos
// import KeywordPlanIdeaService from './services/keyword_plan_idea'
import KeywordPlanKeywordService from './services/keyword_plan_keyword'
import KeywordPlanNegativeKeywordService from './services/keyword_plan_negative_keyword'
import KeywordPlanService from './services/keyword_plan'
import KeywordViewService from './services/keyword_view'
import LabelService from './services/label'
import LanguageConstantService from './services/language_constant'
import LocationViewService from './services/location_view'
import ManagedPlacementViewService from './services/managed_placement_view'
import MediaFileService from './services/media_file'
// TODO: Missing protos
// import MerchantCenterLinkService from './services/merchant_center_link'
import MobileAppCategoryConstantService from './services/mobile_app_category_constant'
import MobileDeviceConstantService from './services/mobile_device_constant'
import OperatingSystemVersionConstantService from './services/operating_system_version_constant'
import ParentalStatusViewService from './services/parental_status_view'
// TODO: Missing protos
// import PaymentsAccountService from './services/payments_account'
import ProductBiddingCategoryConstantService from './services/product_bidding_category_constant'
import ProductGroupViewService from './services/product_group_view'
import RecommendationService from './services/recommendation'
import RemarketingActionService from './services/remarketing_action'
import SearchTermViewService from './services/search_term_view'
import SharedCriterionService from './services/shared_criterion'
import ShoppingPerformanceViewService from './services/shopping_performance_view'
import SharedSetService from './services/shared_set'
import TopicConstantService from './services/topic_constant'
import TopicViewService from './services/topic_view'
import UserInterestService from './services/user_interest'
import UserListService from './services/user_list'
import VideoService from './services/video'

/* Customer */
import CustomerService from './services/customer'

/* gRPC Client */
import GrpcClient from './grpc'

/* Utils */
import Bottleneck from 'bottleneck'
import { Customer } from 'google-ads-node/build/lib/resources'
import { ReportOptions, ServiceCreateOptions } from './types'

export default function Customer(cid: string, client: GrpcClient, throttler: Bottleneck) {
    const cusService = new CustomerService(cid, client, throttler, 'CustomerService')

    return {
        /* Top level customer methods */
        report: (options: ReportOptions) => cusService.report(options),
        query: (qry: string) => cusService.query(qry),
        list: () => cusService.list(),
        get: (id: number | string) => cusService.get(id),
        update: (customer: Customer, options?: ServiceCreateOptions) => cusService.update(customer, options),

        /* Services */
        campaigns: new CampaignService(cid, client, throttler, 'CampaignService'),
        campaignBudgets: new CampaignBudgetService(cid, client, throttler, 'CampaignBudgetService'),
        adGroups: new AdGroupService(cid, client, throttler, 'AdGroupService'),
        accountBudgetProposals: new AccountBudgetProposalService(
            cid,
            client,
            throttler,
            'AccountBudgetProposalService'
        ),
        accountBudgets: new AccountBudgetService(cid, client, throttler, 'AccountBudgetService'),
        adGroupAdLabels: new AdGroupAdLabelService(cid, client, throttler, 'AdGroupAdLabelService'),
        adGroupAds: new AdGroupAdService(cid, client, throttler, 'AdGroupAdService'),
        adGroupAudienceViews: new AdGroupAudienceViewService(cid, client, throttler, 'AdGroupAudienceViewService'),
        adGroupBidModifiers: new AdGroupBidModifierService(cid, client, throttler, 'AdGroupBidModifierService'),
        adGroupCriterionLabels: new AdGroupCriterionLabelService(
            cid,
            client,
            throttler,
            'AdGroupCriterionLabelService'
        ),
        adGroupCriterion: new AdGroupCriterionService(cid, client, throttler, 'AdGroupCriterionService'),
        adGroupExtensionSettings: new AdGroupExtensionSettingService(
            cid,
            client,
            throttler,
            'AdGroupExtensionSettingService'
        ),
        adGroupFeeds: new AdGroupFeedService(cid, client, throttler, 'AdGroupFeedService'),
        adGroupLabels: new AdGroupLabelService(cid, client, throttler, 'AdGroupLabelService'),
        adScheduleViews: new AdScheduleViewService(cid, client, throttler, 'AdScheduleViewService'),
        ageRangeViews: new AgeRangeViewService(cid, client, throttler, 'AgeRangeViewService'),
        biddingStrategys: new BiddingStrategyService(cid, client, throttler, 'BiddingStrategyService'),
        billingSetups: new BillingSetupService(cid, client, throttler, 'BillingSetupService'),
        campaignAudienceViews: new CampaignAudienceViewService(cid, client, throttler, 'CampaignAudienceViewService'),
        campaignBidModifiers: new CampaignBidModifierService(cid, client, throttler, 'CampaignBidModifierService'),
        campaignCriterion: new CampaignCriterionService(cid, client, throttler, 'CampaignCriterionService'),
        campaignExtensionSettings: new CampaignExtensionSettingService(
            cid,
            client,
            throttler,
            'CampaignExtensionSettingService'
        ),
        campaignFeeds: new CampaignFeedService(cid, client, throttler, 'CampaignFeedService'),
        campaignLabels: new CampaignLabelService(cid, client, throttler, 'CampaignLabelService'),
        campaignSharedSets: new CampaignSharedSetService(cid, client, throttler, 'CampaignSharedSetService'),
        carrierConstants: new CarrierConstantService(cid, client, throttler, 'CarrierConstantService'),
        changeStatus: new ChangeStatusService(cid, client, throttler, 'ChangeStatusService'),
        clickViews: new ClickViewService(cid, client, throttler, 'ClickViewService'),
        conversionActions: new ConversionActionService(cid, client, throttler, 'ConversionActionService'),
        // conversionUploads: new ConversionUploadService(cid, client, throttler, 'ConversionUploadService'),
        customInterests: new CustomInterestService(cid, client, throttler, 'CustomInterestService'),
        customerClientLinks: new CustomerClientLinkService(cid, client, throttler, 'CustomerClientLinkService'),
        customerClients: new CustomerClientService(cid, client, throttler, 'CustomerClientService'),
        customerExtensionSettings: new CustomerExtensionSettingService(
            cid,
            client,
            throttler,
            'CustomerExtensionSettingService'
        ),
        customerFeeds: new CustomerFeedService(cid, client, throttler, 'CustomerFeedService'),
        customerLabels: new CustomerLabelService(cid, client, throttler, 'CustomerLabelService'),
        customerManagerLinks: new CustomerManagerLinkService(cid, client, throttler, 'CustomerManagerLinkService'),
        customerNegativeCriterions: new CustomerNegativeCriterionService(
            cid,
            client,
            throttler,
            'CustomerNegativeCriterionService'
        ),
        displayKeywordViews: new DisplayKeywordViewService(cid, client, throttler, 'DisplayKeywordViewService'),
        domainCategorys: new DomainCategoryService(cid, client, throttler, 'DomainCategoryService'),
        dynamicSearchAdsSearchTermViews: new DynamicSearchAdsSearchTermViewService(
            cid,
            client,
            throttler,
            'DynamicSearchAdsSearchTermViewService'
        ),
        extensionFeedItems: new ExtensionFeedItemService(cid, client, throttler, 'ExtensionFeedItemService'),
        feedItems: new FeedItemService(cid, client, throttler, 'FeedItemService'),
        feedItemTargets: new FeedItemTargetService(cid, client, throttler, 'FeedItemTargetService'),
        feedMappings: new FeedMappingService(cid, client, throttler, 'FeedMappingService'),
        feedPlaceholderViews: new FeedPlaceholderViewService(cid, client, throttler, 'FeedPlaceholderViewService'),
        feeds: new FeedService(cid, client, throttler, 'FeedService'),
        genderViews: new GenderViewService(cid, client, throttler, 'GenderViewService'),
        geoTargetConstants: new GeoTargetConstantService(cid, client, throttler, 'GeoTargetConstantService'),
        geographicViews: new GeographicViewService(cid, client, throttler, 'GeographicViewService'),
        groupPlacementViews: new GroupPlacementViewService(cid, client, throttler, 'GroupPlacementViewService'),
        hotelGroupViews: new HotelGroupViewService(cid, client, throttler, 'HotelGroupViewService'),
        hotelPerformanceViews: new HotelPerformanceViewService(cid, client, throttler, 'HotelPerformanceViewService'),
        keywordPlanAdGroups: new KeywordPlanAdGroupService(cid, client, throttler, 'KeywordPlanAdGroupService'),
        keywordPlanCampaigns: new KeywordPlanCampaignService(cid, client, throttler, 'KeywordPlanCampaignService'),
        // keywordPlanIdeas: new KeywordPlanIdeaService(cid, client, throttler, 'KeywordPlanIdeaService'),
        keywordPlanKeywords: new KeywordPlanKeywordService(cid, client, throttler, 'KeywordPlanKeywordService'),
        keywordPlanNegativeKeywords: new KeywordPlanNegativeKeywordService(
            cid,
            client,
            throttler,
            'KeywordPlanNegativeKeywordService'
        ),
        keywordPlans: new KeywordPlanService(cid, client, throttler, 'KeywordPlanService'),
        keywordViews: new KeywordViewService(cid, client, throttler, 'KeywordViewService'),
        labels: new LabelService(cid, client, throttler, 'LabelService'),
        languageConstants: new LanguageConstantService(cid, client, throttler, 'LanguageConstantService'),
        locationViews: new LocationViewService(cid, client, throttler, 'LocationViewService'),
        managedPlacementViews: new ManagedPlacementViewService(cid, client, throttler, 'ManagedPlacementViewService'),
        mediaFiles: new MediaFileService(cid, client, throttler, 'MediaFileService'),
        // merchantCenterLinks: new MerchantCenterLinkService(cid, client, throttler, 'MerchantCenterLinkService'),
        mobileAppCategoryConstants: new MobileAppCategoryConstantService(
            cid,
            client,
            throttler,
            'MobileAppCategoryConstantService'
        ),
        mobileDeviceConstants: new MobileDeviceConstantService(cid, client, throttler, 'MobileDeviceConstantService'),
        operatingSystemVersionConstants: new OperatingSystemVersionConstantService(
            cid,
            client,
            throttler,
            'OperatingSystemVersionConstantService'
        ),
        parentalStatusViews: new ParentalStatusViewService(cid, client, throttler, 'ParentalStatusViewService'),
        // paymentsAccounts: new PaymentsAccountService(cid, client, throttler, 'PaymentsAccountService'),
        productBiddingCategoryConstants: new ProductBiddingCategoryConstantService(
            cid,
            client,
            throttler,
            'ProductBiddingCategoryConstantService'
        ),
        productGroupViews: new ProductGroupViewService(cid, client, throttler, 'ProductGroupViewService'),
        recommendations: new RecommendationService(cid, client, throttler, 'RecommendationService'),
        remarketingActions: new RemarketingActionService(cid, client, throttler, 'RemarketingActionService'),
        searchTermViews: new SearchTermViewService(cid, client, throttler, 'SearchTermViewService'),
        sharedCriterion: new SharedCriterionService(cid, client, throttler, 'SharedCriterionService'),
        shoppingPerformanceViews: new ShoppingPerformanceViewService(
            cid,
            client,
            throttler,
            'ShoppingPerformanceViewService'
        ),
        sharedSets: new SharedSetService(cid, client, throttler, 'SharedSetService'),
        topicConstants: new TopicConstantService(cid, client, throttler, 'TopicConstantService'),
        topicViews: new TopicViewService(cid, client, throttler, 'TopicViewService'),
        userInterests: new UserInterestService(cid, client, throttler, 'UserInterestService'),
        userLists: new UserListService(cid, client, throttler, 'UserListService'),
        videos: new VideoService(cid, client, throttler, 'VideoService'),
    }
}
