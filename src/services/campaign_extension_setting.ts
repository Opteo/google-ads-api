// @ts-ignore
import { CampaignExtensionSetting } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_extension_setting entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignExtensionSettings'
const MUTATE_METHOD = 'mutateCampaignExtensionSettings'
const MUTATE_REQUEST = 'MutateCampaignExtensionSettingsRequest'
const OPERATION_REQUEST = 'CampaignExtensionSettingOperation'
const GET_METHOD = 'getCampaignExtensionSetting'
const GET_REQUEST = 'GetCampaignExtensionSettingRequest'
const RESOURCE = 'CampaignExtensionSetting'

export default class CampaignExtensionSettingService extends Service {
    public async get(id: number | string): Promise<CampaignExtensionSetting> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignExtensionSetting
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ campaign_extension_setting: CampaignExtensionSetting }>> {
        return this.getListResults('campaign_extension_setting', options)
    }

    public async create(
        campaign_extension_setting: CampaignExtensionSetting | Array<CampaignExtensionSetting>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_extension_setting],
            ...options,
        })
    }

    public async update(
        campaign_extension_setting: CampaignExtensionSetting | Array<CampaignExtensionSetting>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_extension_setting],
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
