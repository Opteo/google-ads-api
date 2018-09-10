import GoogleAdsJs from '..'
import config from '../config'

const getRandomCampaignName = () => `test-campaign-${((Math.random() * 100) + 1).toFixed(0)} (created during library test)`

describe('Campaigns', async () => {
	const lib_instance = new GoogleAdsJs({
		client_id: config.client_id, 
		client_secret: config.client_secret, 
		developer_token: config.developer_token
	})
	
	const customer = lib_instance.Customer({
		customer_account_id: config.cid, 
		refresh_token: config.refresh_token
	})

	let new_campaign_id = ''

	it('Lists All Campaigns', async () => {
		const config = {
			limit: 2,
			fields: [
				'id',
				'name',
				'status'
			],
			constraints: {
				status: 'ENABLED',
			}
		}
		expect.assertions(1)
		const campaigns = await customer.campaigns.list(config)
		expect(campaigns).toBeInstanceOf(Array)
		// console.log(campaigns)
	})

	it('Creates New Campaign', async (done) => {
		expect.assertions(1)

		const response  = await customer.campaignBudgets.create({
            amount_micros: 12000000,
			explicitly_shared: false
		})
		
		const new_campaign = await customer.campaigns.create({
				name: getRandomCampaignName(),
				budget_id: response.id,
				advertising_channel_type: 'DISPLAY',
				target_spend: {
					cpc_bid_ceiling_micros: 1000000
				}
		})

		expect(new_campaign).toEqual({
			id: expect.any(String),
			resource_name: expect.any(String)
		})

		new_campaign_id = new_campaign.id
		done()
	})

	it('Retrieves Single Campaign', async () => {
		expect.assertions(1)
		const campaign = await customer.campaigns.retrieve(new_campaign_id)	

		expect(campaign).toEqual({
			resource_name: expect.any(String),
			id: expect.any(String),
			name: expect.any(String),
			status: expect.any(String),
			campaign_budget: expect.any(String),
			ad_serving_optimization_status: expect.any(String),
			advertising_channel_type: expect.any(String),
			network_settings: { 
				target_google_search: expect.any(Boolean),
				target_search_network: expect.any(Boolean),
				target_content_network: expect.any(Boolean),
				target_partner_search_network: expect.any(Boolean) 
			},
			start_date: expect.any(String),
			end_date: expect.any(String),
			serving_status: expect.any(String),
			bidding_strategy_type: expect.any(String),
			target_spend: { cpc_bid_ceiling_micros: expect.any(String) } 
		})
	})

	it('Updates Campaign Name', async () => {
		const new_campaign_name = getRandomCampaignName()
		const config = {
			id: new_campaign_id,
			update: {
				name: new_campaign_name
			}
		}
		expect.assertions(1)
		await customer.campaigns.update(config)
		const campaign = await customer.campaigns.retrieve(new_campaign_id)
		expect(campaign.name).toBe(new_campaign_name)
	})


	it('Deletes Campaign', async () => {
		expect.assertions(1)

		await customer.campaigns.delete(new_campaign_id)
		const campaign = await customer.campaigns.retrieve(new_campaign_id)	
		expect(campaign.status).toBe('REMOVED')
	})
	
})