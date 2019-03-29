// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomInterest } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomInterest', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CustomInterests with all fields (if valid)', async () => {
            const custom_interests = await customer.customInterests.list()
            expect(custom_interests).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(custom_interests.length > 0 && custom_interests[0].custom_interest.resource_name) {
                expect(custom_interests[0].custom_interest).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customInterests`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = custom_interests[0].custom_interest.resource_name

                if(resource) {
                    const singleton = await customer.customInterests.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/customInterests`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.customInterests.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
