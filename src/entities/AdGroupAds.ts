import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { ListAdsConfig, NewAdConfig } from '../types/AdGroupAd';

export default class AdGroupAds extends Entity {

    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.ads, RESOURCE_NAMES.ad)
    }

    list(config: ListAdsConfig) : Promise<any> {
        return super.list(config)
    }

    create(config: NewAdConfig) : Promise<any> {
        return super.create(config)
    }

}
