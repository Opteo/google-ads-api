module.exports = {
    name: 'ChangeStatus',
    object: {
        ad_group: { _description: 'The AdGroup affected by this change.', _type: 'string' },
        ad_group_ad: { _description: 'The AdGroupAd affected by this change.', _type: 'string' },
        ad_group_bid_modifier: { _description: 'The AdGroupBidModifier affected by this change.', _type: 'string' },
        ad_group_criterion: { _description: 'The AdGroupCriterion affected by this change.', _type: 'string' },
        ad_group_feed: { _description: 'The AdGroupFeed affected by this change.', _type: 'string' },
        campaign: { _description: 'The Campaign affected by this change.', _type: 'string' },
        campaign_criterion: { _description: 'The CampaignCriterion affected by this change.', _type: 'string' },
        campaign_feed: { _description: 'The CampaignFeed affected by this change.', _type: 'string' },
        feed: { _description: 'The Feed affected by this change.', _type: 'string' },
        feed_item: { _description: 'The FeedItem affected by this change.', _type: 'string' },
        last_change_date_time: {
            _description: 'Time at which the most recent change has occurred on this resource.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'The resource name of the change status. Change status resource names have the form: <code>customers/{customer_id}/changeStatus/{change_status_id}</code>',
            _type: 'string',
        },
        resource_status: {
            _description: 'Represents the status of the changed resource.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                {
                    s: 'UNKNOWN',
                    description:
                        'Used for return value only. Represents an unclassified resource unknown\nin this version.',
                },
                { s: 'ADDED', description: 'The resource was created.' },
                { s: 'CHANGED', description: 'The resource was modified.' },
                { s: 'REMOVED', description: 'The resource was removed.' },
            ],
            _type: 'enum',
        },
        resource_type: {
            _description:
                'Represents the type of the changed resource. This dictates what fields will be set. For example, for AD_GROUP, campaign and ad_group fields will be set.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                {
                    s: 'UNKNOWN',
                    description:
                        'Used for return value only. Represents an unclassified resource unknown\nin this version.',
                },
                { s: 'AD_GROUP', description: 'An AdGroup resource change.' },
                { s: 'AD_GROUP_AD', description: 'An AdGroupAd resource change.' },
                { s: 'AD_GROUP_CRITERION', description: 'An AdGroupCriterion resource change.' },
                { s: 'CAMPAIGN', description: 'A Campaign resource change.' },
                { s: 'CAMPAIGN_CRITERION', description: 'A CampaignCriterion resource change.' },
                { s: 'FEED', description: 'A Feed resource change.' },
                { s: 'FEED_ITEM', description: 'A FeedItem resource change.' },
                { s: 'AD_GROUP_FEED', description: 'An AdGroupFeed resource change.' },
                { s: 'CAMPAIGN_FEED', description: 'A CampaignFeed resource change.' },
                { s: 'AD_GROUP_BID_MODIFIER', description: 'An AdGroupBidModifier resource change.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list'],
}
