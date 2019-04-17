// @ts-ignore
import { BillingSetup } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The billing_setup entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'billingSetup'
const MUTATE_METHOD = 'mutateBillingSetup'
const MUTATE_REQUEST = 'MutateBillingSetupRequest'
const OPERATION_REQUEST = 'BillingSetupOperation'
const GET_METHOD = 'getBillingSetup'
const GET_REQUEST = 'GetBillingSetupRequest'
const RESOURCE = 'BillingSetup'

export default class BillingSetupService extends Service {
    public async get(id: number | string): Promise<BillingSetup> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as BillingSetup
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ billing_setup: BillingSetup }>> {
        return this.getListResults('billing_setup', options)
    }

    public async create(
        billing_setup: BillingSetup | Array<BillingSetup>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, billing_setup],
            ...options,
        })
    }

    public async update(
        billing_setup: BillingSetup | Array<BillingSetup>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, billing_setup],
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
