import GoogleAdsJs from '..'
import config from '../config'

describe('Campaign Ad Schedules', async () => {
    const lib_instance = new GoogleAdsJs({
		client_id: config.client_id, 
		client_secret: config.client_secret, 
		developer_token: config.developer_token
    })

    const customer = lib_instance.Customer({
		customer_account_id: config.cid, 
		refresh_token: config.refresh_token
    })
    
    const campaign_id = 1485014801            
    let criterion_id = ''
    
    it('Lists Campaign Ad Schedules', async () => {
        expect.assertions(1)
        const criterions = await customer.campaignAdSchedules.list({
            fields: ['criterion_id', 'type'],
            constraints: {
                campaign_id,
                type: 'AD_SCHEDULE'
            }
        })
        expect(criterions).toBeInstanceOf(Array)
    }) 

    it('Creates New Campaign Ad Schedule', async (done) => {
        expect.assertions(1)
        const new_criterion = await customer.campaignAdSchedules.create({ 
            campaign_id,
            ad_schedule: {
                day_of_week: 'FRIDAY',
                start_hour: 10,
                end_hour: 18,
                start_minute: 'ZERO',
                end_minute: 'ZERO'
            }
        })

        expect(new_criterion).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String)
        })
        criterion_id = new_criterion.id
        done()
    }) 
    
    it('Retrieves Single Campaign Ad Schedule', async (done) => {
        expect.assertions(1)
        const ad_schedule = await customer.campaignAdSchedules.retrieve(criterion_id)

        expect(ad_schedule).toEqual({ 
            resource_name: expect.any(String),
            campaign: expect.any(String),
            criterion_id: expect.any(String),
            type: 'AD_SCHEDULE',
            negative: false,
            ad_schedule: { 
                start_minute: 'ZERO',
                end_minute: 'ZERO',
                start_hour: 10,
                end_hour: 18,
                day_of_week: 'FRIDAY' 
            } 
        })
        done()
    }) 

    it('Updates Campaign Ad Schedule', async () => {
        expect.assertions(1)
        await customer.campaignAdSchedules.update({
            id: criterion_id,
            update: {
                bid_modifier: 0.3
            }
        })

        const updated_ad_schedule = await customer.campaignAdSchedules.retrieve(criterion_id)
        expect(updated_ad_schedule.bid_modifier).toEqual(0.3)
    }) 

    it('Deletes Campaign Ad Schedule', async () => {
        expect.assertions(1)
        const res = await customer.campaignAdSchedules.delete(criterion_id)
        expect(res).toEqual({
            results: expect.any(Object)
        })
    }) 

})