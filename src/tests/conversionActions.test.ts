import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

const getRandomConversionActionName = () =>
    `test-conversion-action-${(Math.random() * 10000000 + 1).toFixed(0)} (created during library test)`

describe('ConversionActions', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })

    const customer = lib_instance.Customer({
        customer_account_id: config.cid,
        manager_cid: config.manager_cid,
        refresh_token: config.refresh_token,
    })

    let new_conversion_action_id = ''
    let new_conversion_action_id_1 = ''
    let new_conversion_action_id_2 = ''

    it('Lists All ConversionActions', async () => {
        expect.assertions(1)
        const conversion_actions = await customer.conversionActions.list({
            order_by: ['id'],
        })
        expect(conversion_actions).toBeInstanceOf(Array)
    })

    it('Creates New ConversionAction', async done => {
        expect.assertions(1)

        const new_conversion_action = await customer.conversionActions.create({
            name: getRandomConversionActionName(),
            type: 'AD_CALL',
            category: 'LEAD',
            include_in_conversions_metric: true,
            click_through_lookback_window_days: 15,
            value_settings: {
                default_value: 1,
                default_currency_code: 'USD',
            },
            counting_type: 'ONE_PER_CLICK',
            attribution_model_settings: {
                attribution_model: 'GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY',
            },
            phone_call_duration_seconds: 45,
        })

        expect(new_conversion_action).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
        })

        new_conversion_action_id = new_conversion_action.id
        done()
    })

    it('Creates 2 New ConversionActions', async done => {
        expect.assertions(2)

        const new_conversion_actions = await customer.conversionActions.create([
            {
                name: getRandomConversionActionName(),
                type: 'AD_CALL',
                category: 'LEAD',
                include_in_conversions_metric: true,
                click_through_lookback_window_days: 15,
                value_settings: {
                    default_value: 1,
                    default_currency_code: 'USD',
                },
                counting_type: 'ONE_PER_CLICK',
                attribution_model_settings: {
                    attribution_model: 'GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY',
                },
                phone_call_duration_seconds: 45,
            },
            {
                name: getRandomConversionActionName(),
                type: 'WEBPAGE',
                category: 'SIGNUP',
                include_in_conversions_metric: true,
                click_through_lookback_window_days: 7,
                value_settings: {
                    default_value: 5,
                    default_currency_code: 'USD',
                },
                counting_type: 'MANY_PER_CLICK',
                attribution_model_settings: {
                    attribution_model: 'GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED',
                },
            },
        ])

        expect(new_conversion_actions).toContainEqual(
            expect.objectContaining({
                id: expect.any(String),
                resource_name: expect.any(String),
            })
        )

        const conversion_action_ids = new_conversion_actions.map((x: any, i: number) => x.id)

        expect(conversion_action_ids.length).toEqual(2)

        new_conversion_action_id_1 = conversion_action_ids[0]
        new_conversion_action_id_2 = conversion_action_ids[1]

        done()
    })

    it('Retrieves Single ConversionAction', async done => {
        setTimeout(async () => {
            expect.assertions(1)
            const conversion_action = await customer.conversionActions.retrieve(new_conversion_action_id)
            expect(new_conversion_action_id).toContain(conversion_action.id)
        }, 1000)

        done()
    })

    it('Updates ConversionAction', async done => {
        setTimeout(async () => {
            expect.assertions(1)
            const new_conversion_action_name = getRandomConversionActionName()
            await customer.conversionActions.update({
                id: new_conversion_action_id,
                update: {
                    name: new_conversion_action_name,
                },
            })
            const updated_conversion_action = await customer.conversionActions.retrieve(new_conversion_action_id)
            expect(updated_conversion_action.name).toEqual(new_conversion_action_name)
        }, 1000)
        done()
    })

    it('Updates Multiple ConversionActions', async done => {
        setTimeout(async () => {
            expect.assertions(1)
            const new_conversion_action_name_1 = getRandomConversionActionName()
            const new_conversion_action_name_2 = getRandomConversionActionName()

            const update_config = [
                {
                    id: new_conversion_action_id_1,
                    update: {
                        name: new_conversion_action_name_1,
                    },
                },
                {
                    id: new_conversion_action_id_2,
                    update: {
                        name: new_conversion_action_name_2,
                    },
                },
            ]

            await customer.conversionActions.update(update_config)

            const updated_conversion_action_1 = await customer.conversionActions.retrieve(new_conversion_action_id_1)
            expect(updated_conversion_action_1.name).toEqual(new_conversion_action_name_1)
            const updated_conversion_action_2 = await customer.conversionActions.retrieve(new_conversion_action_id_2)
            expect(updated_conversion_action_2.name).toEqual(new_conversion_action_name_2)
        }, 1000)
        done()
    })

    it('Deletes ConversionActions', async () => {
        setTimeout(async () => {
            expect.assertions(3)
            await customer.conversionActions.delete(new_conversion_action_id)
            const conversion_action = await customer.conversionActions.retrieve(new_conversion_action_id)
            expect(conversion_action.status).toBe('REMOVED')

            await customer.conversionActions.delete(new_conversion_action_id_1)
            const conversion_action1 = await customer.conversionActions.retrieve(new_conversion_action_id_1)
            expect(conversion_action1.status).toBe('REMOVED')

            await customer.conversionActions.delete(new_conversion_action_id_2)
            const conversion_action2 = await customer.conversionActions.retrieve(new_conversion_action_id_2)
            expect(conversion_action2.status).toBe('REMOVED')
        }, 1000)
    })
})
