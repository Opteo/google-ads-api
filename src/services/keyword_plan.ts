// @ts-ignore
import { KeywordPlan } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The keyword_plan entity:

const keyword_plan = {
    resource_name: 'string', // The resource name of the Keyword Planner plan. KeywordPlan resource names have the form:  `customers/{customer_id}/keywordPlans/{kp_plan_id}`
    name: 'string', // The name of the keyword plan.  This field is required and should not be empty when creating new keyword plans.
    forecast_period: {
        date_interval: 'UNSPECIFIED | UNKNOWN | NEXT_WEEK | NEXT_MONTH | NEXT_QUARTER', // A future date range relative to the current date used for forecasting.
        date_range: {
            start_date: 'string', // The start date, in yyyy-mm-dd format.
            end_date: 'string', // The end date, in yyyy-mm-dd format.
        },
    },
    id: 'int64', // The ID of the keyword plan.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordPlans'
const MUTATE_METHOD = 'mutateKeywordPlans'
const MUTATE_REQUEST = 'MutateKeywordPlansRequest'
const OPERATION_REQUEST = 'KeywordPlanOperation'
const GET_METHOD = 'getKeywordPlan'
const GET_REQUEST = 'GetKeywordPlanRequest'
const RESOURCE = 'KeywordPlan'

export default class KeywordPlanService extends Service {
    public async get(id: number | string): Promise<KeywordPlan> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordPlan
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ keyword_plan: KeywordPlan }>> {
        return this.getListResults('keyword_plan', options)
    }

    public async create(
        keyword_plan: KeywordPlan | Array<KeywordPlan>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan],
            ...options,
        })
    }

    public async update(
        keyword_plan: KeywordPlan | Array<KeywordPlan>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan],
            ...options,
        })
    }

    public async delete(id: number | string, options?: ServiceCreateOptions) {
        return this.serviceDelete({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            entity_id: id,
            ...options,
        })
    }
}
