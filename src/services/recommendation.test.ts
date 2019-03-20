// Auto Generated File! Do Not Edit.

// @ts-ignore
import { Recommendation } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('Recommendation', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of Recommendations with all fields (if valid)', async () => {
            const recommendations = await customer.recommendations.list()
            expect(recommendations).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(recommendations.length > 0 && recommendations[0].recommendation.resource_name) {
                expect(recommendations[0].recommendation).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/recommendations`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = recommendations[0].recommendation.resource_name

                if(resource) {
                    const singleton = await customer.recommendations.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/recommendations`) || '',
                        })
                    )
                }
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
