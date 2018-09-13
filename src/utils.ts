import { snakeCase, isObject } from 'lodash'

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
    let start_date_exists = false

    /* SELECT Clause */
    const selected_fields = config.fields || []
    const selected_metrics = config.metrics ? config.metrics.map((metric: string) => `metrics.${metric}`) : []
    const all_selected_attributes = selected_fields.concat(selected_metrics).join(', ')

    if (!all_selected_attributes.length) {
        throw new Error('Missing resource fields or metric fields to be selected.')
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
        throw new Error('Expected a finite date range is missing. (to_date)')
    } 
    else if (config.to_date && !config.from_date) {
        throw new Error('Expected a start date range is missing. (from_date)')
    }

    /* Custom Date Range */
    if (config.from_date) {
        query += where_clause_exists ? ' AND ' : ' WHERE '
        query += `date >= '${config.from_date}'`
        start_date_exists = true
        where_clause_exists = true
    }
    if (config.to_date) {
        query += where_clause_exists ? ' AND ' : ' WHERE '
        query += `date <= '${config.to_date}'`
        where_clause_exists = true
    }

    /* Predefined Date Constant */
    if (config.date_constant) {
        query += where_clause_exists ? ' AND ' : ' WHERE '
        query += `date DURING ${config.date_constant}`
    }


    /* Order By */
    if (config.order_by) {
        const order_by = formatOrderBy(config.order_by)
        const sort_order = config.sort_order ? config.sort_order : 'DESC' // If sort order is unspecified, all values are sorted in descending order.
        query += ` ORDER BY ${order_by} ${sort_order}` 
    } 

    /* Limit To */
    if (config.limit && config.limit > 0) {
        query += ` LIMIT ${config.limit}`
    }

    console.log(query)
    return query
}

const formatConstraints = (constraints: string|Array<string>) : string => {
    if (constraints instanceof Array) {
        return constraints.join(' AND ')
    } 
    return constraints
}

const formatOrderBy = (order_by: string|Array<string>, entity?: string) : string => {
    if (order_by instanceof Array) {
        return `${order_by.map((key: string) => entity ? `${entity}.${key}` : key).join(', ')}` 
    } 
    return entity ? `${entity}.${order_by}` : order_by
}

const formatResults = (order_by: string|Array<string>, resource?: string) : string => {
    if (order_by instanceof Array) {
        return `${order_by.map((key: string) => resource ? `${resource}.${key}` : key).join(', ')}` 
    } 
    return resource ? `${resource}.${order_by}` : order_by
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
        const formatted_order_by = formatOrderBy(config.order_by)
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