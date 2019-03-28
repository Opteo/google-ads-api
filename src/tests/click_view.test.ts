// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ClickView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ClickView', async () => {
    describe('list', async () => {
        it('can retrieve a list of ClickViews with all fields (if valid)', async () => {
            const click_views = await customer.clickViews.list({
                constraints: [
                    {
                        key: 'segments.date',
                        op: 'DURING',
                        val: 'TODAY',
                    },
                ],
            })
            expect(click_views).toBeInstanceOf(Array)

            if (click_views.length > 0) {
                expect(click_views[0].click_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/clickViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.clickViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })
})
