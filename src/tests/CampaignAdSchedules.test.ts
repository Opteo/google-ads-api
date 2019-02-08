import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

describe('Campaign Ad Schedules', async () => {
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

    const campaign_id = 1485014801
    let criterion_id = ''
    let criterion_id_1 = ''
    let criterion_id_2 = ''

    it('Lists Campaign Ad Schedules', async () => {
        expect.assertions(1)
        const criterions = await customer.campaignAdSchedules.list({
            constraints: [{ 'campaign.id': campaign_id }, { type: 'AD_SCHEDULE' }],
        })
        expect(criterions).toBeInstanceOf(Array)
    })

    it('Creates New Campaign Ad Schedule', async done => {
        expect.assertions(1)
        const new_criterion = await customer.campaignAdSchedules.create({
            campaign_id,
            ad_schedule: {
                day_of_week: 'FRIDAY',
                start_hour: 10,
                end_hour: 18,
                start_minute: 'ZERO',
                end_minute: 'ZERO',
            },
        })

        expect(new_criterion).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
        })
        criterion_id = new_criterion.id
        done()
    })

    it('Creates 2 New Campaign Ad Schedules', async done => {
        expect.assertions(2)

        const new_criteria = await customer.campaignAdSchedules.create([
            {
                campaign_id,
                ad_schedule: {
                    day_of_week: 'WEDNESDAY',
                    start_hour: 10,
                    end_hour: 18,
                    start_minute: 'ZERO',
                    end_minute: 'ZERO',
                },
            },
            {
                campaign_id,
                ad_schedule: {
                    day_of_week: 'THURSDAY',
                    start_hour: 10,
                    end_hour: 18,
                    start_minute: 'ZERO',
                    end_minute: 'ZERO',
                },
            },
        ])

        expect(new_criteria).toContainEqual(
            expect.objectContaining({
                id: expect.any(String),
                resource_name: expect.any(String),
            })
        )

        const criteria_ids = new_criteria.map((x: any) => x.id)

        expect(criteria_ids.length).toEqual(2)

        criterion_id_1 = criteria_ids[0]
        criterion_id_2 = criteria_ids[1]

        done()
    })

    it('Retrieves Single Campaign Ad Schedule', async done => {
        expect.assertions(1)
        const ad_schedule = await customer.campaignAdSchedules.retrieve(criterion_id)
        expect(criterion_id).toContain(ad_schedule.criterion_id)
        done()
    })

    it('Updates Campaign Ad Schedule', async () => {
        expect.assertions(1)
        await customer.campaignAdSchedules.update({
            id: criterion_id,
            update: {
                bid_modifier: 0.3,
            },
        })

        const updated_ad_schedule = await customer.campaignAdSchedules.retrieve(criterion_id)
        expect(updated_ad_schedule.bid_modifier).toEqual(0.3)
    })

    it('Updates Multiple Campaign Ad Schedules', async () => {
        expect.assertions(2)

        await customer.campaignAdSchedules.update([
            {
                id: criterion_id_1,
                update: {
                    bid_modifier: 0.3,
                },
            },
            {
                id: criterion_id_2,
                update: {
                    bid_modifier: 0.2,
                },
            },
        ])

        const updated_ad_schedule_1 = await customer.campaignAdSchedules.retrieve(criterion_id_1)
        expect(updated_ad_schedule_1.bid_modifier).toEqual(0.3)

        const updated_ad_schedule_2 = await customer.campaignAdSchedules.retrieve(criterion_id_2)
        expect(updated_ad_schedule_2.bid_modifier).toEqual(0.2)
    })

    it('Deletes Campaign Ad Schedule', async () => {
        expect.assertions(3)
        const res = await customer.campaignAdSchedules.delete(criterion_id)
        expect(res).toBeInstanceOf(Object)

        const res1 = await customer.campaignAdSchedules.delete(criterion_id_1)
        expect(res1).toBeInstanceOf(Object)

        const res2 = await customer.campaignAdSchedules.delete(criterion_id_2)
        expect(res2).toBeInstanceOf(Object)
    })
})
