import { snakeCase, isObject, merge } from 'lodash'

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

export const formatReportResult = (result: Array<object>, entity: string, convert_micros: boolean) : Array<object> => {
    
    return result.map((row: { [key: string]: any }) => {
        if (convert_micros) {
            row = convertMicros(row)
        }
        // removing main entity key from final object
        if (row[entity]) {
            merge(row, row[entity])
            delete row[entity]
        }
        // converting strings to numbers in metrics
        if (row.metrics) {
            for (const key in row.metrics) {
                row.metrics[key] = +row.metrics[key]
            }
        }

        return row
    })
}

export const convertMicros = (result_object: { [key: string]: any }) : object => {
    for (const key in result_object) {
        if (isObject(result_object[key])) {
            result_object[key] = convertMicros(result_object[key])
        } else if (key.includes('_micros')) {
            const new_key = key.replace('_micros', '')
            result_object[new_key] = result_object[key] > 0 ? result_object[key] / 1000000 : 0
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

