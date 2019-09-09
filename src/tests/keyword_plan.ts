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
        expect.assertions(12)

        const {
            campaignForecasts,
            adGroupForecasts,
            keywordForecasts,
        } = await customer.keywordPlans.generateForecastMetrics(keywordPlanResource.split('/')[3])

        expect(campaignForecasts instanceof Array).toEqual(true)
        expect(campaignForecasts.length).toEqual(1)
        expect(typeof campaignForecasts[0].keywordPlanCampaign === 'string').toEqual(true)
        expect(campaignForecasts[0].campaignForecast).toHaveProperty('impressions')

        expect(adGroupForecasts instanceof Array).toEqual(true)
        expect(adGroupForecasts.length).toEqual(1)
        expect(typeof adGroupForecasts[0].keywordPlanAdGroup === 'string').toEqual(true)
        expect(adGroupForecasts[0].adGroupForecast).toHaveProperty('impressions')

        expect(keywordForecasts instanceof Array).toEqual(true)
        expect(keywordForecasts.length).toEqual(3)
        expect(typeof keywordForecasts[0].keywordPlanAdGroupKeyword === 'string').toEqual(true)
        expect(keywordForecasts[0].keywordForecast).toHaveProperty('impressions')
    })

    it('Generates Historical Metrics', async () => {
        expect.assertions(3)
        const { metrics } = await customer.keywordPlans.generateHistoricalMetrics(keywordPlanResource.split('/')[3])
        expect(metrics instanceof Array).toEqual(true)
        expect(metrics.length).toEqual(3)
        expect(metrics[0]).toHaveProperty('searchQuery')
    })

    it('Deletes A Keyword Plan', async () => {
        expect.assertions(2)
        const { results } = await customer.keywordPlans.delete(keywordPlanResource)
        expect(results instanceof Array).toEqual(true)
        expect(typeof results[0] === 'string').toEqual(true)
    })
})
