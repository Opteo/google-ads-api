// Auto Generated File! Do Not Edit.

// @ts-ignore
import { UserInterest } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('UserInterest', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of UserInterests with all fields (if valid)', async () => {
            const user_interests = await customer.userInterests.list()
            expect(user_interests).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(user_interests.length > 0 && user_interests[0].user_interest.resource_name) {
                expect(user_interests[0].user_interest).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/userInterests`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = user_interests[0].user_interest.resource_name

                if(resource) {
                    const singleton = await customer.userInterests.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/userInterests`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.userInterests.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
