
const text_ad = {
    headline: '',
    description1: '',
    description2: ''
}
const expanded_text_ad = {
    headline_part1: '',
    headline_part2: '',
    description: '',
    path1: '',
    path2: ''
}
const dynamic_search_ad = {
    description1: '',
    description2: ''
}
const responsive_display_ad = {
    short_headline: '',
    long_headline: '',
    description: '',
    business_name: ''
}
const call_only_ad = {
    country_code: '',
    phone_number: '',
    business_name: '',
    description1: '',
    description2: '',
    call_tracked: '',
    disable_call_conversion: '',
    phone_number_verification_url: ''
}
const expanded_dynamic_search_ad = {
    description: '',
}
const ad =  {
    id: '',
    final_urls: '',
    final_mobile_urls: '',
    tracking_url_template: '',
    url_custom_parameters: '',
    display_url: '',
    type: '',
    text_ad,
    expanded_text_ad,
    dynamic_search_ad,
    responsive_display_ad,
    call_only_ad,
    expanded_dynamic_search_ad,
    hotel_ad: '',
    shopping_smart_ad: ''
}


const quality_info = {
    quality_score: '',
    creative_quality_score: '',
    post_click_quality_score: '',
    search_predicted_ctr: '',
}
const position_estimates = {
    first_page_cpc_micros: '',
    first_position_cpc_micros: '',
    top_of_page_cpc_micros: '',
}


const network_settings = {
    target_google_search: '',
    target_search_network: '',
    target_content_network: '',
    target_partner_search_network: '',
}
const hotel_setting = {
    hotel_center_id: ''
}
const dynamic_search_ads_setting = {
    domain_name: '',
    language_code: '',
    use_supplied_urls_only: '',
    feed_ids: ''
}
const shopping_setting = {
    merchant_id: '',
    sales_country: '',
    campaign_priority: '',
    enable_local: ''
}


const entities : { [key: string]: object } = {
    ad_group_ad: {
        status: '',
        ad_group: '',
        ad
    },
    ad_group: {
        id: '',
        name: '',
        status: '',
        type: '',
        tracking_url_template: '',
        url_custom_parameters: '',
        campaign: '',
        cpc_bid_micros: '',
        cpm_bid_micros: '',
        cpa_bid_micros: '',
        cpv_bid_micros: '',
        target_roas_override: '',
        percent_cpc_bid_micros: '',
    },
    ad_group_criterion: {
        criterion_id: '',
        status: '',
        quality_info,
        ad_group: '',
        type: '',
        negative: '',
        cpc_bid_micros: '',
        cpm_bid_micros: '',
        cpv_bid_micros: '',
        percent_cpc_bid_micros: '',
        effective_cpc_bid_micros: '',
        effective_cpm_bid_micros: '',
        effective_cpv_bid_micros: '',
        effective_percent_cpc_bid_micros: '',
        effective_cpc_bid_source: '',
        effective_cpm_bid_source: '',
        effective_cpv_bid_source: '',
        effective_percent_cpc_bid_source: '',
        position_estimates,
        final_urls: '',
        tracking_url_template: '',
        url_custom_parameters: '',
    },
    campaign: {
        id: '',
        name: '',
        status: '',
        serving_status: '',
        ad_serving_optimization_status: '',
        advertising_channel_type: '',
        advertising_channel_sub_type: '',
        tracking_url_template: '',
        url_custom_parameters: '',
        network_settings,
        hotel_setting,
        dynamic_search_ads_setting,
        shopping_setting,
        campaign_budget: '',
        bidding_strategy_type: '',
        start_date: '',
        campaign_group: '',
        end_date: '',
    },
    // 'campaign_budget': [
    //     'id',
    //     'name',
    //     'amount_micros',
    //     'status',
    //     'delivery_method',
    //     'explicitly_shared',
    //     'reference_count',
    // ],
    // 'campaign_criterion': [
    //     'campaign',
    //     'criterion_id',
    //     'bid_modifier',
    //     'negative',
    //     'type',
    // ],
    // 'campaign_shared_set': [
    //     'campaign',
    //     'shared_set',
    //     'status'
    // ]
} 

export default entities