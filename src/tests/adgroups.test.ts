import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

const getRandomAdgroupName = () => `test-adgroup-${(Math.random() * 100 + 1).toFixed(0)} (created during library test)`

describe('AdGroups', async () => {
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

    const campaign_id = 1485014801
    let new_adgroup_id = ''
    let new_adgroup_id_1 = ''
    let new_adgroup_id_2 = ''

    it('Lists All AdGroups', async () => {
        expect.assertions(1)
        const adgroups = await customer.adgroups.list({
            order_by: ['id', 'target_cpa_micros'],
            constraints: [{ 'campaign.id': campaign_id }, { status: 'ENABLED' }],
        })
        expect(adgroups).toBeInstanceOf(Array)
    })

    it('Creates New AdGroup', async done => {
        expect.assertions(1)

        const new_adgroup = await customer.adgroups.create({
            name: getRandomAdgroupName(),
            campaign_id,
        })

        expect(new_adgroup).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
        })

        new_adgroup_id = new_adgroup.id
        done()
    })

    it('Creates 2 New AdGroups', async done => {
        expect.assertions(2)

        const new_adgroups = await customer.adgroups.create([
            {
                name: getRandomAdgroupName(),
                campaign_id,
            },
            {
                name: getRandomAdgroupName(),
                campaign_id,
            },
        ])

        expect(new_adgroups).toContainEqual(
            expect.objectContaining({
                id: expect.any(String),
                resource_name: expect.any(String),
            })
        )

        const adgroup_ids = new_adgroups.map((x: any, i: number) => x.id)

        expect(adgroup_ids.length).toEqual(2)

        new_adgroup_id_1 = adgroup_ids[0]
        new_adgroup_id_2 = adgroup_ids[1]

        done()
    })

    it('Retrieves Single AdGroup', async () => {
        expect.assertions(1)
        const adgroup = await customer.adgroups.retrieve(new_adgroup_id)
        expect(new_adgroup_id).toContain(adgroup.id)
    })

    it('Updates AdGroup', async () => {
        expect.assertions(1)
        const new_adgroup_name = getRandomAdgroupName()
        await customer.adgroups.update({
            id: new_adgroup_id,
            update: {
                name: new_adgroup_name,
            },
        })
        const updated_adgroup = await customer.adgroups.retrieve(new_adgroup_id)
        expect(updated_adgroup.name).toEqual(new_adgroup_name)
    })

    it('Updates Multiple AdGroups', async () => {
        expect.assertions(2)
        const new_adgroup_name_1 = getRandomAdgroupName()
        const new_adgroup_name_2 = getRandomAdgroupName()

        const update_config = [
            {
                id: new_adgroup_id_1,
                update: {
                    name: new_adgroup_name_1,
                },
            },
            {
                id: new_adgroup_id_2,
                update: {
                    name: new_adgroup_name_2,
                },
            },
        ]

        await customer.adgroups.update(update_config)

        const updated_adgroup_1 = await customer.adgroups.retrieve(new_adgroup_id_1)
        expect(updated_adgroup_1.name).toEqual(new_adgroup_name_1)
        const updated_adgroup_2 = await customer.adgroups.retrieve(new_adgroup_id_2)
        expect(updated_adgroup_2.name).toEqual(new_adgroup_name_2)
    })

    it('Deletes AdGroups', async () => {
        expect.assertions(3)
        await customer.adgroups.delete(new_adgroup_id)
        const adgroup = await customer.adgroups.retrieve(new_adgroup_id)
        expect(adgroup.status).toBe('REMOVED')

        await customer.adgroups.delete(new_adgroup_id_1)
        const adgroup1 = await customer.adgroups.retrieve(new_adgroup_id_1)
        expect(adgroup1.status).toBe('REMOVED')

        await customer.adgroups.delete(new_adgroup_id_2)
        const adgroup2 = await customer.adgroups.retrieve(new_adgroup_id_2)
        expect(adgroup2.status).toBe('REMOVED')
    })
})
