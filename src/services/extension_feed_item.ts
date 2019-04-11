// @ts-ignore
import { ExtensionFeedItem } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The extension_feed_item entity:

const extension_feed_item = {
    structured_snippet_feed_item: {
        header: 'string', // The header of the snippet. This string must not be empty.
        values: 'array', // The values in the snippet. The maximum size of this collection is 10.
    },
    sitelink_feed_item: {
        line_2: 'string', // Second line of the description for the sitelink. If this value is set, line1 must also be set. The length of this string should be between 0 and 35, inclusive.
        link_text: 'string', // URL display text for the sitelink. The length of this string should be between 1 and 25, inclusive.
        final_mobile_urls: 'array', // A list of possible final mobile URLs after all cross domain redirects.
        tracking_url_template: 'string', // URL template for constructing a tracking URL.
        line_1: 'string', // First line of the description for the sitelink. If this value is set, line2 must also be set. The length of this string should be between 0 and 35, inclusive.
        final_urls: 'array', // A list of possible final URLs after all cross domain redirects.
        url_custom_parameters: 'array', // A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.
        final_url_suffix: 'string', // Final URL suffix to be appended to landing page URLs served with parallel tracking.
    },
    extension_type:
        'UNSPECIFIED | UNKNOWN | NONE | APP | CALL | CALLOUT | MESSAGE | PRICE | PROMOTION | REVIEW | SITELINK | STRUCTURED_SNIPPET', // The extension type of the extension feed item. This field is read-only.
    callout_feed_item: {
        callout_text: 'string', // The callout text. The length of this string should be between 1 and 25, inclusive.
    },
    call_feed_item: {
        call_conversion_reporting_state:
            'UNSPECIFIED | UNKNOWN | DISABLED | USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION | USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION', // Enum value that indicates whether this call extension uses its own call conversion setting (or just have call conversion disabled), or following the account level setting.
        phone_number: 'string', // The advertiser's phone number to append to the ad. This string must not be empty.
        call_conversion_action: 'string', // The conversion action to attribute a call conversion to. If not set a default conversion action is used. This field only has effect if call_tracking_enabled is set to true. Otherwise this field is ignored.
        country_code: 'string', // Uppercase two-letter country code of the advertiser's phone number. This string must not be empty.
        call_tracking_enabled: 'boolean', // Indicates whether call tracking is enabled. By default, call tracking is not enabled.
        call_conversion_tracking_disabled: 'boolean', // If true, disable call conversion tracking. call_conversion_action should not be set if this is true. Optional.
    },
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED', // Status of the feed item. This field is read-only.
    start_date_time: 'string', // Start time in which this feed item is effective and can begin serving. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"
    price_feed_item: {
        type:
            'UNSPECIFIED | UNKNOWN | BRANDS | EVENTS | LOCATIONS | NEIGHBORHOODS | PRODUCT_CATEGORIES | PRODUCT_TIERS | SERVICES | SERVICE_CATEGORIES | SERVICE_TIERS', // Price extension type of this extension.
        price_qualifier: 'UNSPECIFIED | UNKNOWN | FROM | UP_TO | AVERAGE', // Price qualifier for all offers of this price extension.
        price_offerings: 'array', // The price offerings in this price extension.
        final_url_suffix: 'string', // URL template for appending params to landing page URLs served with parallel tracking.
        tracking_url_template: 'string', // Tracking URL template for all offers of this price extension.
        language_code: 'string', // The code of the language used for this price extension.
    },
    end_date_time: 'string', // End time in which this feed item is no longer effective and will stop serving. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"
    resource_name: 'string', // The resource name of the extension feed item. Extension feed item resource names have the form:  `customers/{customer_id}/extensionFeedItems/{feed_item_id}`
    app_feed_item: {
        app_id: 'string', // The store-specific ID for the target application. This string must not be empty.
        final_urls: 'array', // A list of possible final URLs after all cross domain redirects.
        url_custom_parameters: 'array', // A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.
        final_url_suffix: 'string', // URL template for appending params to landing page URLs served with parallel tracking.
        app_store: 'UNSPECIFIED | UNKNOWN | APPLE_ITUNES | GOOGLE_PLAY', // The application store that the target application belongs to.
        final_mobile_urls: 'array', // A list of possible final mobile URLs after all cross domain redirects.
        link_text: 'string', // The visible text displayed when the link is rendered in an ad. The length of this string should be between 1 and 25, inclusive.
        tracking_url_template: 'string', // URL template for constructing a tracking URL. Default value is "{lpurl}".
    },
    promotion_feed_item: {
        language_code: 'string', // The language of the promotion. Represented as BCP 47 language tag.
        discount_modifier: 'UNSPECIFIED | UNKNOWN | UP_TO', // Enum that modifies the qualification of the discount.
        percent_off: 'string', // Percentage off discount in the promotion in micros. One million is equivalent to one percent. Either this or money_off_amount is required.
        final_urls: 'array', // A list of possible final URLs after all cross domain redirects. This field is required.
        url_custom_parameters: 'array', // A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.
        promotion_end_date: 'string', // End date of when the promotion is eligible to be redeemed. This field is currently mutate only.
        final_url_suffix: 'string', // URL template for appending params to landing page URLs served with parallel tracking.
        occasion:
            'UNSPECIFIED | UNKNOWN | NEW_YEARS | CHINESE_NEW_YEAR | VALENTINES_DAY | EASTER | MOTHERS_DAY | FATHERS_DAY | LABOR_DAY | BACK_TO_SCHOOL | HALLOWEEN | BLACK_FRIDAY | CYBER_MONDAY | CHRISTMAS | BOXING_DAY | INDEPENDENCE_DAY | NATIONAL_DAY | END_OF_SEASON | WINTER_SALE | SUMMER_SALE | FALL_SALE | SPRING_SALE | RAMADAN | EID_AL_FITR | EID_AL_ADHA | SINGLES_DAY | WOMENS_DAY | HOLI | PARENTS_DAY | ST_NICHOLAS_DAY | CARNIVAL | EPIPHANY | ROSH_HASHANAH | PASSOVER | HANUKKAH | DIWALI | NAVRATRI | SONGKRAN | YEAR_END_GIFT', // The occasion the promotion was intended for. If an occasion is set, the redemption window will need to fall within the date range associated with the occasion.
        tracking_url_template: 'string', // URL template for constructing a tracking URL.
        money_amount_off: {
            currency_code: 'string', // Three-character ISO 4217 currency code.
            amount_micros: 'string', // Amount in micros. One million is equivalent to one unit.
        },
        promotion_code: 'string', // A code the user should use in order to be eligible for the promotion.
        promotion_target: 'string', // A freeform description of what the promotion is targeting. This field is required.
        promotion_start_date: 'string', // Start date of when the promotion is eligible to be redeemed. This field is currently mutate only.
        orders_over_amount: {
            currency_code: 'string', // Three-character ISO 4217 currency code.
            amount_micros: 'string', // Amount in micros. One million is equivalent to one unit.
        },
        final_mobile_urls: 'array', // A list of possible final mobile URLs after all cross domain redirects.
    },
    text_message_feed_item: {
        extension_text: 'string', // The message text populated in the messaging app.
        text: 'string', // The text to show in the ad. This field is required.
        phone_number: 'string', // The advertiser's phone number the message will be sent to. Required.
        business_name: 'string', // The business name to prepend to the message text. This field is required.
        country_code: 'string', // Uppercase two-letter country code of the advertiser's phone number. This field is required.
    },
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'extensionFeedItems'
const MUTATE_METHOD = 'mutateExtensionFeedItems'
const MUTATE_REQUEST = 'MutateExtensionFeedItemsRequest'
const OPERATION_REQUEST = 'ExtensionFeedItemOperation'
const GET_METHOD = 'getExtensionFeedItem'
const GET_REQUEST = 'GetExtensionFeedItemRequest'
const RESOURCE = 'ExtensionFeedItem'

export default class ExtensionFeedItemService extends Service {
    public async get(id: number | string): Promise<ExtensionFeedItem> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ExtensionFeedItem
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ extension_feed_item: ExtensionFeedItem }>> {
        return this.getListResults('extension_feed_item', options)
    }

    public async create(
        extension_feed_item: ExtensionFeedItem | Array<ExtensionFeedItem>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, extension_feed_item],
            ...options,
        })
    }

    public async update(
        extension_feed_item: ExtensionFeedItem | Array<ExtensionFeedItem>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, extension_feed_item],
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
