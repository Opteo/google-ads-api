// Auto Generated File! Do Not Edit.

// @ts-ignore
import { BiddingStrategy } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('BiddingStrategy', async () => {

    describe('list', async () => {
        it('can retrieve a list of BiddingStrategys with all fields (if valid)', async () => {
            const bidding_strategys = await customer.biddingStrategys.list()
            expect(bidding_strategys).toBeInstanceOf(Array)

            if(bidding_strategys.length > 0) {
                expect(bidding_strategys[0].bidding_strategy).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/biddingStrategys`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.biddingStrategys.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
