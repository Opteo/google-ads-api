const fs = require('fs')
const template = require('lodash.template')
const camelCase = require('lodash.camelcase')
const snakeCase = require('lodash.snakecase')

const service_template_file = fs.readFileSync(__dirname + '/template_service.hbs', 'utf-8')
const service_compiler = template(service_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const service_test_template_file = fs.readFileSync(__dirname + '/template_service_test.hbs', 'utf-8')
const service_test_compiler = template(service_test_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const entities = [
    'AccountBudgetProposal',
    'AccountBudget',
    'AdGroupAdLabel',
    'AdGroupAd',
    'AdGroupAudienceView',
    'AdGroupBidModifier',
    'AdGroupCriterionLabel',
    'AdGroupCriterion',
    'AdGroupExtensionSetting',
    'AdGroupFeed',
    'AdGroupLabel',
    'AdGroup',
    // 'AdParameter', // Missing protos
    'AdScheduleView',
    'AgeRangeView',
    'BiddingStrategy',
    'BillingSetup',
    'CampaignAudienceView',
    'CampaignBidModifier',
    'CampaignBudget',
    'CampaignCriterion',
    'CampaignExtensionSetting',
    'CampaignFeed',
    'CampaignLabel',
    'Campaign',
    'CampaignSharedSet',
    'CarrierConstant',
    'ChangeStatus',
    'ClickView',
    'ConversionAction',
    // 'ConversionUpload', // Missing protos
    'CustomInterest',
    'CustomerClientLink',
    'CustomerClient',
    'CustomerExtensionSetting',
    'CustomerFeed',
    'CustomerLabel',
    'CustomerManagerLink',
    'CustomerNegativeCriterion',
    //   'Customer', // Not required
    'DisplayKeywordView',
    'DomainCategory',
    'DynamicSearchAdsSearchTermView',
    'ExtensionFeedItem',
    'FeedItem',
    'FeedItemTarget',
    'FeedMapping',
    'FeedPlaceholderView',
    'Feed',
    'GenderView',
    'GeoTargetConstant',
    'GeographicView',
    // 'GoogleAdsField', // Not required
    // 'GoogleAds', // Not required
    'GroupPlacementView',
    'HotelGroupView',
    'HotelPerformanceView',
    'KeywordPlanAdGroup',
    'KeywordPlanCampaign',
    // 'KeywordPlanIdea', // Missing protos
    'KeywordPlanKeyword',
    'KeywordPlanNegativeKeyword',
    'KeywordPlan',
    'KeywordView',
    'Label',
    'LanguageConstant',
    'LocationView',
    'ManagedPlacementView',
    'MediaFile',
    // 'MerchantCenterLink', // Missing protos
    'MobileAppCategoryConstant',
    'MobileDeviceConstant',
    // 'MutateJob', // Missing protos
    'OperatingSystemVersionConstant',
    'ParentalStatusView',
    // 'PaymentsAccount', // Missing protos
    'ProductBiddingCategoryConstant',
    'ProductGroupView',
    'Recommendation',
    'RemarketingAction',
    'SearchTermView',
    'SharedCriterion',
    'ShoppingPerformanceView',
    'SharedSet',
    'TopicConstant',
    'TopicView',
    'UserInterest',
    'UserList',
    'Video',
]

for (const entity of entities) {
    console.log(`Compiling ${entity} service template`)
    compileService(entity)
}
console.log('Finished compiling all services')

function getResourceUrl(entity) {
    if (entity === 'ChangeStatus') {
        return camelCase(entity)
    }
    if (entity === 'AdGroupCriterion') {
        return `adGroupCriteria`
    }
    if (entity === 'SharedCriterion') {
        return `sharedCriteria`
    }
    if (entity === 'CampaignCriterion') {
        return `campaignCriteria`
    }
    return `${camelCase(entity)}s`
}

function getCustomerMethodName(entity, resource_url) {
    if (['AdGroupCriterion', 'SharedCriterion', 'CampaignCriterion'].includes(entity)) {
        return camelCase(entity)
    }
    return resource_url
}

function getMutateRequest(entity) {
    if (entity === 'ChangeStatus') {
        return 'MutateChangeStatusRequest'
    }
    return `Mutate${entity}sRequest`
}

function getMutateMethod(entity) {
    if (entity === 'ChangeStatus') {
        return 'mutateChangeStatus'
    }
    return `mutate${entity}s`
}

function getParam(entity) {
    if (entity === 'ChangeStatus') {
        return `change_status`
    }
    return `${snakeCase(entity)}s`
}

function compileService(entity) {
    if (entity === 'ClickView') return
    const resource_url_name = getResourceUrl(entity)

    const get_request = `Get${entity}Request`
    const get_method = `get${entity}`

    const operation_request = `${entity}Operation`
    const mutate_request = getMutateRequest(entity)
    const mutate_method = getMutateMethod(entity)

    const resource = entity
    const type = entity

    const param = snakeCase(entity)
    const ent = snakeCase(entity)

    const compiled_service = service_compiler({
        RESOURCE_URL_NAME: resource_url_name,
        MUTATE_METHOD: mutate_method,
        MUTATE_REQUEST: mutate_request,
        OPERATION_REQUEST: operation_request,
        GET_METHOD: get_method,
        GET_REQUEST: get_request,
        RESOURCE: entity,
        TYPE: type,
        PARAM: param,
        ENTITY: ent,
    })

    fs.writeFileSync(`${__dirname}/../src/services/${ent}.ts`, compiled_service)

    if (!entity.toLowerCase().includes('constant')) {
        const compiled_service_test = service_test_compiler({
            RESOURCE_URL_NAME: resource_url_name,
            MUTATE_METHOD: mutate_method,
            MUTATE_REQUEST: mutate_request,
            OPERATION_REQUEST: operation_request,
            GET_METHOD: get_method,
            GET_REQUEST: get_request,
            RESOURCE: entity,
            TYPE: type,
            PARAM: getParam(entity),
            PARAM_S: snakeCase(entity), // Singular version of parameter name
            ENTITY: entity,
            CUSTOMER_METHOD: getCustomerMethodName(entity, resource_url_name),
        })
        fs.writeFileSync(`${__dirname}/../src/services/${ent}.test.ts`, compiled_service_test)
    }
}
