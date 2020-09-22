import { AdGroupAdStatus, AdGroupCriterionStatus, KeywordMatchType } from 'google-ads-node/build/lib/enums'
import { AdGroupCriterion, AdGroupAd } from 'google-ads-node/build/lib/resources'

import { newCustomer, CID, ADGROUP_ID } from '../test_utils'
const customer = newCustomer()

describe('Policy Violation Details', () => {
    it('throws an error with policy violation details when adding an illegal keyword', async () => {
        const keyword: AdGroupCriterion = {
            ad_group: `customers/${CID}/adGroups/${ADGROUP_ID}`,
            status: AdGroupCriterionStatus.PAUSED,
            keyword: {
                text: 'medication',
                match_type: KeywordMatchType.EXACT,
            },
        }

        try {
            await customer.adGroupCriteria.create(keyword, { validate_only: true })
        } catch (err) {
            expect(err.policy_violation_details).toBeDefined()
            expect(err.policy_violation_details.externalPolicyDescription).toContain('pharmacy-related content')
            expect(err.policy_violation_details.key).toEqual({
                policyName: {
                    value: 'pharma',
                },
                violatingText: {
                    value: 'medication',
                },
            })
        }
    })

    it('throws an error with policy finding details when using an illegal character in an ad', async () => {
        const ad: AdGroupAd = {
            ad_group: `customers/${CID}/adGroups/${ADGROUP_ID}`,
            status: AdGroupAdStatus.PAUSED,
            ad: {
                final_urls: ['https://example.com'],
                expanded_text_ad: {
                    headline_part1: "I'm an illegal character 😎",
                    headline_part2: 'headline part 2',
                    headline_part3: 'headline part 3',
                    path1: 'path1',
                    path2: 'path2',
                    description: 'description',
                },
            },
        }

        try {
            await customer.adGroupAds.create(ad, { validate_only: true })
        } catch (err) {
            expect(err.policy_violation_details).toEqual([
                {
                    topic: { value: 'SYMBOLS' },
                    type: 2,
                    evidencesList: [{ textList: { textsList: [{ value: '😎' }] } }],
                    constraintsList: [],
                },
            ])
        }
    })

    it('throws an error with policy violation details when using global mutateResources', async () => {
        const ad: AdGroupAd = {
            ad_group: `customers/${CID}/adGroups/${ADGROUP_ID}`,
            status: AdGroupAdStatus.PAUSED,
            ad: {
                final_urls: ['https://example.com'],
                expanded_text_ad: {
                    headline_part1: "I'm an illegal character 😎",
                    headline_part2: 'headline part 2',
                    headline_part3: 'headline part 3',
                    path1: 'path1',
                    path2: 'path2',
                    description: 'description',
                },
            },
        }

        try {
            await customer.mutateResources(
                [
                    {
                        _resource: 'AdGroupAd',
                        _operation: 'create',
                        ...ad,
                    },
                ],
                { validate_only: true }
            )
        } catch (err) {
            expect(err.policy_violation_details).toEqual([
                {
                    topic: { value: 'SYMBOLS' },
                    type: 2,
                    evidencesList: [{ textList: { textsList: [{ value: '😎' }] } }],
                    constraintsList: [],
                },
            ])
        }
    })
})
