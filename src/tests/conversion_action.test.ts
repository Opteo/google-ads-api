// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ConversionAction } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ConversionAction', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of ConversionActions with all fields (if valid)', async () => {
            const conversion_actions = await customer.conversionActions.list()
            expect(conversion_actions).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(conversion_actions.length > 0 && conversion_actions[0].conversion_action.resource_name) {
                expect(conversion_actions[0].conversion_action).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/conversionActions`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = conversion_actions[0].conversion_action.resource_name

                if(resource) {
                    const singleton = await customer.conversionActions.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/conversionActions`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.conversionActions.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
