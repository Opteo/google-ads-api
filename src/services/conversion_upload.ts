import {
    CallConversion,
    ClickConversion,
    UploadCallConversionsResponse,
    UploadClickConversionsResponse,
} from 'google-ads-node/build/lib/resources'
import * as grpc from 'google-ads-node'

import Service from './service'
import { ServiceCreateOptions } from '../types'

export default class ConversionAdjustmentUploadService extends Service {
    public async uploadCallConversions(
        conversions: CallConversion[],
        options?: ServiceCreateOptions
    ): Promise<UploadCallConversionsResponse> {
        const protobufs = this.buildResources('CallConversion', conversions) as Array<grpc.CallConversion>

        const request = new grpc.UploadCallConversionsRequest()

        request.setCustomerId(this.cid)

        request.setConversionsList(protobufs)

        if (options?.validate_only) {
            request.setValidateOnly(options.validate_only)
        }

        if (options?.partial_failure) {
            request.setPartialFailure(options.partial_failure)
        }

        const response = await this.serviceCall('uploadCallConversions', request, true)
        return response
    }

    public async uploadClickConversions(
        conversions: ClickConversion[],
        options?: ServiceCreateOptions
    ): Promise<UploadClickConversionsResponse> {
        const protobufs = this.buildResources('ClickConversion', conversions) as Array<grpc.ClickConversion>

        const request = new grpc.UploadClickConversionsRequest()

        request.setCustomerId(this.cid)

        request.setConversionsList(protobufs)

        if (options?.validate_only) {
            request.setValidateOnly(options.validate_only)
        }

        if (options?.partial_failure) {
            request.setPartialFailure(options.partial_failure)
        }

        const response = await this.serviceCall('uploadClickConversions', request, true)
        return response
    }
}
