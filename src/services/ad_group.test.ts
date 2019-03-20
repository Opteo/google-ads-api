// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroup } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroup', async () => {

    describe('list', async () => {
        it('can retrieve a list of AdGroups with all fields (if valid)', async () => {
            const ad_groups = await customer.adGroups.list()
            expect(ad_groups).toBeInstanceOf(Array)

            if(ad_groups.length > 0) {
                expect(ad_groups[0].ad_group).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroups`) || '',
                    })
                )
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
