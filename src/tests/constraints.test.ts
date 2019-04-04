import { enums } from '../index'
import { newCustomerWithMetrics } from '../test_utils'
const customer = newCustomerWithMetrics()

describe('Constraints', () => {
    it('supports using a single constraints object', async () => {
        const [{ campaign, campaign_budget }] = await customer.report({
            entity: 'campaign',
            attributes: ['campaign.status', 'campaign.advertising_channel_type', 'campaign_budget.status'],
            constraints: {
                'campaign.status': enums.CampaignStatus.ENABLED,
                'campaign.advertising_channel_type': enums.AdvertisingChannelType.SEARCH,
                'campaign_budget.status': enums.BudgetStatus.ENABLED,
            },
        })

        expect(campaign).toEqual(
            expect.objectContaining({
                status: 2,
                advertising_channel_type: 2,
            })
        )
        expect(campaign_budget.status).toEqual(2)
    })
})
