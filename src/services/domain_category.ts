// @ts-ignore
import { DomainCategory } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The domain_category entity:

const domain_category = {
    coverage_fraction: 'double', // Fraction of pages on your site that this category matches.
    language_code: 'string', // The language code specifying the language of the website. e.g. "en" for English. The language can be specified in the DynamicSearchAdsSetting required for dynamic search ads. This is the language of the pages from your website that you want Google Ads to find, create ads for, and match searches with.
    has_children: 'boolean', // Indicates whether this category has sub-categories.
    domain: 'string', // The domain for the website. The domain can be specified in the DynamicSearchAdsSetting required for dynamic search ads.
    category: 'string', // Recommended category for the website domain. e.g. if you have a website about electronics, the categories could be "cameras", "televisions", etc.
    recommended_cpc_bid_micros: 'int64', // The recommended cost per click for the category.
    campaign: 'string', // The campaign this category is recommended for.
    resource_name: 'string', // The resource name of the domain category. Domain category resource names have the form:   `customers/{customer_id}/domainCategories/{campaign_id}~{category_base64}~{language_code}`
    category_rank: 'int64', // The position of this category in the set of categories. Lower numbers indicate a better match for the domain. null indicates not recommended.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'domainCategories'
const GET_METHOD = 'getDomainCategory'
const GET_REQUEST = 'GetDomainCategoryRequest'

export default class DomainCategoryService extends Service {
    public async get(id: number | string): Promise<DomainCategory> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as DomainCategory
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ domain_category: DomainCategory }>> {
        return this.getListResults('domain_category', options)
    }
}
