/* Services */
import CampaignService from './services/campaign'
import CampaignBudgetService from './services/campaign_budget'
import AdGroupService from './services/ad_group'
import AccountBudgetProposalService from './services/account_budget_proposal'
import AccountBudgetService from './services/account_budget'
import AdService from './services/ad'
import AdGroupAdLabelService from './services/ad_group_ad_label'
import AdGroupAdService from './services/ad_group_ad'
import AdGroupBidModifierService from './services/ad_group_bid_modifier'
import AdGroupCriterionLabelService from './services/ad_group_criterion_label'
import AdGroupCriterionService from './services/ad_group_criterion'
import AdGroupExtensionSettingService from './services/ad_group_extension_setting'
import AdGroupFeedService from './services/ad_group_feed'
import AdGroupLabelService from './services/ad_group_label'
// TODO: Missing protos
// import AdParameterService from './services/ad_parameter'
import AssetService from './services/asset'
import BiddingStrategyService from './services/bidding_strategy'
import BillingSetupService from './services/billing_setup'
import CampaignBidModifierService from './services/campaign_bid_modifier'
import CampaignCriterionService from './services/campaign_criterion'
import CampaignExtensionSettingService from './services/campaign_extension_setting'
import CampaignFeedService from './services/campaign_feed'
import CampaignLabelService from './services/campaign_label'
import CampaignSharedSetService from './services/campaign_shared_set'
import CarrierConstantService from './services/carrier_constant'
import ChangeStatusService from './services/change_status'
import ConversionActionService from './services/conversion_action'
import ConversionUploadService from './services/conversion_upload'
// import ConversionAdjustmentUploadService from './services/conversion_adjustment_upload'
import CustomInterestService from './services/custom_interest'
import CustomerClientLinkService from './services/customer_client_link'
import CustomerClientService from './services/customer_client'
import CustomerExtensionSettingService from './services/customer_extension_setting'
import CustomerFeedService from './services/customer_feed'
import CustomerLabelService from './services/customer_label'
import CustomerManagerLinkService from './services/customer_manager_link'
import CustomerNegativeCriterionService from './services/customer_negative_criterion'
import DomainCategoryService from './services/domain_category'
import ExtensionFeedItemService from './services/extension_feed_item'
import FeedItemService from './services/feed_item'
import FeedItemTargetService from './services/feed_item_target'
import FeedMappingService from './services/feed_mapping'
import FeedService from './services/feed'
import GeoTargetConstantService from './services/geo_target_constant'
import KeywordPlanAdGroupService from './services/keyword_plan_ad_group'
import KeywordPlanCampaignService from './services/keyword_plan_campaign'
// TODO: Missing protos
// import KeywordPlanIdeaService from './services/keyword_plan_idea'
import KeywordPlanKeywordService from './services/keyword_plan_keyword'
import KeywordPlanNegativeKeywordService from './services/keyword_plan_negative_keyword'
import KeywordPlanService from './services/keyword_plan'
import LabelService from './services/label'
import LanguageConstantService from './services/language_constant'
import MediaFileService from './services/media_file'
// TODO: Missing protos
// import MerchantCenterLinkService from './services/merchant_center_link'
import MobileAppCategoryConstantService from './services/mobile_app_category_constant'
import MobileDeviceConstantService from './services/mobile_device_constant'
import OperatingSystemVersionConstantService from './services/operating_system_version_constant'
// TODO: Missing protos
// import PaymentsAccountService from './services/payments_account'
import ProductBiddingCategoryConstantService from './services/product_bidding_category_constant'
import RecommendationService from './services/recommendation'
import RemarketingActionService from './services/remarketing_action'
import SharedCriterionService from './services/shared_criterion'
import SharedSetService from './services/shared_set'
import TopicConstantService from './services/topic_constant'
import UserInterestService from './services/user_interest'
import UserListService from './services/user_list'
import VideoService from './services/video'
import AdGroupSimulationService from './services/ad_group_simulation'
import AdGroupCriterionSimulationService from './services/ad_group_criterion_simulation'
import CampaignCriterionSimulationService from './services/campaign_criterion_simulation'

/* Customer */
import CustomerService, {
    ReportResponse,
    QueryResponse,
    ListResponse,
    GetResponse,
    UpdateResponse,
    MutateResourcesResponse,
} from './services/customer'

/* gRPC Client */
import GrpcClient from './grpc'

/* Utils */
import Bottleneck from 'bottleneck'
import { Customer } from 'google-ads-node/build/lib/resources'
import { ReportOptions, ServiceCreateOptions, PostReportHook, PreReportHook, MutateResourceOperation } from './types'

export interface CustomerInstance {
    /* Global customer methods */
    report: (options: ReportOptions) => ReportResponse
    query: (qry: string) => QueryResponse
    list: () => ListResponse
    get: (id: number | string) => GetResponse
    update: (customer: Customer, options?: ServiceCreateOptions) => UpdateResponse
    mutateResources: (
        operations: Array<MutateResourceOperation>,
        options?: ServiceCreateOptions
    ) => MutateResourcesResponse

    /* Services */
    campaigns: CampaignService
    campaignBudgets: CampaignBudgetService
    adGroups: AdGroupService
    accountBudgetProposals: AccountBudgetProposalService
    accountBudgets: AccountBudgetService
    ads: AdService
    adGroupAdLabels: AdGroupAdLabelService
    adGroupAds: AdGroupAdService
    adGroupBidModifiers: AdGroupBidModifierService
    adGroupCriterionLabels: AdGroupCriterionLabelService
    adGroupCriteria: AdGroupCriterionService
    adGroupExtensionSettings: AdGroupExtensionSettingService
    adGroupFeeds: AdGroupFeedService
    adGroupLabels: AdGroupLabelService
    assets: AssetService
    biddingStrategies: BiddingStrategyService
    billingSetups: BillingSetupService
    campaignBidModifiers: CampaignBidModifierService
    campaignCriteria: CampaignCriterionService
    campaignExtensionSettings: CampaignExtensionSettingService
    campaignFeeds: CampaignFeedService
    campaignLabels: CampaignLabelService
    campaignSharedSets: CampaignSharedSetService
    carrierConstants: CarrierConstantService
    changeStatus: ChangeStatusService
    conversionActions: ConversionActionService
    conversionUploads: ConversionUploadService
    // conversionAdjustmentUploads: ConversionAdjustmentUploadService
    customInterests: CustomInterestService
    customerClientLinks: CustomerClientLinkService
    customerClients: CustomerClientService
    customerExtensionSettings: CustomerExtensionSettingService
    customerFeeds: CustomerFeedService
    customerLabels: CustomerLabelService
    customerManagerLinks: CustomerManagerLinkService
    customerNegativeCriteria: CustomerNegativeCriterionService
    domainCategories: DomainCategoryService
    extensionFeedItems: ExtensionFeedItemService
    feedItems: FeedItemService
    feedItemTargets: FeedItemTargetService
    feedMappings: FeedMappingService
    feeds: FeedService
    geoTargetConstants: GeoTargetConstantService
    keywordPlanAdGroups: KeywordPlanAdGroupService
    keywordPlanCampaigns: KeywordPlanCampaignService
    keywordPlanKeywords: KeywordPlanKeywordService
    keywordPlanNegativeKeywords: KeywordPlanNegativeKeywordService
    keywordPlans: KeywordPlanService
    labels: LabelService
    languageConstants: LanguageConstantService
    mediaFiles: MediaFileService
    mobileAppCategoryConstants: MobileAppCategoryConstantService
    mobileDeviceConstants: MobileDeviceConstantService
    operatingSystemVersionConstants: OperatingSystemVersionConstantService
    productBiddingCategoryConstants: ProductBiddingCategoryConstantService
    recommendations: RecommendationService
    remarketingActions: RemarketingActionService
    sharedCriteria: SharedCriterionService
    sharedSets: SharedSetService
    topicConstants: TopicConstantService
    userInterests: UserInterestService
    userLists: UserListService
    videos: VideoService
    adGroupSimulations: AdGroupSimulationService
    adGroupCriterionSimulations: AdGroupCriterionSimulationService
    campaignCriterionSimulations: CampaignCriterionSimulationService
}

export default function Customer(
    cid: string,
    client: GrpcClient,
    throttler: Bottleneck,
    pre_report_hook: PreReportHook,
    post_report_hook: PostReportHook,
    prevent_mutations: boolean
): CustomerInstance {
    const cusService = new CustomerService(
        cid,
        client,
        throttler,
        'CustomerService',
        pre_report_hook,
        post_report_hook,
        prevent_mutations
    )

    return {
        /* Top level customer methods */
        report: options => cusService.report(options),
        query: qry => cusService.query(qry),
        list: () => cusService.list(),
        get: id => cusService.get(id),
        update: (customer, options) => cusService.update(customer, options),
        mutateResources: (operations, options) => cusService.mutateResources(operations, options),

        /* Services */
        campaigns: new CampaignService(cid, client, throttler, 'CampaignService', prevent_mutations),
        campaignBudgets: new CampaignBudgetService(cid, client, throttler, 'CampaignBudgetService', prevent_mutations),
        adGroups: new AdGroupService(cid, client, throttler, 'AdGroupService', prevent_mutations),
        accountBudgetProposals: new AccountBudgetProposalService(
            cid,
            client,
            throttler,
            'AccountBudgetProposalService',
            prevent_mutations
        ),
        accountBudgets: new AccountBudgetService(cid, client, throttler, 'AccountBudgetService', prevent_mutations),
        ads: new AdService(cid, client, throttler, 'AdService', prevent_mutations),
        adGroupAdLabels: new AdGroupAdLabelService(cid, client, throttler, 'AdGroupAdLabelService', prevent_mutations),
        adGroupAds: new AdGroupAdService(cid, client, throttler, 'AdGroupAdService', prevent_mutations),
        adGroupBidModifiers: new AdGroupBidModifierService(
            cid,
            client,
            throttler,
            'AdGroupBidModifierService',
            prevent_mutations
        ),
        adGroupCriterionLabels: new AdGroupCriterionLabelService(
            cid,
            client,
            throttler,
            'AdGroupCriterionLabelService',
            prevent_mutations
        ),
        adGroupCriteria: new AdGroupCriterionService(
            cid,
            client,
            throttler,
            'AdGroupCriterionService',
            prevent_mutations
        ),
        adGroupExtensionSettings: new AdGroupExtensionSettingService(
            cid,
            client,
            throttler,
            'AdGroupExtensionSettingService',
            prevent_mutations
        ),
        adGroupFeeds: new AdGroupFeedService(cid, client, throttler, 'AdGroupFeedService', prevent_mutations),
        adGroupLabels: new AdGroupLabelService(cid, client, throttler, 'AdGroupLabelService', prevent_mutations),
        assets: new AssetService(cid, client, throttler, 'AssetService', prevent_mutations),
        biddingStrategies: new BiddingStrategyService(
            cid,
            client,
            throttler,
            'BiddingStrategyService',
            prevent_mutations
        ),
        billingSetups: new BillingSetupService(cid, client, throttler, 'BillingSetupService', prevent_mutations),
        campaignBidModifiers: new CampaignBidModifierService(
            cid,
            client,
            throttler,
            'CampaignBidModifierService',
            prevent_mutations
        ),
        campaignCriteria: new CampaignCriterionService(
            cid,
            client,
            throttler,
            'CampaignCriterionService',
            prevent_mutations
        ),
        campaignExtensionSettings: new CampaignExtensionSettingService(
            cid,
            client,
            throttler,
            'CampaignExtensionSettingService',
            prevent_mutations
        ),
        campaignFeeds: new CampaignFeedService(cid, client, throttler, 'CampaignFeedService', prevent_mutations),
        campaignLabels: new CampaignLabelService(cid, client, throttler, 'CampaignLabelService', prevent_mutations),
        campaignSharedSets: new CampaignSharedSetService(
            cid,
            client,
            throttler,
            'CampaignSharedSetService',
            prevent_mutations
        ),
        carrierConstants: new CarrierConstantService(
            cid,
            client,
            throttler,
            'CarrierConstantService',
            prevent_mutations
        ),
        changeStatus: new ChangeStatusService(cid, client, throttler, 'ChangeStatusService', prevent_mutations),
        conversionActions: new ConversionActionService(
            cid,
            client,
            throttler,
            'ConversionActionService',
            prevent_mutations
        ),
        conversionUploads: new ConversionUploadService(
            cid,
            client,
            throttler,
            'ConversionUploadService',
            prevent_mutations
        ),
        // conversionAdjustmentUploads: new ConversionAdjustmentUploadService(
        //     cid,
        //     client,
        //     throttler,
        //     'ConversionAdjustmentUploadService'
        // ),
        customInterests: new CustomInterestService(cid, client, throttler, 'CustomInterestService', prevent_mutations),
        customerClientLinks: new CustomerClientLinkService(
            cid,
            client,
            throttler,
            'CustomerClientLinkService',
            prevent_mutations
        ),
        customerClients: new CustomerClientService(cid, client, throttler, 'CustomerClientService', prevent_mutations),
        customerExtensionSettings: new CustomerExtensionSettingService(
            cid,
            client,
            throttler,
            'CustomerExtensionSettingService',
            prevent_mutations
        ),
        customerFeeds: new CustomerFeedService(cid, client, throttler, 'CustomerFeedService', prevent_mutations),
        customerLabels: new CustomerLabelService(cid, client, throttler, 'CustomerLabelService', prevent_mutations),
        customerManagerLinks: new CustomerManagerLinkService(
            cid,
            client,
            throttler,
            'CustomerManagerLinkService',
            prevent_mutations
        ),
        customerNegativeCriteria: new CustomerNegativeCriterionService(
            cid,
            client,
            throttler,
            'CustomerNegativeCriterionService',
            prevent_mutations
        ),
        domainCategories: new DomainCategoryService(cid, client, throttler, 'DomainCategoryService', prevent_mutations),
        extensionFeedItems: new ExtensionFeedItemService(
            cid,
            client,
            throttler,
            'ExtensionFeedItemService',
            prevent_mutations
        ),
        feedItems: new FeedItemService(cid, client, throttler, 'FeedItemService', prevent_mutations),
        feedItemTargets: new FeedItemTargetService(cid, client, throttler, 'FeedItemTargetService', prevent_mutations),
        feedMappings: new FeedMappingService(cid, client, throttler, 'FeedMappingService', prevent_mutations),
        feeds: new FeedService(cid, client, throttler, 'FeedService', prevent_mutations),
        geoTargetConstants: new GeoTargetConstantService(
            cid,
            client,
            throttler,
            'GeoTargetConstantService',
            prevent_mutations
        ),
        keywordPlanAdGroups: new KeywordPlanAdGroupService(
            cid,
            client,
            throttler,
            'KeywordPlanAdGroupService',
            prevent_mutations
        ),
        keywordPlanCampaigns: new KeywordPlanCampaignService(
            cid,
            client,
            throttler,
            'KeywordPlanCampaignService',
            prevent_mutations
        ),
        // keywordPlanIdeas: new KeywordPlanIdeaService(cid, client, throttler, 'KeywordPlanIdeaService'),
        keywordPlanKeywords: new KeywordPlanKeywordService(
            cid,
            client,
            throttler,
            'KeywordPlanKeywordService',
            prevent_mutations
        ),
        keywordPlanNegativeKeywords: new KeywordPlanNegativeKeywordService(
            cid,
            client,
            throttler,
            'KeywordPlanNegativeKeywordService',
            prevent_mutations
        ),
        keywordPlans: new KeywordPlanService(cid, client, throttler, 'KeywordPlanService', prevent_mutations),
        labels: new LabelService(cid, client, throttler, 'LabelService', prevent_mutations),
        languageConstants: new LanguageConstantService(
            cid,
            client,
            throttler,
            'LanguageConstantService',
            prevent_mutations
        ),
        mediaFiles: new MediaFileService(cid, client, throttler, 'MediaFileService', prevent_mutations),
        // merchantCenterLinks: new MerchantCenterLinkService(cid, client, throttler, 'MerchantCenterLinkService'),
        mobileAppCategoryConstants: new MobileAppCategoryConstantService(
            cid,
            client,
            throttler,
            'MobileAppCategoryConstantService',
            prevent_mutations
        ),
        mobileDeviceConstants: new MobileDeviceConstantService(
            cid,
            client,
            throttler,
            'MobileDeviceConstantService',
            prevent_mutations
        ),
        operatingSystemVersionConstants: new OperatingSystemVersionConstantService(
            cid,
            client,
            throttler,
            'OperatingSystemVersionConstantService',
            prevent_mutations
        ),
        // paymentsAccounts: new PaymentsAccountService(cid, client, throttler, 'PaymentsAccountService'),
        productBiddingCategoryConstants: new ProductBiddingCategoryConstantService(
            cid,
            client,
            throttler,
            'ProductBiddingCategoryConstantService',
            prevent_mutations
        ),
        recommendations: new RecommendationService(cid, client, throttler, 'RecommendationService', prevent_mutations),
        remarketingActions: new RemarketingActionService(
            cid,
            client,
            throttler,
            'RemarketingActionService',
            prevent_mutations
        ),
        sharedCriteria: new SharedCriterionService(cid, client, throttler, 'SharedCriterionService', prevent_mutations),
        sharedSets: new SharedSetService(cid, client, throttler, 'SharedSetService', prevent_mutations),
        topicConstants: new TopicConstantService(cid, client, throttler, 'TopicConstantService', prevent_mutations),
        userInterests: new UserInterestService(cid, client, throttler, 'UserInterestService', prevent_mutations),
        userLists: new UserListService(cid, client, throttler, 'UserListService', prevent_mutations),
        videos: new VideoService(cid, client, throttler, 'VideoService', prevent_mutations),
        adGroupSimulations: new AdGroupSimulationService(
            cid,
            client,
            throttler,
            'AdGroupSimulationService',
            prevent_mutations
        ),
        adGroupCriterionSimulations: new AdGroupCriterionSimulationService(
            cid,
            client,
            throttler,
            'AdGroupCriterionSimulationService',
            prevent_mutations
        ),
        campaignCriterionSimulations: new CampaignCriterionSimulationService(
            cid,
            client,
            throttler,
            'CampaignCriterionSimulationService',
            prevent_mutations
        ),
    }
}
