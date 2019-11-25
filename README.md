# amazon-ids [![CircleCI](https://circleci.com/gh/bizon/amazon-ids.svg?style=svg)](https://circleci.com/gh/bizon/amazon-ids)

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
  console.log(marketplace)
}
```

### `getMarketplaceById(id)`

```js
const {getMarketplaceById} = require('@bizon/amazon-ids')

console.log(getMarketplaceById('A1AM78C64UM0Y8'))

/*
{ code: 'mx',
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  region: 'na',
  domain: 'amazon.com.mx',
  mwsDomain: 'mws.amazonservices.com',
  imagesDomain: 'images-na.ssl-images-amazon.com',
  vendorId: 'AVDBXBAVVSXLQ' }
*/
```

It’s also possible to find a marketplace by its multi-channel fulfilment identifier:

```js
const {getMarketplaceById} = require('@bizon/amazon-ids')

console.log(getMarketplaceById('A3H6HPSLHAK3XG', true))

/*
{ code: 'mx',
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  region: 'na',
  domain: 'amazon.com.mx',
  mwsDomain: 'mws.amazonservices.com',
  imagesDomain: 'images-na.ssl-images-amazon.com',
  vendorId: 'AVDBXBAVVSXLQ' }
*/
```

### `getMarketplaceByCode(code)`

```js
const {getMarketplaceByCode} = require('@bizon/amazon-ids')

console.log(getMarketplaceByCode('MX'))

/*
{ code: 'mx',
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  region: 'na',
  domain: 'amazon.com.mx',
  mwsDomain: 'mws.amazonservices.com',
  imagesDomain: 'images-na.ssl-images-amazon.com',
  vendorId: 'AVDBXBAVVSXLQ' }
*/
```

### `getMarketplaceByDomain(domain)`

```js
const {getMarketplaceByDomain} = require('@bizon/amazon-ids')

console.log(getMarketplaceByDomain('Amazon.com.mx'))

/*
{ code: 'mx',
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  region: 'na',
  domain: 'amazon.com.mx',
  mwsDomain: 'mws.amazonservices.com',
  imagesDomain: 'images-na.ssl-images-amazon.com',
  vendorId: 'AVDBXBAVVSXLQ' }
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
