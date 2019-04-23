const fs = require('fs-extra')
const template = require('lodash.template')
const camelCase = require('lodash.camelcase')
const snakeCase = require('lodash.snakecase')
const endsWith = require('lodash.endswith')

require('dotenv').config()
const { GoogleAdsApi } = require("../build")

const client = new GoogleAdsApi({
    client_id: process.env.GADS_CLIENT_ID,
    client_secret: process.env.GADS_CLIENT_SECRET ,
    developer_token: process.env.GADS_DEVELOPER_TOKEN ,
})


const customer =  client.Customer({
    customer_account_id: process.env.GADS_CID ,
    login_customer_id: process.env.GADS_LOGIN_CUSTOMER_ID,
    refresh_token: process.env.GADS_REFRESH_TOKEN ,
})

const log = obj => {
    console.log(require('util').inspect(obj, false, null))
}

const capitalise = s => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

var Promise = require('bluebird')
var execP = Promise.promisify(require('child_process').exec)

const service_template_file = fs.readFileSync(__dirname + '/template_service.hbs', 'utf-8')
const service_compiler = template(service_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const service_immutable_template_file = fs.readFileSync(__dirname + '/template_service_immutable.hbs', 'utf-8')
const service_immutable_compiler = template(service_immutable_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const service_test_template_file = fs.readFileSync(__dirname + '/template_service_test.hbs', 'utf-8')
const service_test_compiler = template(service_test_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const meta_template_file = fs.readFileSync(__dirname + '/template_meta.hbs', 'utf-8')
const meta_compiler = template(meta_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const readme_object_compiler = template(fs.readFileSync(__dirname + '/template_readme_object.hbs', 'utf-8'), {
    interpolate: /{{([\s\S]+?)}}/g,
})

// const readme_create_compiler = template(fs.readFileSync(__dirname + '/template_readme_create.hbs', 'utf-8'), {
//     interpolate: /{{([\s\S]+?)}}/g,
// })


const method_compilers = {}

;(['get', 'list', 'create', 'update', 'delete']).forEach(method => {
    method_compilers[method] = template(fs.readFileSync(__dirname + `/template_readme_${method}.hbs`, 'utf-8'), {
        interpolate: /{{([\s\S]+?)}}/g,
    })
})

const $RefParser = require('json-schema-ref-parser')

const raw_schema = require('./schema.json')
// TODO: get this from google-ads-node
const raw_compiled_services = require('./compiled_resources.json')

// console.log(raw_compiled_services)
// console.log(raw_compiled_services.nested.google.nested)
// console.log(
//     raw_compiled_services.nested.google.nested.ads.nested.googleads.nested.v1.nested.resources.nested.Ad.oneofs.adData
// )

const compiled_resources =
    raw_compiled_services.nested.google.nested.ads.nested.googleads.nested.v1.nested.resources.nested
// raw_compiled_services.nested.

// console.log(compiled_resources)
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

    function unroll(obj, parent_field_name) {
        const new_obj = {}

        Object.keys(obj).forEach(key => {
            const _new_object = {}

            if (obj[key].enum) {
                _new_object._type = 'enum'
                _new_object._enums = obj[key].enum.map((_enum, index) => {
                    return {
                        s: _enum,
                        description: obj[key].enumDescriptions[index],
                    }
                })
            } else {
                _new_object._type = obj[key].format || obj[key].type
            }

            if (_new_object._type === 'object') {
                new_obj[snakeCase(key)] = unroll(obj[key].properties, key)
            } else {
                new_obj[snakeCase(key)] = { ..._new_object, _description: obj[key].description }
            }

            const matching_resource = compiled_resources[capitalise(parent_field_name)]
            if (matching_resource && matching_resource.oneofs) {
                Object.keys(matching_resource.oneofs).forEach(oneof_key => {
                    matching_resource.oneofs[oneof_key].oneof.forEach(el => {
                        if (el === key) {
                            new_obj[snakeCase(key)]._oneof = oneof_key
                        }
                    })
                })
            }
        })

        return new_obj
    }

    function pretty(obj, level = 1) {
        let new_obj = `{`

        const tab = '    '

        Object.keys(obj).forEach(key => {
            const type = obj[key].enum ? obj[key].enum.join(' | ') : obj[key].format || obj[key].type

            if (type === 'object') {
                new_obj += `\n${tab.repeat(level)}${snakeCase(key)}: ${pretty(obj[key].properties, level + 1)}`
            } else {
                new_obj += `\n${tab.repeat(level)}${snakeCase(key)}: '${type}', // ${obj[key].description
                    .split('\n')
                    .join(' ')}`
            }
        })

        return `${new_obj}\n${tab.repeat(level - 1)}}${level === 1 ? '' : ','}`
    }

    const meta = {
        name: entity,
        object: unroll(schema.schemas[`GoogleAdsGoogleadsV1Resources__${entity}`].properties, entity),
    }


    const file_path = `${__dirname}/../src/services/${ent}.ts`

    const docs_file_path = `${__dirname}/../docs/content/entities/${ent}/`


    await fs.ensureDir(docs_file_path)

    

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
            // ENTITY_DOC: pretty(schema.schemas[`GoogleAdsGoogleadsV1Resources__${entity}`].properties),
        })

        meta.methods = ['get', 'list', 'create', 'update', 'delete']


        
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
            // ENTITY_DOC: pretty(schema.schemas[`GoogleAdsGoogleadsV1Resources__${entity}`].properties),
        })

        meta.methods = ['get', 'list']
    }
    // console.log(customer)
    // console.log(entity)

    const cache_path = `${__dirname}/../.cache/${ent}.json`
    let listed
    try {
        listed = fs.readJsonSync(cache_path)

    }
    catch {
        listed = await customer[camelCase(resource_url_name)].list()
        fs.writeJsonSync(cache_path, listed)
    }



    console.log(listed.length)




    let example_object = '// Todo: add example object here'

    if(listed.length > 0){
        example_object = JSON.stringify(listed[0])
    }


    fs.writeFileSync(docs_file_path + 'meta.js', meta_compiler({ JSON_META: JSON.stringify(meta) }))

    fs.writeFileSync(docs_file_path + 'index.md', readme_object_compiler({
        ENTITY: entity,
    }))


    meta.methods.forEach(method => {

        const compiled_md = method_compilers[method]({
            ENTITY: entity,
            ENTITY_SNAKECASE: ent,
            RESOURCE_URL_NAME : resource_url_name,
            EXAMPLE_OBJECT: example_object
        })

        fs.writeFileSync(docs_file_path + `${method}.md`, compiled_md)
    })
    

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

    // console.log({ file_path }) g

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
    await execP(`prettier --write ${__dirname}/../docs/content/**/*.js`)

    console.log('Finished compiling all services')
})()
