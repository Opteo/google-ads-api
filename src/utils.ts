import { snakeCase, isObject, isString, isArray, isUndefined } from 'lodash'

import { ReportOptions, Metric, Constraint } from './types'

function unrollConstraintShorthand(constraint: any): Constraint {
    if (!constraint.key) {
        const key = Object.keys(constraint)[0]
        const val = constraint[key]
        if (isArray(val)) {
            return { key, op: 'IN', val }
        }
        return { key, op: '=', val }
    }
    return constraint
}

export function buildReportQuery(config: ReportOptions) {
    let query = ``
    let where_clause_exists = false

    const attributes = config.attributes ? config.attributes.sort() : []
    const metrics = config.metrics ? config.metrics.sort() : []
    const segments = config.segments ? config.segments.sort() : []
    const constraints = config.constraints || []

    const normalised_constraints = constraints.map(
        (constraint: Constraint | string | object): Constraint | string => {
            if (isString(constraint)) {
                return constraint
            }
            return unrollConstraintShorthand(constraint)
        }
    )

    /* ATTRIBUTES */
    const all_selected_attributes = (attributes as any).concat(metrics, segments).join(', ')
    if (!all_selected_attributes) {
        throw new Error(`Must specify at least one field in "attributes", "metrics" or "segments"`)
    }

    query = `SELECT ${all_selected_attributes} FROM ${config.entity}`

    /* Constraints */
    if (normalised_constraints && normalised_constraints.length > 0) {
        const constraints = formatConstraints(normalised_constraints)
        query += ` WHERE ${constraints}`
        where_clause_exists = true
    }

    /* Date Ranges */
    if (config.date_constant && (config.from_date || config.to_date)) {
        throw new Error('Use only one of "date_constant" OR ("from_date","to_date")')
    }
    if (config.from_date && !config.to_date) {
        const d = new Date()
        const today_string = `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}-${('0' + d.getDate()).slice(
            -2
        )}`
        config.to_date = today_string
    } else if (config.to_date && !config.from_date) {
        throw new Error('Expected start date range is missing - "from_date"')
    }

    /* Custom Date Range */
    if (config.from_date && config.to_date) {
        query += where_clause_exists ? ' AND ' : ' WHERE '
        query += `segments.date >= '${config.from_date}' AND segments.date <= '${config.to_date}'`
        where_clause_exists = true
    }

    /* Predefined Date Constant */
    if (config.date_constant) {
        query += where_clause_exists ? ' AND ' : ' WHERE '
        query += `segments.date DURING ${config.date_constant}`
    }

    /* Order By */
    if (config.order_by) {
        query += formatOrderBy(config.entity, config.order_by, config.sort_order)
    }

    /* Limit To */
    if (config.limit && config.limit > 0) {
        query += ` LIMIT ${config.limit}`
    }

    return query
}

const formatConstraints = (constraints: any): string => {
    const formatConstraint = (constraint: any): string => {
        if (isString(constraint)) {
            return constraint
        }

        let key
        let val
        let op

        if (isUndefined(constraint.key) || isUndefined(constraint.op) || isUndefined(constraint.val)) {
            throw new Error('must specify { key, op, val } when using object-style constraints')
        }
        key = constraint.key
        op = constraint.op
        val = constraint.val

        if (isArray(constraint.val)) {
            if (constraint.val.length === 0) {
                val = `()`
            } else {
                val = `("${constraint.val.sort().join(`","`)}")`
            }
        }

        // if (entity_segments.map(s => s.name).includes(key)) {
        //     key = `segments.${key}`
        // }

        return `${key} ${op} ${val}`
    }

    if (constraints instanceof Array) {
        return constraints
            .map(formatConstraint)
            .sort()
            .join(' AND ')
    }
    return constraints
}

const formatOrderBy = (entity: string, order_by: string | Array<string>, sort_order?: string): string => {
    if (!sort_order) {
        // If sort order is unspecified, all values are sorted in DESCending order.
        sort_order = 'DESC'
    }

    if (order_by instanceof Array) {
        order_by = order_by.map((key: string) => (!key.includes('.') ? `${entity}.${key}` : key)).join(', ')
    } else {
        order_by = !order_by.includes('.') ? `${entity}.${order_by}` : order_by
    }

    return ` ORDER BY ${order_by} ${sort_order}`
}

export const formatQueryResults = (
    result: Array<object>,
    convert_micros: boolean,
    custom_metrics?: Array<Metric>
): Array<object> => {
    const parsed_results: Array<object> = []
    //     custom_metrics.forEach(custom_metric => {
    //         if (custom_metric.post_query_hook) {
    //             row = custom_metric.post_query_hook(row)
    //         }
    //     })
    // TODO: Add custom metric post query hook bits
    for (const row of result) {
        const parsed_row = formatEntity(row, convert_micros)
        parsed_results.push(parsed_row)
    }
    return parsed_results
}

const formatEntity = (entity: any, convert_micros: boolean, final: any = {}): object => {
    for (const key in entity) {
        const underscore_key = snakeCase(key)
        const value = entity[key]

        if (isObject(value) && !Array.isArray(value)) {
            final[underscore_key] = formatEntity(value, convert_micros, final[underscore_key])
        } else {
            // TODO: Check if we still need matching_metric here
            if (convert_micros && underscore_key.includes('_micros')) {
                final[underscore_key.split('_micros')[0]] = convertMicroValue(value)
            }
            final[underscore_key] = value
        }
    }
    return final
}

const convertMicroValue = (money_value: number): number => {
    return money_value / 1000000
}

export const normaliseCustomerId = (id: string | undefined): string => {
    if (id) {
        return id.split('-').join('')
    }
    return ''
}
