// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignSharedSet } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignSharedSet', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CampaignSharedSets with all fields (if valid)', async () => {
            const campaign_shared_sets = await customer.campaignSharedSets.list()
            expect(campaign_shared_sets).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(campaign_shared_sets.length > 0 && campaign_shared_sets[0].campaign_shared_set.resource_name) {
                expect(campaign_shared_sets[0].campaign_shared_set).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignSharedSets`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = campaign_shared_sets[0].campaign_shared_set.resource_name

                if(resource) {
                    const singleton = await customer.campaignSharedSets.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/campaignSharedSets`) || '',
                        })
                    )
                }
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
