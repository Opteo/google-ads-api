import { CustomerClientLink } from 'google-ads-node/build/lib/resources'
import { ManagerLinkStatus } from 'google-ads-node/build/lib/enums'

import { newCustomer, CID_WITH_METRICS } from '../test_utils'
const customer = newCustomer()

describe('AdGroupCriterion', async () => {
    describe('mutation', () => {
        it('can (almost) create a new client customer link', async () => {
            const link: CustomerClientLink = {
                client_customer: `customers/${CID_WITH_METRICS}`,
                status: ManagerLinkStatus.PENDING,
            }

            // TODO: test this in a repeatable, successful way.
            await expect(customer.customerClientLinks.create(link)).rejects.toThrow(
                `Authorization of the client failed.`
            )
        })

        it('fails when using multiple operations on create()', async () => {
            const link: CustomerClientLink = {
                client_customer: 'customers/77777777777',
                status: ManagerLinkStatus.PENDING,
            }

            await expect(
                customer.customerClientLinks.create([link, link], {
                    validate_only: true,
                })
            ).rejects.toThrow()
        })
    })
})
