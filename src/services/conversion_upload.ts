import { CallConversion, ClickConversion } from 'google-ads-node/build/lib/resources'

import Service from './service'

export default class ConversionAdjustmentUploadService extends Service {
    public async uploadCallConversion(conversion: CallConversion): Promise<any> {
        const pb = this.buildResource('UploadCallConversionsRequest', conversion)
        const response = await this.service.uploadConversionAdjustments(pb)
        const parsed = this.parseServiceResults(response)
        return parsed
    }

    public async uploadClickConversion(conversion: ClickConversion): Promise<any> {
        const pb = this.buildResource('UploadClickConversionsRequest', conversion)
        const response = await this.service.uploadConversionAdjustments(pb)
        const parsed = this.parseServiceResults(response)
        return parsed
    }
}
