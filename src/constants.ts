export const ADWORDS_API_BASE_URL = 'https://googleads.googleapis.com/v0/customers/'
export const ADWORDS_AUTH_URL = 'https://accounts.google.com/o/oauth2/token'

export enum ENDPOINTS {
    search = 'googleAds:search',
    campaigns = 'campaigns',
    campaign_budgets = 'campaignBudgets',
    campaign_criteria = 'campaignCriteria',
    campaign_shared_sets = 'campaignSharedSets',
    customers = 'customers',
    adgroups = 'adGroups',
    ads = 'adGroupAds',
    adgroup_critera = 'adGroupCriteria',
    shared_sets = 'sharedSets',
    shared_set_criteria = 'sharedCriteria',
    conversion_actions = 'conversionActions',
}

export enum RESOURCE_NAMES {
    campaign = 'campaign',
    campaign_budget = 'campaign_budget',
    campaign_criteria = 'campaign_criterion',
    campaign_shared_set = 'campaign_shared_set',
    adgroup = 'ad_group',
    ad = 'ad_group_ad',
    adgroup_critera = 'ad_group_criterion',
    shared_set = 'shared_set',
    shared_set_criterion = 'shared_criterion',
    conversion_action = 'conversion_action',
}
