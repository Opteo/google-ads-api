// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignSharedSet } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignSharedSet', async () => {

    describe('list', async () => {
        it('can retrieve a list of CampaignSharedSets with all fields (if valid)', async () => {
            const campaign_shared_sets = await customer.campaignSharedSets.list()
            expect(campaign_shared_sets).toBeInstanceOf(Array)

            if(campaign_shared_sets.length > 0) {
                expect(campaign_shared_sets[0].campaign_shared_set).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignSharedSets`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignSharedSets.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
