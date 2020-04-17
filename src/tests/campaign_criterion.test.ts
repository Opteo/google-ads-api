import { newCustomer, CID } from '../test_utils'
const customer = newCustomer()

describe('CampaignCriteria', () => {
    it('should be able to update a bid modifier', async () => {
        const bid = 17
        const bid_modifier = bid / 100
        const bid_modifier_google_format = 1 + bid_modifier

        const campaign_device_bid = {
            resource_name: `customers/${CID}/campaignCriteria/2058522228~30000`,
            bid_modifier: bid_modifier_google_format,
        }

        const p = await customer.campaignCriteria.update(campaign_device_bid, {
            validate_only: true,
        })
        console.log(p)
    })
})
