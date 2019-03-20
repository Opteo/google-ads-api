// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignExtensionSetting } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignExtensionSetting', async () => {

    describe('list', async () => {
        it('can retrieve a list of CampaignExtensionSettings with all fields (if valid)', async () => {
            const campaign_extension_settings = await customer.campaignExtensionSettings.list()
            expect(campaign_extension_settings).toBeInstanceOf(Array)

            if(campaign_extension_settings.length > 0) {
                expect(campaign_extension_settings[0].campaign_extension_setting).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignExtensionSettings`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignExtensionSettings.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
