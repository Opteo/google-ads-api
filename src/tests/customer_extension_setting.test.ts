// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerExtensionSetting } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerExtensionSetting', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CustomerExtensionSettings with all fields (if valid)', async () => {
            const customer_extension_settings = await customer.customerExtensionSettings.list()
            expect(customer_extension_settings).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(customer_extension_settings.length > 0 && customer_extension_settings[0].customer_extension_setting.resource_name) {
                expect(customer_extension_settings[0].customer_extension_setting).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerExtensionSettings`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = customer_extension_settings[0].customer_extension_setting.resource_name

                if(resource) {
                    const singleton = await customer.customerExtensionSettings.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/customerExtensionSettings`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.customerExtensionSettings.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
