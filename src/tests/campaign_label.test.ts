// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignLabel } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignLabel', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CampaignLabels with all fields (if valid)', async () => {
            const campaign_labels = await customer.campaignLabels.list()
            expect(campaign_labels).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(campaign_labels.length > 0 && campaign_labels[0].campaign_label.resource_name) {
                expect(campaign_labels[0].campaign_label).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignLabels`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = campaign_labels[0].campaign_label.resource_name

                if(resource) {
                    const singleton = await customer.campaignLabels.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/campaignLabels`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignLabels.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
