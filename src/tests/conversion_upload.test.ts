import { newCustomer, CID } from '../test_utils'
import { CallConversion, ClickConversion } from 'google-ads-node/build/lib/resources'

const customer = newCustomer()

describe('Conversion Upload Service', () => {
    describe('reporting', () => {
        it('can upload call conversions', async () => {
            const call_conversions: CallConversion[] = [
                {
                    caller_id: `+442087599036`,
                    call_start_date_time: `2020-04-01 12:32:45-08:00`,
                    conversion_date_time: `2020-04-01 12:32:45-08:00`,
                    conversion_action: `customers/${CID}/conversionActions/401955561`,
                },
            ]

            const res = await customer.conversionUploads.uploadCallConversions(call_conversions, {
                validate_only: true,
                partial_failure: true,
            })

            expect(res.partial_failure_error)
        })
        it('can upload click conversions', async () => {
            const click_conversions: ClickConversion[] = [
                {
                    gclid: CID,
                },
            ]

            const res = await customer.conversionUploads.uploadClickConversions(click_conversions, {
                validate_only: true,
                partial_failure: true,
            })

            expect(res.partial_failure_error)
        })
    })
})
