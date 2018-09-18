import { snakeCase, isObject, isString, isArray, isUndefined, merge } from 'lodash'

import attributes from "./attributes"

import { ReportConfig } from './types/Global'
import { ListConfig } from './types/Entity'

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
export const buildReportQuery = (config: ReportConfig) : string => {
    let query = ''
    let where_clause_exists = false

    /* SELECT Clause */
    const selected_attributes = config.attributes && config.attributes.length ? formatAttributes(config.attributes, config.entity) : []
    const selected_segments = config.segments || []
    const selected_metrics = config.metrics ? config.metrics.map((metric: string) => metric.includes('metrics.') ? metric : `metrics.${metric}`) : []
    const all_selected_attributes = selected_attributes.concat(selected_metrics, selected_segments).join(', ')

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
        query += formatOrderBy(config.entity, config.order_by, config.sort_order)
    } 

    /* Limit To */
    if (config.limit && config.limit > 0) {
        query += ` LIMIT ${config.limit}`
    }

    // console.log(query)
    return query
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

const formatOrderBy = (entity: string, order_by: string|Array<string>, sort_order?: string,) : string => {
    if (!sort_order) {
        // If sort order is unspecified, all values are sorted in DESCending order.
        sort_order = 'DESC' 
    }

    if (order_by instanceof Array) {
        order_by = order_by.map((key: string) => !key.includes('.') ? `${entity}.${key}` : key).join(', ')
    } else {
        order_by = !order_by.includes('.') ? `${entity}.${order_by}` : order_by
    }

    return` ORDER BY ${order_by} ${sort_order}`
}

export const formatQueryResults = (result: Array<object>, entity: string, convert_micros: boolean) : Array<object> => {
    
    return result.map((row: { [key: string]: any }) => {
        // removing main entity key from final object
        if (row[entity]) {
            merge(row, row[entity])
            delete row[entity]
        }

        return formatSingleResult(row, convert_micros)
    })
}

const formatSingleResult = (result_object: { [key: string]: any }, convert_micros: boolean) : object => {
    for (const key in result_object) {
        if (isObject(result_object[key])) {
            result_object[key] = formatSingleResult(result_object[key], convert_micros)
            continue
        } 
        if (convert_micros && key.includes('_micros')) {
            const new_key = key.replace('_micros', '')
            result_object[new_key] = result_object[key] > 0 ? result_object[key] / 1000000 : 0
        }
        if (isNumeric(result_object[key])) {
            result_object[key] = +result_object[key]
        }
    }
    
    return result_object
}

export const buildQuery = (config: ListConfig, resource: string) : string => {
    const fields = attributes[resource]
    const select_attributes = fields.map((field: string) => `${resource}.${field}`)
    let query = `SELECT ${select_attributes.join(', ')} FROM ${resource}`

    if (config.constraints) {
        let index = 0

        //TODO: use formatConstaints method from Report
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
        query += formatOrderBy(resource, config.order_by, config.sort_order)
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
