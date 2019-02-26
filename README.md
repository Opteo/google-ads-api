<p align="center">
  <a href="https://github.com/opteo/google-ads-api">
    Google Ads Api
  </a>
</p>

<p align="center">
  Unofficial Google Ads API client library for Node
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/google-ads-api">
    <img src="https://img.shields.io/npm/v/google-ads-api.svg?style=flat-square">
  </a>
  <a>
    <img src="https://img.shields.io/npm/dm/google-ads-api.svg?style=flat-square">
    </a>
  <a>
    <img src="https://img.shields.io/david/opteo/google-ads-api.svg?style=flat-square">
  </a>
</p>

<p align="center">Built by <a href="https://opteo.com">Opteo</a></p>

<p align="center">
  <a href="https://opteo.com">
    <img src="https://app.opteo.com/icons/logo.svg">
  </a>
</p>

> ⚠️ **Caution: This project is still under heavy development.**

## Installation

```bash
$ yarn add google-ads-api
```

## Usage

### Authentication

```javascript
import GoogleAdsApi from 'google-ads-api'

const google_ads_js = new GoogleAdsApi({
    client_id: '2345234523-0r123fwfanq6umje125rewc2134n.apps.googleusercontent.com',
    client_secret: '8TLfdsSAJ3rhEK8LbUvSAO',
    developer_token: 'EBI_T2FAGKE3ABCEF',
})

const customer = google_ads_js.Customer({
    customer_account_id: '123-123-123',
    manager_cid: '456-456-456',
    refresh_token: '1/fSBD8aGFjQkb0FlCYO5ASNDSJ27-crNoGFdhKQk',
})
```

### Basic Usage

```javascript
// Get single campaign
const camapign = await customer.campaigns.get('123123123')

// List multiple ad groups
const adgroups = await customer.adgroups.list({
    campaign_id: '123123123',
    limit: 15,
})

// Query using report method
const campaigns = await customer.report({
    entity: 'campaign',
    attributes: ['id'],
    metrics: ['cost', 'clicks'],
    constraints: [{ status: 'ENABLED' }],
    from_date: '2019-01-01',
})
```

### Using Google Ads Query Language

```javascript
const campaigns = await customer.search(`
    SELECT campaign.id, campaign.name, campaign.status
    FROM campaign
    ORDER BY campaign.id
`)

const campaigns = await customer.search(`
    SELECT 
        campaign.id, campaign.name, campaign.status, 
        metrics.impressions, metrics.cost
    FROM campaign
    WHERE campaign.status = 'PAUSED' AND metrics.impressions > 5
    ORDER BY campaign.id
`)
```

<br/>
<br/>

## Google Ads Query Language

#### Query Language Grammar

```
Query            -> SelectClause FromClause? WhereClause? OrderByClause? LimitClause?
SelectClause     -> SELECT FieldName (, FieldName)*
FromClause       -> FROM ResourceName
WhereClause      -> WHERE Condition (AND Condition)*
OrderByClause    -> ORDER BY Ordering (, Ordering)*
LimitClause      -> LIMIT PositiveInteger

Condition        -> FieldName Operator Value
Operator         -> = | != | > | >= | < | <= | IN | NOT IN |
                    LIKE | NOT LIKE | CONTAINS ANY | CONTAINS ALL |
                    CONTAINS NONE | IS NULL | IS NOT NULL | DURING |
                    BETWEEN
Value            -> Literal | LiteralList | Number | NumberList | String |
                    StringList | Function
Ordering         -> FieldName (ASC | DESC)?

FieldName        -> [a-z] ([a-zA-Z0-9._])*
ResourceName     -> [a-z] ([a-zA-Z_])*

StringList       -> ( String (, String)* )
LiteralList      -> ( Literal (, Literal)* )
NumberList       -> ( Number (, Number)* )

PositiveInteger  -> [1-9] ([0-9])*
Number           -> -? [0-9]+ (. [0-9] [0-9]*)?
String           -> (' Char* ') | (" Char* ")
Literal          -> [a-zA-Z0-9_]*

Function         -> LAST_14_DAYS | LAST_30_DAYS | LAST_7_DAYS |
                    LAST_BUSINESS_WEEK | LAST_MONTH | LAST_WEEK_MON_SUN |
                    LAST_WEEK_SUN_SAT | THIS_MONTH | THIS_WEEK_MON_TODAY |
                    THIS_WEEK_SUN_TODAY | TODAY | YESTERDAY
```

-   `?` indicates an optional element.
-   `*` means zero or more; `+` means one or more.
-   `(xxxxxx)` indicates a grouping.
-   `[a-z0-9]` signifies character ranges.
-   `|` stand for "or".

For more information on the Google Ads Query Language, visit [Google Ads Api Docs](https://developers.google.com/google-ads/api/docs/query/overview).
