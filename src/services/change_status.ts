// @ts-ignore
import { ChangeStatus } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The change_status entity:

const change_status = {
    ad_group_feed: 'string', // The AdGroupFeed affected by this change.
    feed_item: 'string', // The FeedItem affected by this change.
    ad_group: 'string', // The AdGroup affected by this change.
    campaign: 'string', // The Campaign affected by this change.
    campaign_feed: 'string', // The CampaignFeed affected by this change.
    campaign_criterion: 'string', // The CampaignCriterion affected by this change.
    last_change_date_time: 'string', // Time at which the most recent change has occurred on this resource.
    resource_type:
        'UNSPECIFIED | UNKNOWN | AD_GROUP | AD_GROUP_AD | AD_GROUP_CRITERION | CAMPAIGN | CAMPAIGN_CRITERION | FEED | FEED_ITEM | AD_GROUP_FEED | CAMPAIGN_FEED | AD_GROUP_BID_MODIFIER', // Represents the type of the changed resource. This dictates what fields will be set. For example, for AD_GROUP, campaign and ad_group fields will be set.
    resource_status: 'UNSPECIFIED | UNKNOWN | ADDED | CHANGED | REMOVED', // Represents the status of the changed resource.
    ad_group_ad: 'string', // The AdGroupAd affected by this change.
    ad_group_criterion: 'string', // The AdGroupCriterion affected by this change.
    resource_name: 'string', // The resource name of the change status. Change status resource names have the form:  `customers/{customer_id}/changeStatus/{change_status_id}`
    feed: 'string', // The Feed affected by this change.
    ad_group_bid_modifier: 'string', // The AdGroupBidModifier affected by this change.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'changeStatus'
const GET_METHOD = 'getChangeStatus'
const GET_REQUEST = 'GetChangeStatusRequest'

export default class ChangeStatusService extends Service {
    public async get(id: number | string): Promise<ChangeStatus> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ChangeStatus
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ change_status: ChangeStatus }>> {
        return this.getListResults('change_status', options)
    }
}
