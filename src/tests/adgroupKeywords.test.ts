import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

const getRandomKeywordText = () => `test-keyword-${(Math.random() * 1000000 + 1).toFixed(0)}`

describe('AdGroup Keywords', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })

    const customer = lib_instance.Customer({
        customer_account_id: config.cid,
        refresh_token: config.refresh_token,
    })

    const ad_group_id = 60170225920
    let keyword_id = ''

    it('Lists All Keywords', async () => {
        expect.assertions(1)
        const keywords = await customer.adgroupCriterions.list({
            constraints: ['ad_group.id =' + ad_group_id],
        })
        expect(keywords).toBeInstanceOf(Array)
    })

    it('Creates New Keyword', async done => {
        expect.assertions(1)
        const keyword_text = getRandomKeywordText()

        const new_keyword = await customer.keywords.create({
            ad_group_id,
            keyword: {
                text: keyword_text,
                match_type: 'BROAD',
            },
        })

        keyword_id = new_keyword.id
        const keyword_data = await customer.adgroupCriterions.retrieve(keyword_id)

        expect(keyword_data.keyword).toEqual({
            text: keyword_text,
            match_type: 'BROAD',
        })
        done()
    })

    it('Retrieves Keyword Data', async done => {
        expect.assertions(1)
        const keyword = await customer.keywords.retrieve(keyword_id)
        // console.log(keyword)
        expect(keyword).toEqual({
            ad_group: expect.any(String),
            criterion_id: expect.any(String),
            effective_cpc_bid_micros: expect.any(String),
            effective_cpc_bid_source: expect.any(String),
            effective_cpm_bid_micros: expect.any(String),
            effective_cpm_bid_source: expect.any(String),
            keyword: {
                text: expect.any(String),
                match_type: expect.any(String),
            },
            negative: expect.any(Boolean),
            quality_info: {
                creative_quality_score: expect.any(String),
                post_click_quality_score: expect.any(String),
                quality_score: expect.any(Number),
                search_predicted_ctr: expect.any(String),
            },
            resource_name: expect.any(String),
            status: expect.any(String),
            type: expect.any(String),
            // position_estimates: expect.any(Object),
        })
        done()
    })

    it('Updates Keyword', async () => {
        expect.assertions(1)
        await customer.adgroupCriterions.update({
            id: keyword_id,
            update: {
                status: 'PAUSED',
            },
        })

        const updated_keyword = await customer.keywords.retrieve(keyword_id)
        expect(updated_keyword.status).toEqual('PAUSED')
    })

    // it('Deletes Keyword', async () => {
    //     expect.assertions(1)
    //     console.log(keyword_id)
    //     await customer.keywords.delete(keyword_id)
    //     const updated_keyword = await customer.keywords.retrieve(keyword_id)
    //     expect(updated_keyword.status).toEqual('REMOVED')
    // })
})
