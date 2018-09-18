import { snakeCase, isObject, isString, isArray, isUndefined, merge, uniq, cloneDeep, compact, find, reject } from 'lodash'

import { ReportConfig } from './types/Global'
import { ListConfig } from './types/Entity'

const all_metrics = [
    { name : 'all_conversions' },
    { name : 'cost_micros'},
    { 
        name : 'cost',
        is_custom : true,
        is_micros : true,
        pre_query_hook : (report: ReportConfig): ReportConfig => {
            
            report = cloneDeep(report)

            report.metrics = uniq([
                ...report.metrics,
                'metrics.cost_micros'
            ])

            report.metrics = reject(report.metrics, i => i === 'metrics.cost')

            return report
        },
        post_query_hook : (result_object: { [key: string]: any }) => {
            result_object = cloneDeep(result_object)
            result_object.metrics.cost = +result_object.metrics.cost_micros
            return result_object
        } 
    },
    { name : 'average_cpc', is_micros : true}
]

export const getUpdateMask = (update_object: any) : string => {
    let mask = ''
    for (const key in update_object) {
        if (isObject(update_object[key])){
            mask += Object.keys(update_object[key]).map(child_key => `${key}.${child_key}`).join(',') 
        } else {
            mask += `${key},`
        }
    }
    return mask
}

/**
* Builds a custom Google Ads Query
* @param {object} config
* @returns {string} query 
*/
export const buildReportQuery = (config: ReportConfig) : object => {
    let query = ''
    let where_clause_exists = false
    const custom_metrics = []

    /* SELECT Clause */
    config.attributes = config.attributes && config.attributes.length ? formatAttributes(config.attributes, config.entity) : []
    config.segments = config.segments || []
    config.metrics = config.metrics ? config.metrics.map((metric: string) => metric.includes('metrics.') ? metric : `metrics.${metric}`) : []


    const all_config_metrics = compact([
        ...config.metrics,
        ...isArray(config.constraints) ? config.constraints.map(constraint => {
            if(isString(constraint)){
                return false
            }
            if(constraint.key){
                return constraint.key
            }

            return Object.keys(constraint)[0]
        }).filter(constraint_key => all_metrics.map(m => `metrics.${m.name}`).includes(constraint_key)) : []
    ])

    all_config_metrics.forEach(config_metric => {
        const matching_metric = find(all_metrics, { name : config_metric.replace('metrics.', '')})

        if(matching_metric && matching_metric.pre_query_hook){
            config = matching_metric.pre_query_hook(config)
        }

        if(matching_metric && matching_metric.is_custom){
            custom_metrics.push(matching_metric)
        }
    })

    const all_selected_attributes = config.attributes.concat(config.metrics, config.segments).join(', ')


    if (!all_selected_attributes.length) {
        throw new Error('Missing attributes, metric fields or segmens to be selected.')
    }

    query = `SELECT ${all_selected_attributes} FROM ${config.entity}`

    /* WHERE Clause */

    /* Constraints */
    if (config.constraints) {
        const constraints = formatConstraints(config.constraints)
        query += ` WHERE ${constraints}`
        where_clause_exists = true
    }

    // TODO: add better error message
    if (config.date_constant && (config.from_date || config.to_date)) {
        throw new Error('Use only one, Custom date range or Predefined date range.') 
    }
    if (config.from_date && !config.to_date) {
        // TODO: set today date as default?*
        throw new Error('Expected finite date range is missing. (to_date)')
    } 
    else if (config.to_date && !config.from_date) {
        throw new Error('Expected start date range is missing. (from_date)')
    }

    /* Custom Date Range */
    if (config.from_date && config.to_date) {
        query += where_clause_exists ? ' AND ' : ' WHERE '
        query += `date >= '${config.from_date}' AND date <= '${config.to_date}'`
        where_clause_exists = true
    }

    /* Predefined Date Constant */
    if (config.date_constant) {
        query += where_clause_exists ? ' AND ' : ' WHERE '
        query += `date DURING ${config.date_constant}`
    }


    /* Order By */
    if (config.order_by) {
        // If sort order is unspecified, all values are sorted in DESCending order.
        const sort_order = config.sort_order ? config.sort_order : 'DESC' 
        let order_by = ''

        if (config.order_by instanceof Array) {
            order_by = config.order_by.map((key: string) => !key.includes('.') ? `${config.entity}.${key}` : key).join(', ')
        } else {
            order_by = !config.order_by.includes('.') ? `${config.entity}.${config.order_by}` : config.order_by
        }

        query += ` ORDER BY ${order_by} ${sort_order}`
    } 

    /* Limit To */
    if (config.limit && config.limit > 0) {
        query += ` LIMIT ${config.limit}`
    }

    // console.log(query)
    return { query, custom_metrics }
}

const formatAttributes = (attributes: Array<string>, entity: string) : Array<string> => {
    return attributes.map((attribute: string) => {
        if (!attribute.includes('.')) {
            return `${entity}.${attribute}`
        }
        return attribute
    })
}

const formatConstraints = (constraints: any) : string => {

    const formatConstraint = (constraint: any) : string => {
        if(isString(constraint)){
            return constraint
        }

        let key 
        let val
        let op

        if(constraint.key){
            if(isUndefined(constraint.op) || isUndefined(constraint.val)){
                throw new Error('must specify { key, op, val } when using object-style constraints')
            }
            key = constraint.key
            op = constraint.op
            val = constraint.val
            if(isArray(constraint.val)){
                val = `("${ constraint.val.join(`","`) }")`
            }
        }
        else {
            key = Object.keys(constraint)[0]
            op = '='
            val = constraint[key]
        }

        return `${key} ${op} ${val}`
    }

    if (constraints instanceof Array) {
        // constraints = constraints.map(formatConstraint)
        return constraints.map(formatConstraint).join(' AND ')
    } 
    return constraints
}

const formatOrderBy = (order_by: string|Array<string>, entity?: string) : string => {
    if (order_by instanceof Array) {
        return `${order_by.map((key: string) => entity ? `${entity}.${key}` : key).join(', ')}` 
    } 
    return entity ? `${entity}.${order_by}` : order_by
}

export const formatReportResult = (result: Array<object>, entity: string, convert_micros: boolean, custom_metrics) : Array<object> => {
    
    return result.map((row: { [key: string]: any }) => {
        // removing main entity key from final object
        if (row[entity]) {
            merge(row, row[entity])
            delete row[entity]
        }


        custom_metrics.forEach(custom_metric => {
            if(custom_metric.post_query_hook){
                row = custom_metric.post_query_hook(row)
            }
        })

        return formatSingleResult(row, convert_micros)
    })
}

const formatSingleResult = (result_object: { [key: string]: any }, convert_micros : boolean) : object => {
    for (const key in result_object) {
        if (isObject(result_object[key])) {
            result_object[key] = formatSingleResult(result_object[key], convert_micros)
            continue
        }

        const matching_metric = find(all_metrics, { name : key })

        if(convert_micros && matching_metric && matching_metric.is_micros){
            result_object[key] = +result_object[key] / 1000000
        }

        if (isNumeric(result_object[key])) {
            result_object[key] = +result_object[key]
        }
    }
    
    return result_object
}

export const buildQuery = (config: ListConfig, resource: string) : string => {
    const selected_fields = config.fields.map((field: string) => `${resource}.${field}`)
    let query = `SELECT ${selected_fields.join(', ')} FROM ${resource}`

    if (config.constraints) {
        let index = 0

        if (config.constraints.ad_group_id) {
            query += ` WHERE ad_group.id = ${config.constraints.ad_group_id}`
            index += 1
            delete config.constraints.ad_group_id
        } else if (config.constraints.campaign_id) {
            query += index > 0 ? 
                ` AND campaign.id = ${config.constraints.campaign_id}` 
                : ` WHERE campaign.id = ${config.constraints.campaign_id}`
            index += 1
            delete config.constraints.campaign_id
        } else {
            query += ' WHERE ' 
        }

        for (const key in config.constraints) {

            if (typeof config.constraints[key] === 'object') {
                const resource_constraints = config.constraints[key]

                for (const resource_key in resource_constraints) {
                    index += 1

                    if (index > 1) {
                        query += ' AND '
                    }
                    query += `${resource}.${key}.${resource_key} = ${resource_constraints[resource_key]}`
                }
                continue
            } 
            index += 1

            if (index > 1) {
                query += ' AND '
            }
            query += `${resource}.${key} = ${config.constraints[key]}`

        }
    }
    
    if (config.order_by) {
        const formatted_order_by = formatOrderBy(config.order_by, resource)
        query += ` ORDER BY ${formatted_order_by}` 
    } 

    if (config.limit && config.limit > 0) {
        query += ` LIMIT ${config.limit}`
    }

    return query
}

export const mapResultsWithIds = (response: any) : object => {
    const resource_name = response.results[0].resource_name
    const resource_name_split = resource_name.split('/')
    const id = resource_name_split[resource_name_split.length - 1]

    return {
        id,
        resource_name
    }
}

export const transformObjectKeys = (entity_object: any) : any  => {
    const final: { [key: string]: string|object } = {}

    for (const key in entity_object) {
        if (isObject(entity_object[key])) {
            final[snakeCase(key)] = transformObjectKeys(entity_object[key])
        } else {
            final[snakeCase(key)] = entity_object[key]   
        }
    }

    return final
}

const isNumeric = (num: any): boolean => !isNaN(num)
