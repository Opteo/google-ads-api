import { HttpController } from '../types/Http'
import { CreateConfig } from '../types/CampaignSharedSet'
import { ListConfig } from '../types/Entity'

export default class CampaignSharedSets {
	private http_controller: HttpController
    private endpoint: string
    private resource: string

    /**
	 * CampaignSharedSets.
	 * @constructor
	 */
    constructor(http_controller: HttpController, endpoint: string, resource: string) {
        this.http_controller = http_controller
        this.endpoint = endpoint
        this.resource = resource
    }

    /**
	* Links Shared Set with Campaign
	* @param {object} config
	* @param {number|string} config.campaign_id - ID of the campaign
	* @param {number|string} config.shared_set_id - ID of the shared set
	*/
    public link(config: CreateConfig) : Promise<any> {
        return this.http_controller.create(config, this.endpoint)
    }
     
    /**
	* Lists all Campaign Shared Sets
	* @param {object} config
	* @param {integer} config.limit
	* @param {array} config.fields
	* @param {object} config.constraints
	*/
    public list(config: ListConfig) : Promise<any> {
        return this.http_controller.list(config, this.resource)
    }

    /**
	* Retrieves Single Campaign Shared Set
	* @param {string} campaign_shared_set_id
	*/
    public retrieve(campaign_shared_set_id: string|number) : Promise<any> {
        return this.http_controller.retrieve(this.endpoint, campaign_shared_set_id)
    }

    /**
	* Unlinks Shared Set from Campaign
	* @param {string} campaign_shared_set_id
	*/
    public delete(campaign_shared_set_id: string) : Promise<any> {
        return this.http_controller.delete(this.endpoint, campaign_shared_set_id)
    }
}
