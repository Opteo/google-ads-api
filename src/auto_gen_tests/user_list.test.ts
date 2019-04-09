// Auto Generated File! Do Not Edit.

// @ts-ignore
import { UserList } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('UserList', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of UserLists with all fields (if valid)', async () => {
            const user_lists = await customer.userLists.list()
            expect(user_lists).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(user_lists.length > 0 && user_lists[0].user_list.resource_name) {
                expect(user_lists[0].user_list).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/userLists`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = user_lists[0].user_list.resource_name

                if(resource) {
                    const singleton = await customer.userLists.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/userLists`) || '',
                        })
                    )
                }
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
