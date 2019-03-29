// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroup } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroup', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AdGroups with all fields (if valid)', async () => {
            const ad_groups = await customer.adGroups.list()
            expect(ad_groups).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(ad_groups.length > 0 && ad_groups[0].ad_group.resource_name) {
                expect(ad_groups[0].ad_group).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroups`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = ad_groups[0].ad_group.resource_name

                if(resource) {
                    const singleton = await customer.adGroups.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/adGroups`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroups.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
