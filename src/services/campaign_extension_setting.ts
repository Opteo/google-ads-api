// @ts-ignore
import { CampaignExtensionSetting } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_extension_setting entity:

const campaign_extension_setting = {
    extension_feed_items: 'array', // The resource names of the extension feed items to serve under the campaign. ExtensionFeedItem resource names have the form:  `customers/{customer_id}/extensionFeedItems/{feed_item_id}`
    campaign: 'string', // The resource name of the campaign. The linked extension feed items will serve under this campaign. Campaign resource names have the form:  `customers/{customer_id}/campaigns/{campaign_id}`
    resource_name: 'string', // The resource name of the campaign extension setting. CampaignExtensionSetting resource names have the form:   `customers/{customer_id}/campaignExtensionSettings/{campaign_id}~{extension_type}`
    extension_type:
        'UNSPECIFIED | UNKNOWN | NONE | APP | CALL | CALLOUT | MESSAGE | PRICE | PROMOTION | REVIEW | SITELINK | STRUCTURED_SNIPPET', // The extension type of the customer extension setting.
    device: 'UNSPECIFIED | UNKNOWN | MOBILE | DESKTOP', // The device for which the extensions will serve. Optional.
}

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
