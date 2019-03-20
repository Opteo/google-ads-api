// Auto Generated File! Do Not Edit.

// @ts-ignore
import { UserList } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('UserList', async () => {

    describe('list', async () => {
        it('can retrieve a list of UserLists with all fields (if valid)', async () => {
            const user_lists = await customer.userLists.list()
            expect(user_lists).toBeInstanceOf(Array)

            if(user_lists.length > 0) {
                expect(user_lists[0].user_list).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/userLists`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.userLists.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
