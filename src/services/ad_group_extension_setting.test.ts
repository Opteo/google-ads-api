// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupExtensionSetting } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupExtensionSetting', async () => {

    describe('list', async () => {
        it('can retrieve a list of AdGroupExtensionSettings with all fields (if valid)', async () => {
            const ad_group_extension_settings = await customer.adGroupExtensionSettings.list()
            expect(ad_group_extension_settings).toBeInstanceOf(Array)

            if(ad_group_extension_settings.length > 0) {
                expect(ad_group_extension_settings[0].ad_group_extension_setting).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupExtensionSettings`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupExtensionSettings.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
