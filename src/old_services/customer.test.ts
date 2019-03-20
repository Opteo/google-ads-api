// import { newCustomer } from './test_utils'
// const customer = newCustomer()

// describe('customer', () => {
//     describe('report', () => {
//         it('retrieves data for a specified entity', async () => {
//             const data = await customer.report({
//                 entity: 'ad_group',
//                 attributes: ['id', 'name', 'campaign.id'],
//                 order_by: 'ad_group.id',
//                 sort_order: 'DESC',
//             })
//             expect(data).toBeInstanceOf(Array)
//             expect(data[0]).toEqual({
//                 campaign: {
//                     resource_name: expect.any(String),
//                     id: expect.any(Number),
//                 },
//                 ad_group: {
//                     resource_name: expect.any(String),
//                     id: expect.any(Number),
//                     name: expect.any(String),
//                 },
//             })
//         })
//     })
// })
