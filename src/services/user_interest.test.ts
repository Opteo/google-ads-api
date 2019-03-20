// Auto Generated File! Do Not Edit.

// @ts-ignore
import { UserInterest } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('UserInterest', async () => {

    describe('list', async () => {
        it('can retrieve a list of UserInterests with all fields (if valid)', async () => {
            const user_interests = await customer.userInterests.list()
            expect(user_interests).toBeInstanceOf(Array)

            if(user_interests.length > 0) {
                expect(user_interests[0].user_interest).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/userInterests`) || '',
                    })
                )
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
