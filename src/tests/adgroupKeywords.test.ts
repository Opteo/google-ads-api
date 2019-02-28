import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

const getRandomKeywordText = (): string => `test-keyword-${(Math.random() * 1000000 + 1).toFixed(0)}`

describe('AdGroup Keywords', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })

    const customer = lib_instance.Customer({
        customer_account_id: config.cid,
        manager_cid: config.manager_cid,
        refresh_token: config.refresh_token,
    })

    const ad_group_id = config.testing.ad_group_id
    let keyword_id = ''
    let keyword_id_1 = ''
    let keyword_id_2 = ''

    it('Lists All Keywords', async done => {
        expect.assertions(1)
        const keywords = await customer.adgroupCriterions.list({
            constraints: ['ad_group.id =' + ad_group_id],
        })
        expect(keywords).toBeInstanceOf(Array)
        done()
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

    it('Creates 2 New Keywords', async done => {
        expect.assertions(3)

        const keyword_text_1 = getRandomKeywordText()
        const keyword_text_2 = getRandomKeywordText()

        const new_keywords = await customer.keywords.create([
            {
                ad_group_id,
                keyword: {
                    text: keyword_text_1,
                    match_type: 'BROAD',
                },
            },
            {
                ad_group_id,
                keyword: {
                    text: keyword_text_2,
                    match_type: 'BROAD',
                },
            },
        ])

        expect(new_keywords).toContainEqual(
            expect.objectContaining({
                id: expect.any(String),
                resource_name: expect.any(String),
            })
        )

        const keyword_ids = new_keywords.map((x: any, i: number) => x.id)

        keyword_id_1 = keyword_ids[0]
        keyword_id_2 = keyword_ids[1]

        const keyword_data_1 = await customer.adgroupCriterions.retrieve(keyword_id_1)

        expect(keyword_data_1.keyword).toEqual({
            text: keyword_text_1,
            match_type: 'BROAD',
        })

        const keyword_data_2 = await customer.adgroupCriterions.retrieve(keyword_id_2)

        expect(keyword_data_2.keyword).toEqual({
            text: keyword_text_2,
            match_type: 'BROAD',
        })
        done()
    })

    it('Retrieves Keyword Data', async done => {
        expect.assertions(1)
        const keyword = await customer.keywords.retrieve(keyword_id)
        expect(keyword_id).toContain(keyword.criterion_id)
        done()
    })

    it('Updates Keyword', async done => {
        expect.assertions(1)
        await customer.adgroupCriterions.update({
            id: keyword_id,
            update: {
                status: 'PAUSED',
            },
        })

        const updated_keyword = await customer.keywords.retrieve(keyword_id)
        expect(updated_keyword.status).toEqual('PAUSED')
        done()
    })

    it('Updates Multiple Keywords', async () => {
        expect.assertions(2)

        const update_config = [
            {
                id: keyword_id_1,
                update: {
                    status: 'PAUSED',
                },
            },
            {
                id: keyword_id_2,
                update: {
                    status: 'PAUSED',
                },
            },
        ]

        await customer.adgroupCriterions.update(update_config)

        const updated_keyword_1 = await customer.keywords.retrieve(keyword_id_1)
        expect(updated_keyword_1.status).toEqual('PAUSED')

        const updated_keyword_2 = await customer.keywords.retrieve(keyword_id_2)
        expect(updated_keyword_2.status).toEqual('PAUSED')
    })

    // it('Deletes Keyword', async () => {
    //     expect.assertions(1)
    //     console.log(keyword_id)
    //     await customer.keywords.delete(keyword_id)
    //     const updated_keyword = await customer.keywords.retrieve(keyword_id)
    //     expect(updated_keyword.status).toEqual('REMOVED')
    // })
})
