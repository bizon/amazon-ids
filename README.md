# amazon-ids

> Collection of Amazon identifiers

[![npm version](https://badgen.net/npm/v/@bizon/amazon-ids)](https://www.npmjs.com/package/@bizon/amazon-ids)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Getting started

```bash
npm install --save @bizon/amazon-ids
```

## API

### `marketplaces`

```js
const {marketplaces} = require('@bizon/amazon-ids')

for (const marketplace of marketplaces) {
  // console.log(marketplace)
}
```

### `getMarketplaceById(id)`

```js
const {getMarketplaceById} = require('@bizon/amazon-ids')

getMarketplaceById('ATVPDKIKX0DER')

/*
{
  code: 'us',
  id: 'ATVPDKIKX0DER',
  name: 'United States',
  region: 'na',
  domain: 'amazon.com',
  mwsDomain: 'mws.amazonservices.com',
  advertisingApiDomain: 'advertising-api.amazon.com',
  imagesDomain: 'images-na.ssl-images-amazon.com',
  vendorId: 'ATVPDKIKX0DER',
  sellerCentralDomain: 'sellercentral.amazon.com',
  vendorCentralDomain: 'vendorcentral.amazon.com',
  currencyCode: 'USD'
}
*/
```

It’s also possible to find multi-channel marketplaces:

```js
getMarketplaceById('A2ZV50J4W1RKNI')

/*
{
  code: 'us-non-amazon',
  id: 'A2ZV50J4W1RKNI',
  name: 'United States - Non-Amazon',
  region: 'na',
  currencyCode: 'USD'
}
*/
```

### `getMarketplaceByCode(code)`

```js
const {getMarketplaceByCode} = require('@bizon/amazon-ids')

getMarketplaceByCode('DE')

/*
{
  code: 'de',
  id: 'A1PA6795UKMFR9',
  name: 'Germany',
  region: 'eu',
  domain: 'amazon.de',
  mwsDomain: 'mws-eu.amazonservices.com',
  advertisingApiDomain: 'advertising-api-eu.amazon.com',
  imagesDomain: 'images-eu.ssl-images-amazon.com',
  vendorId: 'A3JWKAKR8XB7XF',
  sellerCentralDomain: 'sellercentral-europe.amazon.com',
  vendorCentralDomain: 'vendorcentral.amazon.de',
  currencyCode: 'EUR'
}
*/
```

### `getMarketplaceByDomain(domain)`

```js
const {getMarketplaceByDomain} = require('@bizon/amazon-ids')

getMarketplaceByDomain('Amazon.com.mx')

/*
{
  code: 'mx',
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  region: 'na',
  domain: 'amazon.com.mx',
  mwsDomain: 'mws.amazonservices.com.mx',
  imagesDomain: 'images-na.ssl-images-amazon.com',
  vendorId: 'AVDBXBAVVSXLQ',
  sellerCentralDomain: 'sellercentral.amazon.com.mx',
  vendorCentralDomain: 'vendorcentral.amazon.com.mx',
  currencyCode: 'MXN'
}
*/
```

### `getMarketplacesByMwsDomain(domain)`

```js
const {getMarketplacesByMwsDomain} = require('@bizon/amazon-ids')

getMarketplacesByMwsDomain('mws.amazonservices.com')

/*
[
  {
    code: 'us',
    id: 'ATVPDKIKX0DER',
    name: 'United States',
    region: 'na',
    domain: 'amazon.com',
    …
  },
  {
    code: 'br',
    id: 'A2Q3Y263D00KWC',
    name: 'Brazil',
    region: 'na',
    domain: 'amazon.com.br',
    …
  }
]
*/
```

### `getMarketplacesByMwsRegion(mwsRegion)`

MWS Regions is a concept introduced in [@bizon/mws-sdk](https://github.com/bizon/mws-sdk) – see [its readme](https://github.com/bizon/mws-sdk#region-and-marketplaces) to learn more about it.

```js
const {getMarketplacesByMwsRegion} = require('@bizon/amazon-ids')

getMarketplacesByMwsRegion('na')

/*
[
  {
    code: 'us',
    id: 'ATVPDKIKX0DER',
    name: 'United States',
    region: 'na',
    domain: 'amazon.com',
    …
  },
  {
    code: 'br',
    id: 'A2Q3Y263D00KWC',
    name: 'Brazil',
    region: 'na',
    domain: 'amazon.com.br',
    …
  }
]
*/
```

## License

MIT

## Miscellaneous

```
    ╚⊙ ⊙╝
  ╚═(███)═╝
 ╚═(███)═╝
╚═(███)═╝
 ╚═(███)═╝
  ╚═(███)═╝
   ╚═(███)═╝
```
