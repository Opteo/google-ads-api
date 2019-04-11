// @ts-ignore
import { UserList } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The user_list entity:

const user_list = {
    name: 'string', // Name of this user list. Depending on its access_reason, the user list name may not be unique (e.g. if access_reason=SHARED)
    membership_life_span: 'string', // Number of days a user's cookie stays on your list since its most recent addition to the list. This field must be between 0 and 540 inclusive. However, for CRM based userlists, this field can be set to 10000 which means no expiration.  It'll be ignored for logical_user_list.
    membership_status: 'UNSPECIFIED | UNKNOWN | OPEN | CLOSED', // Membership status of this user list. Indicates whether a user list is open or active. Only open user lists can accumulate more users and can be targeted to.
    closing_reason: 'UNSPECIFIED | UNKNOWN | UNUSED', // Indicating the reason why this user list membership status is closed. It is only populated on lists that were automatically closed due to inactivity, and will be cleared once the list membership status becomes open.
    id: 'string', // Id of the user list.
    access_reason: 'UNSPECIFIED | UNKNOWN | OWNED | SHARED | LICENSED | SUBSCRIBED | AFFILIATED', // Indicates the reason this account has been granted access to the list. The reason can be SHARED, OWNED, LICENSED or SUBSCRIBED.  This field is read-only.
    size_for_search: 'string', // Estimated number of users in this user list in the google.com domain. These are the users available for targeting in Search campaigns. This value is null if the number of users has not yet been determined.  This field is read-only.
    resource_name: 'string', // The resource name of the user list. User list resource names have the form:  `customers/{customer_id}/userLists/{user_list_id}`
    eligible_for_display: 'boolean', // Indicates this user list is eligible for Google Display Network.  This field is read-only.
    read_only: 'boolean', // A flag that indicates if a user may edit a list. Depends on the list ownership and list type. For example, external remarketing user lists are not editable.  This field is read-only.
    similar_user_list: {
        seed_user_list: 'string', // Seed UserList from which this list is derived.
    },
    size_range_for_display:
        'UNSPECIFIED | UNKNOWN | LESS_THAN_FIVE_HUNDRED | LESS_THAN_ONE_THOUSAND | ONE_THOUSAND_TO_TEN_THOUSAND | TEN_THOUSAND_TO_FIFTY_THOUSAND | FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND | ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND | THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND | FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION | ONE_MILLION_TO_TWO_MILLION | TWO_MILLION_TO_THREE_MILLION | THREE_MILLION_TO_FIVE_MILLION | FIVE_MILLION_TO_TEN_MILLION | TEN_MILLION_TO_TWENTY_MILLION | TWENTY_MILLION_TO_THIRTY_MILLION | THIRTY_MILLION_TO_FIFTY_MILLION | OVER_FIFTY_MILLION', // Size range in terms of number of users of the UserList, on the Google Display Network.  This field is read-only.
    integration_code: 'string', // An ID from external system. It is used by user list sellers to correlate IDs on their systems.
    type: 'UNSPECIFIED | UNKNOWN | REMARKETING | LOGICAL | EXTERNAL_REMARKETING | RULE_BASED | SIMILAR | CRM_BASED', // Type of this list.  This field is read-only.
    size_for_display: 'string', // Estimated number of users in this user list, on the Google Display Network. This value is null if the number of users has not yet been determined.  This field is read-only.
    eligible_for_search: 'boolean', // Indicates if this user list is eligible for Google Search Network.
    rule_based_user_list: {
        date_specific_rule_user_list: {
            end_date: 'string', // End date of users visit. If set to 2037-12-30, then the list includes all users after start_date. The date's format should be YYYY-MM-DD.  Required for creating a data specific rule user list.
            rule: {
                rule_item_groups: 'array', // List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.
                rule_type: 'UNSPECIFIED | UNKNOWN | AND_OF_ORS | OR_OF_ANDS', // Rule type is used to determine how to group rule items.  The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together.  Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.
            },
            start_date: 'string', // Start date of users visit. If set to 2000-01-01, then the list includes all users before end_date. The date's format should be YYYY-MM-DD.  Required for creating a data specific rule user list.
        },
        prepopulation_status: 'UNSPECIFIED | UNKNOWN | REQUESTED | FINISHED | FAILED', // The status of pre-population. The field is default to NONE if not set which means the previous users will not be considered. If set to REQUESTED, past site visitors or app users who match the list definition will be included in the list (works on the Display Network only). This will only add past users from within the last 30 days, depending on the list's membership duration and the date when the remarketing tag is added. The status will be updated to FINISHED once request is processed, or FAILED if the request fails.
        expression_rule_user_list: {
            rule: {
                rule_item_groups: 'array', // List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.
                rule_type: 'UNSPECIFIED | UNKNOWN | AND_OF_ORS | OR_OF_ANDS', // Rule type is used to determine how to group rule items.  The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together.  Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.
            },
        },
        combined_rule_user_list: {
            left_operand: {
                rule_item_groups: 'array', // List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.
                rule_type: 'UNSPECIFIED | UNKNOWN | AND_OF_ORS | OR_OF_ANDS', // Rule type is used to determine how to group rule items.  The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together.  Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.
            },
            right_operand: {
                rule_item_groups: 'array', // List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type.
                rule_type: 'UNSPECIFIED | UNKNOWN | AND_OF_ORS | OR_OF_ANDS', // Rule type is used to determine how to group rule items.  The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together.  Currently AND of ORs (conjunctive normal form) is only supported for ExpressionRuleUserList.
            },
            rule_operator: 'UNSPECIFIED | UNKNOWN | AND | AND_NOT', // Operator to connect the two operands.  Required for creating a combined rule user list.
        },
    },
    logical_user_list: {
        rules: 'array', // Logical list rules that define this user list. The rules are defined as a logical operator (ALL/ANY/NONE) and a list of user lists. All the rules are ANDed when they are evaluated.  Required for creating a logical user list.
    },
    description: 'string', // Description of this user list.
    crm_based_user_list: {
        app_id: 'string', // A string that uniquely identifies a mobile application from which the data was collected to the Google Ads API. For iOS, the ID string is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, the ID string is the application's package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). Required when creating CrmBasedUserList for uploading mobile advertising IDs.
        data_source_type: 'UNSPECIFIED | UNKNOWN | FIRST_PARTY | THIRD_PARTY_CREDIT_BUREAU | THIRD_PARTY_VOTER_FILE', // Data source of the list. Default value is FIRST_PARTY. Only whitelisted customers can create third-party sourced CRM lists.
        upload_key_type: 'UNSPECIFIED | UNKNOWN | CONTACT_INFO | CRM_ID | MOBILE_ADVERTISING_ID', // Matching key type of the list. Mixed data types are not allowed on the same list. This field is required for an ADD operation.
    },
    size_range_for_search:
        'UNSPECIFIED | UNKNOWN | LESS_THAN_FIVE_HUNDRED | LESS_THAN_ONE_THOUSAND | ONE_THOUSAND_TO_TEN_THOUSAND | TEN_THOUSAND_TO_FIFTY_THOUSAND | FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND | ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND | THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND | FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION | ONE_MILLION_TO_TWO_MILLION | TWO_MILLION_TO_THREE_MILLION | THREE_MILLION_TO_FIVE_MILLION | FIVE_MILLION_TO_TEN_MILLION | TEN_MILLION_TO_TWENTY_MILLION | TWENTY_MILLION_TO_THIRTY_MILLION | THIRTY_MILLION_TO_FIFTY_MILLION | OVER_FIFTY_MILLION', // Size range in terms of number of users of the UserList, for Search ads.  This field is read-only.
    basic_user_list: {
        actions: 'array', // Actions associated with this user list.
    },
    account_user_list_status: 'UNSPECIFIED | UNKNOWN | ENABLED | DISABLED', // Indicates if this share is still enabled. When a UserList is shared with the user this field is set to ENABLED. Later the userList owner can decide to revoke the share and make it DISABLED. The default value of this field is set to ENABLED.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'userLists'
const MUTATE_METHOD = 'mutateUserLists'
const MUTATE_REQUEST = 'MutateUserListsRequest'
const OPERATION_REQUEST = 'UserListOperation'
const GET_METHOD = 'getUserList'
const GET_REQUEST = 'GetUserListRequest'
const RESOURCE = 'UserList'

export default class UserListService extends Service {
    public async get(id: number | string): Promise<UserList> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as UserList
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ user_list: UserList }>> {
        return this.getListResults('user_list', options)
    }

    public async create(user_list: UserList | Array<UserList>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, user_list],
            ...options,
        })
    }

    public async update(user_list: UserList | Array<UserList>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, user_list],
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
