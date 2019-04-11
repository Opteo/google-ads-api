// @ts-ignore
import { ConversionAction } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The conversion_action entity:

const conversion_action = {
    include_in_conversions_metric: 'boolean', // Whether this conversion action should be included in the "conversions" metric.
    click_through_lookback_window_days: 'string', // The maximum number of days that may elapse between an interaction (e.g., a click) and a conversion event.
    app_id: 'string', // App ID for an app conversion action.
    type:
        'UNSPECIFIED | UNKNOWN | AD_CALL | CLICK_TO_CALL | GOOGLE_PLAY_DOWNLOAD | GOOGLE_PLAY_IN_APP_PURCHASE | UPLOAD_CALLS | UPLOAD_CLICKS | WEBPAGE | WEBSITE_CALL', // The type of this conversion action.
    view_through_lookback_window_days: 'string', // The maximum number of days which may elapse between an impression and a conversion without an interaction.
    owner_customer: 'string', // The resource name of the conversion action owner customer, or null if this is a system-defined conversion action.
    tag_snippets: 'array', // The snippets used for tracking conversions.
    attribution_model_settings: {
        attribution_model:
            'UNSPECIFIED | UNKNOWN | EXTERNAL | GOOGLE_ADS_LAST_CLICK | GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK | GOOGLE_SEARCH_ATTRIBUTION_LINEAR | GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY | GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED | GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN', // The attribution model type of this conversion action.
        data_driven_model_status: 'UNSPECIFIED | UNKNOWN | AVAILABLE | STALE | EXPIRED | NEVER_GENERATED', // The status of the data-driven attribution model for the conversion action.
    },
    phone_call_duration_seconds: 'string', // The phone call duration in seconds after which a conversion should be reported for this conversion action.  The value must be between 0 and 10000, inclusive.
    counting_type: 'UNSPECIFIED | UNKNOWN | ONE_PER_CLICK | MANY_PER_CLICK', // How to count conversion events for the conversion action.
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED | HIDDEN', // The status of this conversion action for conversion event accrual.
    name: 'string', // The name of the conversion action.  This field is required and should not be empty when creating new conversion actions.
    category: 'UNSPECIFIED | UNKNOWN | DEFAULT | PAGE_VIEW | PURCHASE | SIGNUP | LEAD | DOWNLOAD', // The category of conversions reported for this conversion action.
    id: 'string', // The ID of the conversion action.
    value_settings: {
        default_value: 'number', // The value to use when conversion events for this conversion action are sent with an invalid, disallowed or missing value, or when this conversion action is configured to always use the default value.
        default_currency_code: 'string', // The currency code to use when conversion events for this conversion action are sent with an invalid or missing currency code, or when this conversion action is configured to always use the default value.
        always_use_default_value: 'boolean', // Controls whether the default value and default currency code are used in place of the value and currency code specified in conversion events for this conversion action.
    },
    resource_name: 'string', // The resource name of the conversion action. Conversion action resource names have the form:  `customers/{customer_id}/conversionActions/{conversion_action_id}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'conversionActions'
const MUTATE_METHOD = 'mutateConversionActions'
const MUTATE_REQUEST = 'MutateConversionActionsRequest'
const OPERATION_REQUEST = 'ConversionActionOperation'
const GET_METHOD = 'getConversionAction'
const GET_REQUEST = 'GetConversionActionRequest'
const RESOURCE = 'ConversionAction'

export default class ConversionActionService extends Service {
    public async get(id: number | string): Promise<ConversionAction> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ConversionAction
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ conversion_action: ConversionAction }>> {
        return this.getListResults('conversion_action', options)
    }

    public async create(
        conversion_action: ConversionAction | Array<ConversionAction>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, conversion_action],
            ...options,
        })
    }

    public async update(
        conversion_action: ConversionAction | Array<ConversionAction>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, conversion_action],
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
