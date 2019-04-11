// @ts-ignore
import { BillingSetup } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The billing_setup entity:

const billing_setup = {
    start_date_time: 'string', // The start date time in yyyy-MM-dd or yyyy-MM-dd HH:mm:ss format. Only a future time is allowed.
    end_date_time: 'string', // The end date time in yyyy-MM-dd or yyyy-MM-dd HH:mm:ss format.
    payments_account: 'string', // The resource name of the Payments account associated with this billing setup. Payments resource names have the form:  `customers/{customer_id}/paymentsAccounts/{payments_account_id}` When setting up billing, this is used to signup with an existing Payments account (and then payments_account_info should not be set). When getting a billing setup, this and payments_account_info will be populated.
    resource_name: 'string', // The resource name of the billing setup. BillingSetup resource names have the form:  `customers/{customer_id}/billingSetups/{billing_setup_id}`
    payments_account_info: {
        payments_profile_id: 'string', // A 12 digit id used to identify the Payments profile associated with the billing setup.  This must be passed in as a string with dashes, e.g. "1234-5678-9012".
        payments_account_id: 'string', // A 16 digit id used to identify the Payments account associated with the billing setup.  This must be passed as a string with dashes, e.g. "1234-5678-9012-3456".
        payments_account_name: 'string', // The name of the Payments account associated with the billing setup.  This enables the user to specify a meaningful name for a Payments account to aid in reconciling monthly invoices.  This name will be printed in the monthly invoices.
        payments_profile_name: 'string', // The name of the Payments profile associated with the billing setup.
        secondary_payments_profile_id: 'string', // A secondary payments profile id present in uncommon situations, e.g. when a sequential liability agreement has been arranged.
    },
    status: 'UNSPECIFIED | UNKNOWN | PENDING | APPROVED_HELD | APPROVED | CANCELLED', // The status of the billing setup.
    start_time_type: 'UNSPECIFIED | UNKNOWN | NOW | FOREVER', // The start time as a type. Only NOW is allowed.
    end_time_type: 'UNSPECIFIED | UNKNOWN | NOW | FOREVER', // The end time as a type.  The only possible value is FOREVER.
    id: 'int64', // The ID of the billing setup.
}

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
