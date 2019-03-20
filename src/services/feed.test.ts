// Auto Generated File! Do Not Edit.

// @ts-ignore
import { Feed } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('Feed', async () => {

    describe('list', async () => {
        it('can retrieve a list of Feeds with all fields (if valid)', async () => {
            const feeds = await customer.feeds.list()
            expect(feeds).toBeInstanceOf(Array)

            if(feeds.length > 0) {
                expect(feeds[0].feed).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/feeds`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.feeds.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
