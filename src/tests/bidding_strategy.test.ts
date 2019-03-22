// Auto Generated File! Do Not Edit.

// @ts-ignore
import { BiddingStrategy } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('BiddingStrategy', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of BiddingStrategys with all fields (if valid)', async () => {
            const bidding_strategys = await customer.biddingStrategys.list()
            expect(bidding_strategys).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(bidding_strategys.length > 0 && bidding_strategys[0].bidding_strategy.resource_name) {
                expect(bidding_strategys[0].bidding_strategy).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/biddingStrategys`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = bidding_strategys[0].bidding_strategy.resource_name

                if(resource) {
                    const singleton = await customer.biddingStrategys.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/biddingStrategys`) || '',
                        })
                    )
                }
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
