import { AdGroup } from 'google-ads-node/build/lib/resources'
import { AdGroupAdRotationMode } from 'google-ads-node/build/lib/enums'
import { newCustomer, ADGROUP_ID, CAMPAIGN_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ad_groups', async () => {
    describe('get', async () => {
        it('can retrieve a single ad_group with an id', async () => {
            const ad_group = await customer.adGroups.get(ADGROUP_ID)
            expect(ad_group).toEqual(
                expect.objectContaining({
                    resource_name: `customers/${CID}/adGroups/${ADGROUP_ID}`,
                    id: ADGROUP_ID,
                    status: expect.any(Number),
                    type: expect.any(Number),
                })
            )
        })
    })

    describe('list', async () => {
        it('can retrieve a list of ad_groups with all fields (if valid)', async () => {
            const ad_groups = await customer.adGroups.list()
            expect(ad_groups).toBeInstanceOf(Array)

            expect(ad_groups[0].ad_group).toEqual(
                expect.objectContaining({
                    resource_name: expect.stringContaining(`customers/${CID}/adGroups/`),
                    id: expect.any(Number),
                    status: expect.any(Number),
                    type: expect.any(Number),
                })
            )
        })
    })

    describe('mutation', () => {
        let new_ad_group_resource_name: string = ''

        it('can create a new ad_group', async () => {
            const ad_group: AdGroup = {
                name: getRandomName('ad_group'),
                ad_rotation_mode: AdGroupAdRotationMode.OPTIMIZE,
                campaign: `customers/${CID}/campaigns/${CAMPAIGN_ID}`,
            }

            const { results } = await customer.adGroups.create(ad_group)
            new_ad_group_resource_name = results[0]

            expect(results[0]).toContain(`customers/${CID}/adGroups/`)
        })

        it('can update an ad_group', async () => {
            const updated_ad_group: AdGroup = {
                resource_name: new_ad_group_resource_name,
                ad_rotation_mode: AdGroupAdRotationMode.ROTATE_FOREVER,
            }

            const { results } = await customer.adGroups.update(updated_ad_group)
            const updated_ad_group_resource = results[0]

            expect(updated_ad_group_resource).toEqual(new_ad_group_resource_name)
        })

        it('can delete a ad_group', async done => {
            await customer.adGroups.delete(new_ad_group_resource_name)
            done()
        })
    })
})
