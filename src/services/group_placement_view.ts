// @ts-ignore
import { GroupPlacementView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The group_placement_view entity:

const group_placement_view = {
    placement: 'string', // The automatic placement string at group level, e. g. web domain, mobile app ID, or a YouTube channel ID.
    target_url: 'string', // URL of the group placement, e.g. domain, link to the mobile application in app store, or a YouTube channel URL.
    resource_name: 'string', // The resource name of the group placement view. Group placement view resource names have the form:   `customers/{customer_id}/groupPlacementViews/{ad_group_id}~{base64_placement}`
    placement_type:
        'UNSPECIFIED | UNKNOWN | WEBSITE | MOBILE_APP_CATEGORY | MOBILE_APPLICATION | YOUTUBE_VIDEO | YOUTUBE_CHANNEL', // Type of the placement, e.g. Website, YouTube Channel, Mobile Application.
    display_name: 'string', // Domain name for websites and YouTube channel name for YouTube channels.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'groupPlacementViews'
const GET_METHOD = 'getGroupPlacementView'
const GET_REQUEST = 'GetGroupPlacementViewRequest'

export default class GroupPlacementViewService extends Service {
    public async get(id: number | string): Promise<GroupPlacementView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as GroupPlacementView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ group_placement_view: GroupPlacementView }>> {
        return this.getListResults('group_placement_view', options)
    }
}
