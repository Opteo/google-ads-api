import { cloneDeep, reject, isString, find } from 'lodash'
import { Metric, ReportConfig, Constraint } from './types/Global'

const all_metrics : Array<Metric> = [
    { name : 'all_conversions', is_number : true },
    { name : 'cost_micros', is_number : true },
    { 
        name : 'cost',
        is_custom : true,
        is_micros : true,
        is_number : true,
        pre_query_hook : (report: ReportConfig): ReportConfig => {
            if(report.metrics){
                report.metrics.push('metrics.cost_micros')
            }

            report.metrics = reject(report.metrics, i => i === 'metrics.cost')

            if(!report.constraints || isString(report.constraints)){
                return report
            }

            // const _constraints = []

            const cost_constraint = find(report.constraints, { key: 'metrics.cost'})

            if(!cost_constraint){
                return report
            }

            report.constraints.push({
                key : 'metrics.cost_micros',
                op : cost_constraint.op,
                val : cost_constraint.val * 1000000
            })

            report.constraints = reject(report.constraints, { key : 'metrics.cost'})

            return report
        },
        post_query_hook : (result_object: { [key: string]: any }) => {
            result_object = cloneDeep(result_object)
            result_object.metrics.cost = +result_object.metrics.cost_micros
            return result_object
        } 
    },
    { name : 'average_cpc', is_micros : true, is_number : true}
]

export default all_metrics