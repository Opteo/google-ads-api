import { reject, isString, find } from 'lodash'
import { Metric, ReportOptions, Constraint } from './types'

const all_metrics: Array<Metric> = [
    { name: 'clicks', is_number: true },
    { name: 'conversions', is_number: true },
    { name: 'all_conversions', is_number: true },
    { name: 'cost_micros', is_number: true },
    { name: 'impressions', is_number: true },
    {
        name: 'cost',
        is_custom: true,
        is_micros: true,
        is_number: true,
        pre_query_hook: (report: ReportOptions): ReportOptions => {
            if (report.metrics) {
                report.metrics.push('metrics.cost_micros')
            }

            // @ts-ignore Ignore until custom metrics are added back
            report.metrics = reject(report.metrics, i => i === 'metrics.cost')

            if (!report.constraints || isString(report.constraints)) {
                return report
            }

            const cost_constraint = find(report.constraints as Array<Constraint>, {
                key: 'metrics.cost',
            })

            if (!cost_constraint) {
                return report
            }

            report.constraints.push({
                key: 'metrics.cost_micros',
                op: cost_constraint.op,
                val: +cost_constraint.val * 1000000,
            })

            report.constraints = reject(report.constraints, { key: 'metrics.cost' })

            return report
        },
    },
    { name: 'average_cpc', is_micros: true, is_number: true },
]

export default all_metrics
