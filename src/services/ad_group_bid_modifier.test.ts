// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupBidModifier } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupBidModifier', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AdGroupBidModifiers with all fields (if valid)', async () => {
            const ad_group_bid_modifiers = await customer.adGroupBidModifiers.list()
            expect(ad_group_bid_modifiers).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(ad_group_bid_modifiers.length > 0 && ad_group_bid_modifiers[0].ad_group_bid_modifier.resource_name) {
                expect(ad_group_bid_modifiers[0].ad_group_bid_modifier).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupBidModifiers`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = ad_group_bid_modifiers[0].ad_group_bid_modifier.resource_name

                if(resource) {
                    const singleton = await customer.adGroupBidModifiers.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/adGroupBidModifiers`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupBidModifiers.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
