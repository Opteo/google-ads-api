import { CallConversion, ClickConversion } from 'google-ads-node/build/lib/resources'
import * as grpc from 'google-ads-node'

import Service from './service'

export default class ConversionAdjustmentUploadService extends Service {
    public async uploadCallConversions(conversions: Array<CallConversion>): Promise<any> {
        const protobufs = this.buildResources('CallConversion', conversions) as Array<grpc.CallConversion>

        const request = new grpc.UploadCallConversionsRequest()
        request.setCustomerId(this.cid)
        request.setConversionsList(protobufs)
        request.setPartialFailure(true)

        const response = await this.serviceCall('uploadCallConversions', request, true)
        return response
    }

    public async uploadClickConversions(conversions: Array<ClickConversion>): Promise<any> {
        const protobufs = this.buildResources('ClickConversion', conversions) as Array<grpc.ClickConversion>

        const request = new grpc.UploadClickConversionsRequest()
        request.setCustomerId(this.cid)
        request.setConversionsList(protobufs)
        request.setPartialFailure(true)

        const response = await this.serviceCall('uploadClickConversions', request, true)
        return response
    }
}
