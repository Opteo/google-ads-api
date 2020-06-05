import { snakeCase, isObject, isString, isArray, isUndefined, values, get } from 'lodash'
import * as maps from 'google-ads-node/build/lib/mapping'

import {
    ReportOptions,
    Constraint,
    ConstraintValue,
    TotalResultsIterableData,
    TotalResultsIterable
} from './types'
import { enums } from './index'

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

    const normalised_constraints = Array.isArray(constraints)
        ? constraints.map(
              (constraint: Constraint | string | object): Constraint | string => {
                  if (isString(constraint)) {
                      return constraint
                  }
                  return unrollConstraintShorthand(constraint)
              }
          )
        : Object.keys(constraints).map(key => {
              const val = (constraints as any)[key]
              return unrollConstraintShorthand({ [key]: val })
          })

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

export const verifyConstraintType = (key: string, constraint: any): void => {
    if (!['number', 'string', 'boolean'].includes(typeof constraint)) {
        throw new Error(
            `The value of the constraint ${key} must be a string, number, or boolean. Here, typeof ${key} is ${typeof constraint}`
        )
    }
}

export const addQuotesIfMissing = (constraint: ConstraintValue): string => {
    const string_constraint = constraint.toString()

    if (string_constraint.startsWith(`'`) && string_constraint.endsWith(`'`)) {
        return string_constraint
    }

    if (string_constraint.startsWith(`"`) && string_constraint.endsWith(`"`)) {
        return string_constraint
    }

    return `"${string_constraint}"`
}

const formatConstraints = (constraints: any): string => {
    const formatConstraint = (constraint: any): string => {
        if (isString(constraint)) {
            return constraint
        }

        let key: any
        let val
        let op

        if (!isUndefined(constraint.key) && !isUndefined(constraint.op) && isUndefined(constraint.val)) {
            throw new Error(`"val" cannot be undefined for the key "${constraint.key}" in constraints`)
        }

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
                const vals = constraint.val
                    .map((v: ConstraintValue) => {
                        verifyConstraintType(key, v)
                        let _v = translateEnumValue(key, v)
                        _v = addQuotesIfMissing(_v)
                        return _v
                    })
                    .sort()
                    .join(`,`)
                val = `(${vals})`
            }
        } else {
            verifyConstraintType(key, val)
            val = translateEnumValue(key, val)
            val = addQuotesIfMissing(val)
        }

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

export function translateEnumValue(key: string, value: ConstraintValue): ConstraintValue {
    const enum_name = get(maps, key)
    if (enum_name && typeof value === 'number') {
        return getEnumString(enum_name, value as number)
    }
    return value
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

export function createTotalResultsIterable(data: TotalResultsIterableData): TotalResultsIterable {
    return {
        *[Symbol.iterator]() {
            for (let i = 0, l = data.resultsList.length; i < l; ++i) {
                yield data.resultsList[i]
            }
        },
        totalResultsCount: data.totalResultsCount
    }
}

export const formatQueryResults = (result: Array<object> | TotalResultsIterable): Array<object> | TotalResultsIterable => {
    const parsed_results: Array<object> = []

    for (const row of result) {
        const parsed_row = formatEntity(row)
        parsed_results.push(parsed_row)
    }

    if (result.hasOwnProperty('totalResultsCount')) {
        return createTotalResultsIterable({
            resultsList: parsed_results,
            totalResultsCount: (result as TotalResultsIterable).totalResultsCount
        })
    }

    return parsed_results
}

const formatEntity = (entity: any, final: any = {}): object => {
    for (const key in entity) {
        const underscore_key = snakeCaseGads(key)
        const value = entity[key]

        if (isObject(value) && !Array.isArray(value)) {
            final[underscore_key] = formatEntity(value, final[underscore_key])
        } else if (Array.isArray(value)) {
            final[underscore_key] = value.map(v => {
                if (isObject(v) && !Array.isArray(v)) {
                    return formatEntity(v, final[underscore_key])
                }

                return v
            })
        } else {
            final[underscore_key] = value
        }
    }
    return final
}

export const fromMicros = (value: number): number => value / 1000000

export const toMicros = (value: number): number => value * 1000000

export const normaliseCustomerId = (id: string | undefined): string => {
    if (id) {
        return id.split('-').join('')
    }
    return ''
}

/* 
    lodash.snakeCase will convert headlinePart1 to headline_part_1, 
    but we need headline_part1.
*/
export const snakeCaseGads = (str: string): string => {
    const snaked = snakeCase(str)
    const last_character = snaked[snaked.length - 1]

    if (!isNaN(+last_character)) {
        return snaked.slice(0, snaked.length - 2) + last_character
    }
    return snaked
}

export function parseResult(rows: any) {
    return values(rows).map(convertFakeArrays)
}

function convertFakeArrays(o: any): any {
    for (const key in o) {
        if (o[key] && typeof o[key] === 'object') {
            if (o[key]['0']) {
                o[key] = values(o[key])
            } else {
                o[key] = convertFakeArrays(o[key])
            }
        }
    }

    return o
}

export function getEnumString(type: string, value: number): string {
    if (!enums.hasOwnProperty(type)) {
        throw new Error(`Could not find enum "${type}"`)
    }
    const e = (enums as any)[type]
    if (!e.hasOwnProperty(value)) {
        throw new Error(`Could not find value "${value}" on enum "${type}"`)
    }
    return e[value]
}

export function parsePartialFailureErrors(errors: any[]) {
    return errors.map((error: any) => {
        for (const key in error.error_code as any) {
            if ((error.error_code as any)[key] === 0) {
                delete (error.error_code as any)[key]
            }
        }

        return error
    })
}
