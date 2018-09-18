import { merge, uniq, cloneDeep, reject } from 'lodash'
import { Metric, ReportConfig } from './types/Global'

const all_metrics : Array<Metric> = [
    { name : 'all_conversions' },
    { name : 'cost_micros'},
    { 
        name : 'cost',
        is_custom : true,
        is_micros : true,
        pre_query_hook : (report: ReportConfig): ReportConfig => {
            
            report.metrics = uniq(merge([
                report.metrics,
                ['metrics.cost_micros']
            ]))

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

export default all_metrics