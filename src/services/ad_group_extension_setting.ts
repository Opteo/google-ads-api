// @ts-ignore
import { AdGroupExtensionSetting } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupExtensionSettings'
const MUTATE_METHOD = 'mutateAdGroupExtensionSettings'
const MUTATE_REQUEST = 'MutateAdGroupExtensionSettingsRequest'
const OPERATION_REQUEST = 'AdGroupExtensionSettingOperation'
const GET_METHOD = 'getAdGroupExtensionSetting'
const GET_REQUEST = 'GetAdGroupExtensionSettingRequest'
const RESOURCE = 'AdGroupExtensionSetting'

export default class AdGroupExtensionSettingService extends Service {
    public async get(id: number | string): Promise<AdGroupExtensionSetting> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupExtensionSetting
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_extension_setting: AdGroupExtensionSetting }>> {
        return this.getListResults('ad_group_extension_setting', options)
    }

    public async create(
        ad_group_extension_setting: AdGroupExtensionSetting | Array<AdGroupExtensionSetting>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_extension_setting],
            ...options,
        })
    }

    public async update(
        ad_group_extension_setting: AdGroupExtensionSetting | Array<AdGroupExtensionSetting>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_extension_setting],
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
