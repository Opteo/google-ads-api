// @ts-ignore
import { Video } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The video entity:

const video = {
    id: 'string', // The ID of the video.
    channel_id: 'string', // The owner channel id of the video.
    duration_millis: 'int64', // The duration of the video in milliseconds.
    title: 'string', // The title of the video.
    resource_name: 'string', // The resource name of the video. Video resource names have the form:  `customers/{customer_id}/videos/{video_id}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'videos'
const GET_METHOD = 'getVideo'
const GET_REQUEST = 'GetVideoRequest'

export default class VideoService extends Service {
    public async get(id: number | string): Promise<Video> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Video
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ video: Video }>> {
        return this.getListResults('video', options)
    }
}
