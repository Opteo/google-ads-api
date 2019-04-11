// @ts-ignore
import { AdGroupBidModifier } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The ad_group_bid_modifier entity:

const ad_group_bid_modifier = {
    ad_group: 'string', // The ad group to which this criterion belongs.
    hotel_length_of_stay: {
        max_nights: 'int64', // High end of the number of nights in the stay.
        min_nights: 'int64', // Low end of the number of nights in the stay.
    },
    base_ad_group: 'string', // The base ad group from which this draft/trial adgroup bid modifier was created. If ad_group is a base ad group then this field will be equal to ad_group. If the ad group was created in the draft or trial and has no corresponding base ad group, then this field will be null. This field is readonly.
    preferred_content: {
        type: 'UNSPECIFIED | UNKNOWN | YOUTUBE_TOP_CONTENT', // Type of the preferred content.
    },
    hotel_check_in_day: {
        day_of_week: 'UNSPECIFIED | UNKNOWN | MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY | SUNDAY', // The day of the week.
    },
    hotel_date_selection_type: {
        type: 'UNSPECIFIED | UNKNOWN | DEFAULT_SELECTION | USER_SELECTED', // Type of the hotel date selection
    },
    hotel_advance_booking_window: {
        max_days: 'int64', // High end of the number of days prior to the stay.
        min_days: 'int64', // Low end of the number of days prior to the stay.
    },
    resource_name: 'string', // The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form:  `customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}`
    bid_modifier_source: 'UNSPECIFIED | UNKNOWN | CAMPAIGN | AD_GROUP', // Bid modifier source.
    device: {
        type: 'UNSPECIFIED | UNKNOWN | MOBILE | TABLET | DESKTOP | OTHER', // Type of the device.
    },
    criterion_id: 'int64', // The ID of the criterion to bid modify.  This field is ignored for mutates.
    bid_modifier: 'double', // The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. The range is 1.0 - 6.0 for PreferredContent. Use 0 to opt out of a Device type.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupBidModifiers'
const MUTATE_METHOD = 'mutateAdGroupBidModifiers'
const MUTATE_REQUEST = 'MutateAdGroupBidModifiersRequest'
const OPERATION_REQUEST = 'AdGroupBidModifierOperation'
const GET_METHOD = 'getAdGroupBidModifier'
const GET_REQUEST = 'GetAdGroupBidModifierRequest'
const RESOURCE = 'AdGroupBidModifier'

export default class AdGroupBidModifierService extends Service {
    public async get(id: number | string): Promise<AdGroupBidModifier> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupBidModifier
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_bid_modifier: AdGroupBidModifier }>> {
        return this.getListResults('ad_group_bid_modifier', options)
    }

    public async create(
        ad_group_bid_modifier: AdGroupBidModifier | Array<AdGroupBidModifier>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_bid_modifier],
            ...options,
        })
    }

    public async update(
        ad_group_bid_modifier: AdGroupBidModifier | Array<AdGroupBidModifier>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_bid_modifier],
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
