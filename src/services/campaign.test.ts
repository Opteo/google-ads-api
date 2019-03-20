// Auto Generated File! Do Not Edit.

// @ts-ignore
import { Campaign } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('Campaign', async () => {

    describe('list', async () => {
        it('can retrieve a list of Campaigns with all fields (if valid)', async () => {
            const campaigns = await customer.campaigns.list()
            expect(campaigns).toBeInstanceOf(Array)

            if(campaigns.length > 0) {
                expect(campaigns[0].campaign).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaigns`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaigns.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
