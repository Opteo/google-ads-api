/*

    To update the google ads api version, you must:

    1. Update google-ads-node in package.json
    1.1 Update badge version in readme.md + container.jsx
    2. yarn && yarn build
    3. update scripts/schema.json (https://googleads.googleapis.com/$discovery/rest?version=v2)
    4. update compiled_resources.json by running `pbjs -t json googleapis/google/rpc/*.proto googleapis/google/longrunning/*.proto googleapis//google/ads/googleads/v2/common/*.proto googleapis//google/ads/googleads/v2/errors/*.proto googleapis//google/ads/googleads/v2/enums/*.proto googleapis//google/ads/googleads/v2/resources/*.proto googleapis//google/ads/googleads/v2/services/*.proto > compiled_resources.json`
    5. clear the .cache folder in the root of this project to make sure you get new examples from our test account

*/
const fs = require('fs-extra')
const { template, camelCase, snakeCase, endsWith, get, maxBy } = require('lodash')

const Promise = require('bluebird')

var TurndownService = require('turndown')
TurndownService.prototype.escape = t => t
var turndownService = new TurndownService()

const showdown = require('showdown')
showdown.setOption('literalMidWordUnderscores', true)
const converter = new showdown.Converter()

const sanitiseHtml = gg => {
    gg = turndownService.turndown(gg)
    const result = converter.makeHtml(gg)

    // remove <p> tags
    return result.substring(3, result.length - 4)
}

require('dotenv').config()
const { GoogleAdsApi } = require('../build')

const client = new GoogleAdsApi({
    client_id: process.env.GADS_CLIENT_ID,
    client_secret: process.env.GADS_CLIENT_SECRET,
    developer_token: process.env.GADS_DEVELOPER_TOKEN,
})

const customer = client.Customer({
    customer_account_id: process.env.GADS_CID,
    login_customer_id: process.env.GADS_LOGIN_CUSTOMER_ID,
    refresh_token: process.env.GADS_REFRESH_TOKEN,
})

const customer_scary = client.Customer({
    customer_account_id: process.env.GADS_CID_WITH_METRICS,
    login_customer_id: process.env.GADS_LOGIN_CUSTOMER_ID_WITH_METRICS,
    refresh_token: process.env.GADS_REFRESH_TOKEN_WITH_METRICS,
})

const log = obj => {
    console.log(require('util').inspect(obj, false, null))
}

const capitalise = s => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function sortObject(object) {
    var sortedObj = {},
        keys = Object.keys(object)

    keys.sort(function(key1, key2) {
        ;(key1 = key1.toLowerCase()), (key2 = key2.toLowerCase())
        if (key1 < key2) return -1
        if (key1 > key2) return 1
        return 0
    })

    for (var index in keys) {
        var key = keys[index]
        if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
            sortedObj[key] = sortObject(object[key])
        } else {
            sortedObj[key] = object[key]
        }
    }

    return sortedObj
}

var execP = Promise.promisify(require('child_process').exec)

const service_template_file = fs.readFileSync(__dirname + '/templates/template_service.hbs', 'utf-8')
const service_compiler = template(service_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const service_immutable_template_file = fs.readFileSync(
    __dirname + '/templates/template_service_immutable.hbs',
    'utf-8'
)
const service_immutable_compiler = template(service_immutable_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const service_test_template_file = fs.readFileSync(__dirname + '/templates/template_service_test.hbs', 'utf-8')
const service_test_compiler = template(service_test_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const meta_template_file = fs.readFileSync(__dirname + '/templates/template_meta.hbs', 'utf-8')
const meta_compiler = template(meta_template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const readme_object_compiler = template(fs.readFileSync(__dirname + '/templates/template_readme_object.hbs', 'utf-8'), {
    interpolate: /{{([\s\S]+?)}}/g,
})

const readme_object_compiler_code = template(
    fs.readFileSync(__dirname + '/templates/template_readme_object_code.hbs', 'utf-8'),
    {
        interpolate: /{{([\s\S]+?)}}/g,
    }
)

// const readme_create_compiler = template(fs.readFileSync(__dirname + '/template_readme_create.hbs', 'utf-8'), {
//     interpolate: /{{([\s\S]+?)}}/g,
// })

const method_compilers = {}

;[
    'get',
    'list',
    'create',
    'update',
    'delete',
    'get_code',
    'list_code',
    'create_code',
    'update_code',
    'delete_code',
].forEach(method => {
    method_compilers[method] = template(
        fs.readFileSync(__dirname + `/templates/template_readme_${method}.hbs`, 'utf-8'),
        {
            interpolate: /{{([\s\S]+?)}}/g,
        }
    )
})

const $RefParser = require('json-schema-ref-parser')

// get this from https://googleads.googleapis.com/$discovery/rest?version=v2
const raw_schema = require('./schema.json')

// TODO: get this from google-ads-node
// To regenerate this file, run (in google-ads-node):
// pbjs -t json googleapis/google/rpc/*.proto googleapis/google/longrunning/*.proto googleapis//google/ads/googleads/v2/common/*.proto googleapis//google/ads/googleads/v2/errors/*.proto googleapis//google/ads/googleads/v2/enums/*.proto googleapis//google/ads/googleads/v2/resources/*.proto googleapis//google/ads/googleads/v2/services/*.proto > compiled_resources.json
const raw_compiled_services = require('./compiled_resources.json')

// console.log(raw_compiled_services)
// console.log(raw_compiled_services.nested.google.nested)
// console.log(
//     raw_compiled_services.nested.google.nested.ads.nested.googleads.nested.v2.nested.resources.nested.Ad.oneofs.adData
// )

const compiled_resources =
    raw_compiled_services.nested.google.nested.ads.nested.googleads.nested.v2.nested.resources.nested
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
    // 'Ad',
    'AdGroupAdLabel',
    'AdGroupAd',
    'AdGroupBidModifier',
    'AdGroupCriterionLabel',
    'AdGroupCriterion',
    'AdGroupExtensionSetting',
    'AdGroupFeed',
    'AdGroupLabel',
    'AdGroup',
    // 'AdParameter', // Missing protos?
    'Asset',
    'BiddingStrategy',
    'BillingSetup',
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
    'ConversionAction',
    // 'ConversionUpload', // Probably needs custom implementation
    'CustomInterest',
    'CustomerClientLink',
    'CustomerClient',
    'CustomerExtensionSetting',
    'CustomerFeed',
    'CustomerLabel',
    'CustomerManagerLink',
    'CustomerNegativeCriterion',
    //   'Customer', // Not required
    'DomainCategory',
    'ExtensionFeedItem',
    'FeedItem',
    'FeedItemTarget',
    'FeedMapping',
    'Feed',
    'GeoTargetConstant',
    // 'GoogleAdsField', // Not required
    // 'GoogleAds', // Not required
    'KeywordPlanAdGroup',
    'KeywordPlanCampaign',
    //'KeywordPlanIdea', // Not really a resource -- just a random function in a service
    'KeywordPlanKeyword',
    'KeywordPlanNegativeKeyword',
    'KeywordPlan',
    'Label',
    'LanguageConstant',
    'MediaFile',
    // 'MerchantCenterLink', // Missing protos?
    'MobileAppCategoryConstant',
    'MobileDeviceConstant',
    // 'MutateJob', // Not to implement yet
    'OperatingSystemVersionConstant',
    // 'PaymentsAccount', // Missing protos?
    'ProductBiddingCategoryConstant',
    'Recommendation',
    'RemarketingAction',
    'SharedCriterion',
    'SharedSet',
    'TopicConstant',
    'UserInterest',
    'UserList',
    'Video',
    // 'CampaignDraft', Very unique -- wait until somebody wants it.
    // 'CampaignExperiment', Very unique -- wait until somebody wants it.
    'AdGroupCriterionSimulation',
    'AdGroupSimulation',
    'CampaignCriterionSimulation',
]

const compiled_services =
    raw_compiled_services.nested.google.nested.ads.nested.googleads.nested.v2.nested.services.nested

const _entities = Object.keys(compiled_services).forEach(entity => {
    if (!entity.includes('Service')) {
        return
    }

    if (entity.includes('View')) {
        return
    }

    if (!entities.includes(entity.replace('Service', ''))) {
        // console.log(entity)
    }
})

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
    return `${snakeCaseGads(entity)}s`
}

// Google does not consider numbers to be capitalised, but lodash does.
function snakeCaseGads(str) {
    const snaked = snakeCase(str)
    const last_character = snaked[snaked.length - 1]
    if (!isNaN(+last_character)) {
        return snaked.slice(0, snaked.length - 2) + last_character
    }
    return snaked
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

    const param = snakeCaseGads(entity)
    const ent = snakeCaseGads(entity)

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
                new_obj[snakeCaseGads(key)] = unroll(obj[key].properties, key)
            } else if (_new_object._type === 'array' && obj[key].items.type === 'object') {
                new_obj[snakeCaseGads(key)] = unroll(obj[key].items.properties, key)
                new_obj[snakeCaseGads(key)]._type = 'array of objects'
            } else {
                if (_new_object._type === 'array') {
                    _new_object._type = 'array of ' + obj[key].items.type + 's'
                }

                const markdown_description = sanitiseHtml(obj[key].description)

                new_obj[snakeCaseGads(key)] = { ..._new_object, _description: markdown_description }
            }

            const matching_resource = compiled_resources[capitalise(parent_field_name)]
            if (matching_resource && matching_resource.oneofs) {
                Object.keys(matching_resource.oneofs).forEach(oneof_key => {
                    matching_resource.oneofs[oneof_key].oneof.forEach(el => {
                        if (el === key) {
                            new_obj[snakeCaseGads(key)]._oneof = oneof_key
                        }
                    })
                })
            }
        })

        // remove incorrect oneofs (only one instance in object)
        const oneof_counts = {}
        Object.keys(new_obj).forEach(just_created_child_key => {
            const just_created_child = new_obj[just_created_child_key]
            if (just_created_child._oneof) {
                if (!oneof_counts[just_created_child._oneof]) {
                    oneof_counts[just_created_child._oneof] = 0
                }
                oneof_counts[just_created_child._oneof]++
            }
        })

        Object.keys(oneof_counts).forEach(oneof_type => {
            if (oneof_counts[oneof_type] > 1) {
                return
            }

            // remove any _oneof keys from this child since they are useless
            Object.keys(new_obj).forEach(just_created_child_key => {
                if (oneof_type === new_obj[just_created_child_key]._oneof) {
                    delete new_obj[just_created_child_key]._oneof
                }
            })
        })

        return new_obj
    }

    function pretty(obj, level = 1) {
        let new_obj = `{`

        const tab = '    '

        Object.keys(obj).forEach(key => {
            const type = obj[key].enum ? obj[key].enum.join(' | ') : obj[key].format || obj[key].type

            if (type === 'object') {
                new_obj += `\n${tab.repeat(level)}${snakeCaseGads(key)}: ${pretty(obj[key].properties, level + 1)}`
            } else {
                new_obj += `\n${tab.repeat(level)}${snakeCaseGads(key)}: '${type}', // ${obj[key].description
                    .split('\n')
                    .join(' ')}`
            }
        })

        return `${new_obj}\n${tab.repeat(level - 1)}}${level === 1 ? '' : ','}`
    }

    const meta = {
        name: entity,
        object: sortObject(unroll(schema.schemas[`GoogleAdsGoogleadsV2Resources__${entity}`].properties, entity)),
    }

    const file_path = `${__dirname}/../src/services/${ent}.ts`

    const docs_file_path = `${__dirname}/../docs/content/entities/${ent}/`

    await fs.ensureDir(docs_file_path)

    if (schema.schemas[`GoogleAdsGoogleadsV2Services__${mutate_request}`]) {
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
            // ENTITY_DOC: pretty(schema.schemas[`GoogleAdsGoogleadsV2Resources__${entity}`].properties),
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
            // ENTITY_DOC: pretty(schema.schemas[`GoogleAdsGoogleadsV2Resources__${entity}`].properties),
        })

        meta.methods = ['get', 'list']
    }
    // console.log(customer)
    // console.log(entity)

    if (customer[camelCase(resource_url_name)]) {
        const cache_path = `${__dirname}/../.cache/${ent}.json`

        let listed = []
        try {
            listed = fs.readJsonSync(cache_path)
        } catch {
            try {
                listed = await customer[camelCase(resource_url_name)].list({
                    limit: 100,
                })
                fs.writeJsonSync(cache_path, listed)
            } catch (e) {
                console.error(e)
            }
        }
        let scary = false

        if (listed.length === 0) {
            try {
                listed = await customer_scary[camelCase(resource_url_name)].list({
                    limit: 100,
                })
                scary = listed.length > 0
                fs.writeJsonSync(cache_path, listed)
            } catch (e) {
                console.error(e)
            }
        }

        let example_object_list = '/* Todo: add example list() return here */'
        let example_object_get = '/* Todo: add example get() return here */'
        let example_resource_name = `customers/1234567890/${resource_url_name}/123123123`

        if (listed.length > 0) {
            // Get the "biggest" example in an attempt to get the most fields
            let chosen_example = maxBy(listed, block => {
                return JSON.stringify(block).length
            })

            chosen_example = sortObject(chosen_example)

            // Reorder the object to put the least interesting things at the bottom
            ;['ad_group', 'campaign', 'customer'].forEach(key => {
                if (chosen_example[key]) {
                    const customer_temp_object = chosen_example[key]
                    delete chosen_example[key]
                    chosen_example = {
                        ...chosen_example,
                        [key]: customer_temp_object,
                    }
                }
            })

            // ... And get the important bit at the top
            const ent_temp_object = chosen_example[ent]
            delete chosen_example[ent]
            chosen_example = {
                [ent]: ent_temp_object,
                ...chosen_example,
            }

            // just a tiny bit of sanitization
            Object.keys(chosen_example).forEach(key => {
                if (chosen_example[key].name && !entity.toLowerCase().includes('constant')) {
                    chosen_example[key].name = `My ${key.split('_').join(' ')}`
                }
                if (chosen_example[key].descriptive_name && !entity.toLowerCase().includes('constant')) {
                    chosen_example[key].descriptive_name = `My ${key.split('_').join(' ')}`
                }
            })

            example_object_list = JSON.stringify(chosen_example)
            if (get(chosen_example, `${ent}.resource_name`)) {
                example_resource_name = chosen_example[ent].resource_name
            }
            if (get(chosen_example, `${ent}`)) {
                example_object_get = JSON.stringify(chosen_example[ent])
            }
        }

        if (!scary) {
            // return
        }

        const AN = ['O', 'A'].includes(entity.slice(0, 1)) ? 'an' : 'a'

        writeIfNotManualMode(docs_file_path + 'meta.js', meta_compiler({ JSON_META: JSON.stringify(meta) }))

        writeIfNotManualMode(
            docs_file_path + 'index.md',
            readme_object_compiler({
                ENTITY: entity,
                ENTITY_SNAKECASE: ent,
                EXAMPLE_OBJECT_GET: example_object_get,
                AN,
            })
        )

        writeIfNotManualMode(
            docs_file_path + 'index_code.md',
            readme_object_compiler_code({
                ENTITY: entity,
                ENTITY_SNAKECASE: ent,
                EXAMPLE_OBJECT_GET: example_object_get,
                AN,
            })
        )

        meta.methods.forEach(method => {
            const compiled_md_code = method_compilers[method + '_code']({
                ENTITY: entity,
                ENTITY_SNAKECASE: ent,
                RESOURCE_URL_NAME: resource_url_name,
                EXAMPLE_OBJECT_LIST: example_object_list,
                EXAMPLE_OBJECT_GET: example_object_get,
                EXAMPLE_RESOURCE_NAME: example_resource_name,
                AN,
            })

            const compiled_md = method_compilers[method]({
                ENTITY: entity,
                ENTITY_SNAKECASE: ent,
                RESOURCE_URL_NAME: resource_url_name,
                EXAMPLE_OBJECT_LIST: example_object_list,
                EXAMPLE_OBJECT_GET: example_object_get,
                EXAMPLE_RESOURCE_NAME: example_resource_name,
                AN,
            })

            writeIfNotManualMode(docs_file_path + `${method}.md`, compiled_md)
            writeIfNotManualMode(docs_file_path + `${method}_code.md`, compiled_md_code)
        })
    }

    writeIfNotManualMode(file_path, compiled_service)

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
        dereference: {
            circular: 'ignore', // Don't allow circular $refs
        },
    })

    for (const entity of entities) {
        console.log(`Compiling ${entity} service template`)
        await compileService(entity, schema)
    }

    const result = await execP(`node ./node_modules/prettier/bin-prettier.js --write ${__dirname}/../src/services/*.ts`)
    console.log('prettifying js...')
    await execP(`node ./node_modules/prettier/bin-prettier.js --write ${__dirname}/../docs/content/**/*.js`)
    console.log('prettifying md...')

    await execP(
        `node ./node_modules/prettier/bin-prettier.js --tab-width 2 --write ${__dirname}/../docs/content/**/*_code.md`
    )

    console.log('Finished compiling all services')
})()

function writeIfNotManualMode(file_path, data) {
    let existing_file = ''
    try {
        existing_file = fs.readFileSync(file_path)
    } catch (err) {
        // console.log(err)
    }

    if (
        !existing_file
            .toString()
            .slice(0, 200)
            .includes('manual_mode')
    ) {
        fs.ensureFileSync(file_path)
        fs.writeFileSync(file_path, data)
    }
}
