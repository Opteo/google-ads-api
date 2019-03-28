import { getEnumString, enums } from './index'

test.only('getEnumString', () => {
    const status = getEnumString('CampaignStatus', enums.CampaignStatus.ENABLED)
    expect(status).toEqual('ENABLED')

    const type = getEnumString('AdvertisingChannelType', enums.AdvertisingChannelType.HOTEL)
    expect(type).toEqual('HOTEL')

    try {
        getEnumString('InvalidEnumName', 2)
    } catch (err) {
        expect(err.message).toContain('Could not find')
    }

    try {
        getEnumString('CampaignStatus', 66)
    } catch (err) {
        expect(err.message).toContain('Could not find value')
    }
})
