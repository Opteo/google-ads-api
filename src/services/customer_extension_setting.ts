// @ts-ignore
import { CustomerExtensionSetting } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customerExtensionSettings'
const MUTATE_METHOD = 'mutateCustomerExtensionSettings'
const MUTATE_REQUEST = 'MutateCustomerExtensionSettingsRequest'
const OPERATION_REQUEST = 'CustomerExtensionSettingOperation'
const GET_METHOD = 'getCustomerExtensionSetting'
const GET_REQUEST = 'GetCustomerExtensionSettingRequest'
const RESOURCE = 'CustomerExtensionSetting'

export default class CustomerExtensionSettingService extends Service {
    public async get(id: number | string): Promise<CustomerExtensionSetting> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CustomerExtensionSetting
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ customer_extension_setting: CustomerExtensionSetting }>> {
        return this.getListResults('customer_extension_setting', options)
    }

    public async create(
        customer_extension_setting: CustomerExtensionSetting | Array<CustomerExtensionSetting>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_extension_setting],
            ...options,
        })
    }

    public async update(
        customer_extension_setting: CustomerExtensionSetting | Array<CustomerExtensionSetting>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_extension_setting],
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
