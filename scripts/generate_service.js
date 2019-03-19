const fs = require('fs')
const template = require('lodash.template')
const camelCase = require('lodash.camelcase')
const snakeCase = require('lodash.snakecase')

const template_file = fs.readFileSync(__dirname + '/template_service.hbs', 'utf-8')
const entity = 'AdGroup'

const compiler = template(template_file, {
    interpolate: /{{([\s\S]+?)}}/g,
})

const resource_url_name = `${camelCase(entity)}s`

const get_request = `Get${entity}Request`
const get_method = `get${entity}`

const operation_request = `${entity}Operation`
const mutate_request = `Mutate${entity}sRequest`
const mutate_method = `mutate${entity}s`

const resource = entity
const type = entity

const param = snakeCase(entity)
const e = snakeCase(entity)

const result = compiler({
    RESOURCE_URL_NAME: resource_url_name,
    MUTATE_METHOD: mutate_method,
    MUTATE_REQUEST: mutate_request,
    OPERATION_REQUEST: operation_request,
    GET_METHOD: get_method,
    GET_REQUEST: get_request,
    RESOURCE: entity,
    TYPE: type,
    PARAM: param,
    ENTITY: e,
})

fs.writeFileSync(`${__dirname}/gen.ts`, result)
console.log('Finished compiling')
