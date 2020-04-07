import { newCustomer } from '../test_utils'
import { enums } from '../index'
const customer = newCustomer()

describe('KeywordPlans', () => {
    let keywordPlanResource = ''
    let keywordPlanCampaignResource = ''
    let keywordPlanAdGroupResource = ''

    it('Creates A New Keyword Plan', async () => {
        expect.assertions(2)
        const { results } = await customer.keywordPlans.create({
            name: `Test Keyword Plan ${Date.now()}`,
            forecast_period: { date_interval: enums.KeywordPlanForecastInterval.NEXT_MONTH },
        })
        expect(results instanceof Array).toEqual(true)
        expect(typeof results[0] === 'string').toEqual(true)
        keywordPlanResource = results[0]
    })

    it('Creates A New Keyword Plan Campaign', async () => {
        expect.assertions(2)
        const { results } = await customer.keywordPlanCampaigns.create({
            keyword_plan: keywordPlanResource,
            name: `Test Campaign ${Date.now()}`,
            keyword_plan_network: enums.KeywordPlanNetwork.GOOGLE_SEARCH,
            cpc_bid_micros: 1000000,
            geo_targets: [{ geo_target_constant: 'geoTargetConstants/1021278' }],
            language_constants: ['languageConstants/1000'],
        })
        expect(results instanceof Array).toEqual(true)
        expect(typeof results[0] === 'string').toEqual(true)
        keywordPlanCampaignResource = results[0]
    })

    it('Creates A New Keyword Plan Ad Group', async () => {
        expect.assertions(2)
        const { results } = await customer.keywordPlanAdGroups.create({
            name: `Test Ad Group ${Date.now()}`,
            cpc_bid_micros: 2500000,
            keyword_plan_campaign: keywordPlanCampaignResource,
        })
        expect(results instanceof Array).toEqual(true)
        expect(typeof results[0] === 'string').toEqual(true)
        keywordPlanAdGroupResource = results[0]
    })

    it('Creates New Keyword Plan Keywords', async () => {
        expect.assertions(3)
        const { results } = await customer.keywordPlanKeywords.create([
            {
                text: 'mars cruise',
                match_type: enums.KeywordMatchType.BROAD,
                cpc_bid_micros: 2000000,
                keyword_plan_ad_group: keywordPlanAdGroupResource,
            },
            {
                text: 'cheap cruise',
                match_type: enums.KeywordMatchType.PHRASE,
                cpc_bid_micros: 15000000,
                keyword_plan_ad_group: keywordPlanAdGroupResource,
            },
            {
                text: 'jupiter cruise',
                match_type: enums.KeywordMatchType.EXACT,
                cpc_bid_micros: 1990000,
                keyword_plan_ad_group: keywordPlanAdGroupResource,
            },
        ])
        expect(results instanceof Array).toEqual(true)
        expect(results.length).toEqual(3)
        expect(typeof results[0] === 'string').toEqual(true)
    })

    it('Creates A New Keyword Plan Negative Keyword', async () => {
        expect.assertions(2)
        const { results } = await customer.keywordPlanNegativeKeywords.create({
            text: 'moon walk',
            match_type: enums.KeywordMatchType.BROAD,
            keyword_plan_campaign: keywordPlanCampaignResource,
        })
        expect(results instanceof Array).toEqual(true)
        expect(typeof results[0] === 'string').toEqual(true)
    })

    it('Generates Forecast Metrics', async () => {
        const response = await customer.keywordPlans.generateForecastMetrics(keywordPlanResource.split('/')[3])
        const campaign_forecasts = response.campaign_forecasts!
        const ad_group_forecasts = response.ad_group_forecasts!
        const keyword_forecasts = response.keyword_forecasts!

        expect(campaign_forecasts instanceof Array).toEqual(true)
        expect(campaign_forecasts.length).toBeGreaterThanOrEqual(0)
        if (campaign_forecasts[0]) {
            expect(typeof campaign_forecasts[0].keyword_plan_campaign === 'string').toEqual(true)
            expect(campaign_forecasts[0].campaign_forecast).toHaveProperty('impressions')
        }

        expect(ad_group_forecasts instanceof Array).toEqual(true)
        expect(ad_group_forecasts.length).toBeGreaterThanOrEqual(0)
        if (ad_group_forecasts[0]) {
            expect(typeof ad_group_forecasts[0].keyword_plan_ad_group === 'string').toEqual(true)
            expect(ad_group_forecasts[0].ad_group_forecast).toHaveProperty('impressions')
        }

        expect(keyword_forecasts instanceof Array).toEqual(true)
        expect(keyword_forecasts.length).toBeGreaterThanOrEqual(0)
        if (keyword_forecasts[0]) {
            expect(typeof keyword_forecasts[0].keyword_plan_ad_group_keyword === 'string').toEqual(true)
            expect(keyword_forecasts[0].keyword_forecast).toHaveProperty('impressions')
        }
    })

    it('Generates Historical Metrics', async () => {
        expect.assertions(2)
        const response = await customer.keywordPlans.generateHistoricalMetrics(keywordPlanResource.split('/')[3])
        const metrics = response.metrics!
        expect(metrics instanceof Array).toEqual(true)
        expect(metrics.length).toBeGreaterThanOrEqual(0)
    })

    it('Deletes A Keyword Plan', async () => {
        expect.assertions(2)
        const { results } = await customer.keywordPlans.delete(keywordPlanResource)
        expect(results instanceof Array).toEqual(true)
        expect(typeof results[0] === 'string').toEqual(true)
    })
})
