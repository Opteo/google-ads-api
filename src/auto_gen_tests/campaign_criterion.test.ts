// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignCriterion } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignCriterion', async () => {
    describe('reporting', async () => {
        it.only('can retrieve a list of CampaignCriterions with all fields (if valid)', async () => {
            const campaign_criterions = await customer.campaignCriterion.list()
            expect(campaign_criterions).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if (campaign_criterions.length > 0 && campaign_criterions[0].campaign_criterion.resource_name) {
                expect(campaign_criterions[0].campaign_criterion).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignCriteria`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = campaign_criterions[0].campaign_criterion.resource_name

                if (resource) {
                    const singleton = await customer.campaignCriterion.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/campaignCriteria`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignCriterion.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })
})
