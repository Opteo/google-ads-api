// @ts-ignore
import { CustomerLabel } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The customer_label entity:

const customer_label = {
    label: 'string', // The resource name of the label assigned to the customer.  Note: the Customer ID portion of the label resource name is not validated when creating a new CustomerLabel.
    customer: 'string', // The resource name of the customer to which the label is attached. Read only.
    resource_name: 'string', // Name of the resource. Customer label resource names have the form: `customers/{customer_id}/customerLabels/{label_id}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customerLabels'
const MUTATE_METHOD = 'mutateCustomerLabels'
const MUTATE_REQUEST = 'MutateCustomerLabelsRequest'
const OPERATION_REQUEST = 'CustomerLabelOperation'
const GET_METHOD = 'getCustomerLabel'
const GET_REQUEST = 'GetCustomerLabelRequest'
const RESOURCE = 'CustomerLabel'

export default class CustomerLabelService extends Service {
    public async get(id: number | string): Promise<CustomerLabel> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CustomerLabel
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ customer_label: CustomerLabel }>> {
        return this.getListResults('customer_label', options)
    }

    public async create(
        customer_label: CustomerLabel | Array<CustomerLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_label],
            ...options,
        })
    }

    public async update(
        customer_label: CustomerLabel | Array<CustomerLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_label],
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
