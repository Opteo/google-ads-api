// Auto Generated File! Do Not Edit.

// @ts-ignore
import { Recommendation } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('Recommendation', async () => {

    describe('list', async () => {
        it('can retrieve a list of Recommendations with all fields (if valid)', async () => {
            const recommendations = await customer.recommendations.list()
            expect(recommendations).toBeInstanceOf(Array)

            if(recommendations.length > 0) {
                expect(recommendations[0].recommendation).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/recommendations`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.recommendations.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
