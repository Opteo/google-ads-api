import { AdGroup } from 'google-ads-node/build/lib/resources'
import { AdGroupType, AdGroupStatus } from 'google-ads-node/build/lib/enums'

import { newCustomer, CID, getRandomName, CAMPAIGN_ID } from '../test_utils'
const customer = newCustomer()

describe('AdGroup', () => {
    describe('mutation', () => {
        it('can create a new adgroup', async () => {
            const adgroup: AdGroup = {
                campaign: `customers/${CID}/campaigns/${CAMPAIGN_ID}`,
                cpc_bid_micros: 1430000,
                cpm_bid_micros: 10000,
                name: getRandomName('adgroup'),
                status: AdGroupStatus.ENABLED,
                target_cpm_micros: 10000,
                targeting_setting: {
                    target_restrictions: [{ targeting_dimension: 3, bid_only: true }],
                },
                type: AdGroupType.SEARCH_STANDARD,
            }

            const { results } = await customer.adGroups.create(adgroup)

            expect(results[0]).toContain(`customers/${CID}/adGroups/`)
        })
    })
})
