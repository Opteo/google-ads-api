// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ConversionAction } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ConversionAction', async () => {

    describe('list', async () => {
        it('can retrieve a list of ConversionActions with all fields (if valid)', async () => {
            const conversion_actions = await customer.conversionActions.list()
            expect(conversion_actions).toBeInstanceOf(Array)

            if(conversion_actions.length > 0) {
                expect(conversion_actions[0].conversion_action).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/conversionActions`) || '',
                    })
                )
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
