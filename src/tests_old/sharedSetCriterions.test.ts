import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

const getRandomCriterionText = () => `test-keyword-${(Math.random() * 1000000 + 1).toFixed(0)}`

describe('Shared Set Criterions (Keyword)', async () => {
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

    let criterion_id = ''
    let criterion_id_1 = ''
    let criterion_id_2 = ''
    const keyword_text: string = getRandomCriterionText()
    const keyword_text_1: string = getRandomCriterionText()
    const keyword_text_2: string = getRandomCriterionText()

    it('Lists Shared Set Criterions', async () => {
        expect.assertions(1)
        const criterions = await customer.sharedSetCriterions.list()
        expect(criterions).toBeInstanceOf(Array)
    })

    it('Creates New Shared Set Criterion', async done => {
        expect.assertions(1)
        const new_criterion = await customer.sharedSetCriterions.create({
            shared_set_id: 1788591305,
            keyword: {
                text: keyword_text,
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

    it('Creates Multiple New Shared Set Criteria', async done => {
        expect.assertions(1)

        const new_criteria = await customer.sharedSetCriterions.create([
            {
                shared_set_id: 1788591305,
                keyword: {
                    text: keyword_text_1,
                    match_type: 'EXACT',
                },
            },
            {
                shared_set_id: 1788591305,
                keyword: {
                    text: keyword_text_2,
                    match_type: 'EXACT',
                },
            },
        ])

        expect(new_criteria).toContainEqual(
            expect.objectContaining({
                id: expect.any(String),
                resource_name: expect.any(String),
            })
        )

        const criteria_ids = new_criteria.map((x: any, i: number) => x.id)
        criterion_id_1 = criteria_ids[0]
        criterion_id_2 = criteria_ids[1]
        done()
    })

    it('Retrieves Single Shared Set', async () => {
        expect.assertions(1)
        const criterion = await customer.sharedSetCriterions.retrieve(criterion_id)
        expect(criterion_id).toContain(criterion.criterion_id)
    })

    it('Deletes Shared Set Criterion', async () => {
        await customer.sharedSetCriterions.delete(criterion_id)
        await customer.sharedSetCriterions.delete(criterion_id_1)
        await customer.sharedSetCriterions.delete(criterion_id_2)
    })
})
