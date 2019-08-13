// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupCriterion } from 'google-ads-node/build/lib/resources'
import { KeywordMatchType, AdGroupCriterionStatus } from 'google-ads-node/build/lib/enums'

import { toMicros } from '../index'

// @ts-ignore
import { newCustomer, KEYWORD_ID, CID, getRandomName, ADGROUP_ID } from '../test_utils'
const customer = newCustomer()

describe('AdGroupCriterion', () => {
    describe('reporting',  () => {
        it('can retrieve a list of AdGroupCriterions with all fields (if valid)', async () => {
            const ad_group_criterions = await customer.adGroupCriteria.list()
            expect(ad_group_criterions).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if (ad_group_criterions.length > 0 && ad_group_criterions[0].ad_group_criterion.resource_name) {
                expect(ad_group_criterions[0].ad_group_criterion).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupCriteria`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = ad_group_criterions[0].ad_group_criterion.resource_name

                if (resource) {
                    const singleton = await customer.adGroupCriteria.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/adGroupCriteria`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupCriteria.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

    describe('mutation', () => {
        let new_keyword_resource_name: string = ''

        it('can create a new keyword', async () => {
            const keyword: AdGroupCriterion = {
                ad_group: `customers/${CID}/adGroups/${ADGROUP_ID}`,
                status: AdGroupCriterionStatus.PAUSED,
                keyword: {
                    text: getRandomName('keyword'),
                    match_type: KeywordMatchType.EXACT,
                },
            }

            const { results } = await customer.adGroupCriteria.create(keyword)
            new_keyword_resource_name = results[0]

            expect(results[0]).toContain(`customers/${CID}/adGroupCriteria/`)
        })

        it('supports multiple operations when using create', async () => {
            const { results } = await customer.adGroupCriteria.create(
                [
                    {
                        ad_group: `customers/${CID}/adGroups/${ADGROUP_ID}`,
                        keyword: {
                            text: getRandomName('keyword'),
                            match_type: KeywordMatchType.EXACT,
                        },
                    },
                    {
                        ad_group: `customers/${CID}/adGroups/${ADGROUP_ID}`,
                        keyword: {
                            text: getRandomName('keyword'),
                            match_type: KeywordMatchType.EXACT,
                        },
                    },
                ],
                {
                    validate_only: true,
                }
            )
            /* Result is empty because we're using validate only */
            expect(results).toEqual([])
        })

        it('can update a keyword', async () => {
            const { results } = await customer.adGroupCriteria.update({
                resource_name: new_keyword_resource_name,
                cpc_bid_micros: toMicros(1.5),
            })

            expect(results[0]).toEqual(new_keyword_resource_name)
        })

        it('can delete a keyword', async done => {
            await customer.adGroupCriteria.delete(new_keyword_resource_name)
            done()
        })
    })
})
