const fs = require('fs')
const template = require('lodash.template')
const camelCase = require('lodash.camelcase')
const snakeCase = require('lodash.snakecase')
const endsWith = require('lodash.endswith')

var Promise = require('bluebird')
var execP = Promise.promisify(require('child_process').exec)

const service_template_file = fs.readFileSync(__dirname + '/template_service.hbs', 'utf-8')
const service_compiler = template(service_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const service_immutable_template_file = fs.readFileSync(
    __dirname + '/template_service_immutable.hbs',
    'utf-8'
)
const service_immutable_compiler = template(service_immutable_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const service_test_template_file = fs.readFileSync(
    __dirname + '/template_service_test.hbs',
    'utf-8'
)
const service_test_compiler = template(service_test_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const $RefParser = require('json-schema-ref-parser')

const raw_schema = require('./schema.json')

const references = raw_schema.schemas

var myResolver = {
    order: 1,

    canRead: /Google/,

    read: function(file) {
        const resource = file.url.split('/')[file.url.split('/').length - 1]
        return JSON.stringify(references[resource])
    },
}

let schema

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

function getResourceUrl(entity) {
    if (entity === 'ChangeStatus') {
        return camelCase(entity)
    }

    if (entity === 'BillingSetup') {
        return camelCase(entity)
    }

    if (entity === 'CustomerClientLink') {
        return camelCase(entity)
    }

    if (entity === 'customerManagerLink') {
        return camelCase(entity)
    }

    if (endsWith(entity, 'Criterion')) {
        return `${camelCase(entity.replace('Criterion', 'Criteria'))}`
    }

    if (endsWith(entity, 'Strategy')) {
        return `${camelCase(entity.replace('Strategy', 'Strategies'))}`
    }

    if (endsWith(entity, 'Category')) {
        return `${camelCase(entity.replace('Category', 'Categories'))}`
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

    if (entity === 'BillingSetup') {
        return 'MutateBillingSetupRequest'
    }

    if (entity === 'CustomerClientLink') {
        return 'MutateCustomerClientLinkRequest'
    }

    if (entity === 'CustomerManagerLink') {
        return 'MutateCustomerManagerLinkRequest'
    }

    if (entity.includes('AccountBudgetProposal')) {
        return `MutateAccountBudgetProposalRequest`
    }

    if (endsWith(entity, 'Criterion')) {
        return `Mutate${entity.replace('Criterion', 'Criteria')}Request`
    }

    if (endsWith(entity, 'Strategy')) {
        return `Mutate${entity.replace('Strategy', 'Strategies')}Request`
    }

    if (endsWith(entity, 'Category')) {
        return `Mutate${entity.replace('Category', 'Categories')}Request`
    }

    return `Mutate${entity}sRequest`
}

function getMutateMethod(entity) {
    if (entity === 'ChangeStatus') {
        return 'mutateChangeStatus'
    }

    if (entity === 'BillingSetup') {
        return 'mutateBillingSetup'
    }

    if (entity === 'CustomerClientLink') {
        return 'mutateCustomerClientLink'
    }

    if (entity === 'CustomerManagerLink') {
        return 'mutateCustomerManagerLink'
    }

    if (entity.includes('AccountBudgetProposal')) {
        return `mutateAccountBudgetProposal`
    }

    if (endsWith(entity, 'Criterion')) {
        return `mutate${entity.replace('Criterion', 'Criteria')}`
    }

    if (endsWith(entity, 'Strategy')) {
        return `mutate${camelCase(entity.replace('Strategy', 'Strategies'))}`
    }

    if (endsWith(entity, 'Category')) {
        return `utate${camelCase(entity.replace('Category', 'Categories'))}`
    }

    return `mutate${entity}s`
}

function getParam(entity) {
    if (entity === 'ChangeStatus') {
        return `change_status`
    }
    return `${snakeCase(entity)}s`
}

async function compileService(entity, schema) {
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

    let compiled_service

    function unroll(obj) {
        const new_obj = {}

        Object.keys(obj).forEach(key => {
            // console.log(key)
            const type = obj[key].type
            if (type === 'object') {
                new_obj[snakeCase(key)] = unroll(obj[key].properties)
            } else {
                new_obj[snakeCase(key)] = { type, descr: obj[key].description }
            }
        })

        return new_obj
    }

    function pretty(obj, level = 1) {
        let new_obj = `{`

        const tab = '    '

        Object.keys(obj).forEach(key => {
            const type = obj[key].enum
                ? obj[key].enum.join(' | ')
                : obj[key].format || obj[key].type
            if (type === 'object') {
                new_obj += `\n${tab.repeat(level)}${snakeCase(key)}: ${pretty(
                    obj[key].properties,
                    level + 1
                )}`
            } else {
                new_obj += `\n${tab.repeat(level)}${snakeCase(key)}: '${type}', // ${obj[
                    key
                ].description
                    .split('\n')
                    .join(' ')}`
            }
        })

        return `${new_obj}\n${tab.repeat(level - 1)}}${level === 1 ? '' : ','}`
    }

    console.log(pretty(schema.schemas[`GoogleAdsGoogleadsV1Resources__${entity}`].properties))

    if (schema.schemas[`GoogleAdsGoogleadsV1Services__${mutate_request}`]) {
        compiled_service = service_compiler({
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
            ENTITY_DOC: pretty(
                schema.schemas[`GoogleAdsGoogleadsV1Resources__${entity}`].properties
            ),
        })
    } else {
        compiled_service = service_immutable_compiler({
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
            ENTITY_DOC: pretty(
                schema.schemas[`GoogleAdsGoogleadsV1Resources__${entity}`].properties
            ),
        })
    }

    const file_path = `${__dirname}/../src/services/${ent}.ts`
    fs.writeFileSync(file_path, compiled_service)

    if (!entity.toLowerCase().includes('constant')) {
        // const compiled_service_test = service_test_compiler({
        //     RESOURCE_URL_NAME: resource_url_name,
        //     MUTATE_METHOD: mutate_method,
        //     MUTATE_REQUEST: mutate_request,
        //     OPERATION_REQUEST: operation_request,
        //     GET_METHOD: get_method,
        //     GET_REQUEST: get_request,
        //     RESOURCE: entity,
        //     TYPE: type,
        //     PARAM: getParam(entity),
        //     PARAM_S: snakeCase(entity), // Singular version of parameter name
        //     ENTITY: entity,
        //     CUSTOMER_METHOD: getCustomerMethodName(entity, resource_url_name),
        // })
        // fs.writeFileSync(`${__dirname}/../src/services/${ent}.test.ts`, compiled_service_test)
    }

    // const result = await execP(`prettier --write ${file_path}`)

    // console.log({ file_path })
}

;(async () => {
    schema = await $RefParser.dereference(__dirname + '/schema.json', {
        resolve: { gads: myResolver },
    })

    for (const entity of entities) {
        console.log(`Compiling ${entity} service template`)
        await compileService(entity, schema)
    }

    const result = await execP(`prettier --write ${__dirname}/../src/services/*.ts`)

    console.log('Finished compiling all services')
})()
