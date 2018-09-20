import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

const getRandomKeywordText = () => `test-negative-${(Math.random() * 1000000 + 1).toFixed(0)}`

// const log = (obj: object) => {
//     console.log(require('util').inspect(obj, false, null))
// }
describe('Campaign Negatives', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })

    const customer = lib_instance.Customer({
        customer_account_id: config.cid,
        refresh_token: config.refresh_token,
    })

    const campaign_id = 1485014801
    let criterion_id = ''

    it('Lists Campaign Negatives', async () => {
        expect.assertions(1)
        const criterions = await customer.campaignNegatives.list({
            constraints: ['campaign.id =' + campaign_id, { type: 'KEYWORD' }],
        })
        expect(criterions).toBeInstanceOf(Array)
    })

    it('Creates New Campaign Negative', async done => {
        expect.assertions(1)
        const new_criterion = await customer.campaignNegatives.create({
            campaign_id,
            negative: true,
            keyword: {
                text: getRandomKeywordText(),
                match_type: 'EXACT',
            },
        })
        expect(new_criterion).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
        })
        criterion_id = new_criterion.id
        done()
    })

    it('Retrieves Single Campaign Negative', async done => {
        expect.assertions(1)
        const negative_keyword = await customer.campaignNegatives.retrieve(criterion_id)

        expect(negative_keyword).toEqual({
            resource_name: expect.any(String),
            campaign: expect.any(String),
            criterion_id: expect.any(String),
            type: expect.any(String),
            negative: expect.any(Boolean),
            keyword: {
                text: expect.any(String),
                match_type: expect.any(String),
            },
        })
        done()
    })

    // it('Updates Campaign Negative', async () => {
    //     expect.assertions(1)
    //     const new_text = getRandomKeywordText()
    //     await customer.campaignNegatives.update({
    //         id: criterion_id,
    //         update: {
    //             keyword: {
    //                 text: new_text
    //             }
    //         }
    //     })

    //     const updated_keyword = await customer.campaignNegatives.retrieve(criterion_id)
    //     console.log(updated_keyword);
    //     expect(updated_keyword.keyword.text).toEqual(new_text)
    // })

    // it('Deletes Campaign Negative', async () => {
    //     expect.assertions(1)
    //     await customer.campaignNegatives.delete(criterion_id)
    //     const updated_keyword = await customer.campaignNegatives.retrieve(criterion_id)
    //     // console.log(updated_keyword);
    //     // expect(updated_keyword.status).toEqual('REMOVED')
    // })
})
