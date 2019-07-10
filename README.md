# amazon-ids [![CircleCI](https://circleci.com/gh/bizon/amazon-ids.svg?style=svg)](https://circleci.com/gh/bizon/amazon-ids)

> SDK for Amazon Marketplace Web Services

[![npm version](https://badgen.net/npm/v/@bizon/amazon-ids)](https://www.npmjs.com/package/@bizon/amazon-ids)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Getting started

```bash
npm install --save @bizon/amazon-ids
```

## API

### marketplaces

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
  domain: 'amazon.com.mx',
  mwsDomain: 'mws.amazonservices.com',
  vendorId: 'AVDBXBAVVSXLQ' }
*/
```

### `getMarketplaceByCode(id)`

```js
const {getMarketplaceByCode} = require('@bizon/amazon-ids')

console.log(getMarketplaceByCode('mx'))

/*
{ code: 'mx',
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  domain: 'amazon.com.mx',
  mwsDomain: 'mws.amazonservices.com',
  vendorId: 'AVDBXBAVVSXLQ' }
*/
```

### `getMarketplaceById(id)`

```js
const {getMarketplaceByDomain} = require('@bizon/amazon-ids')

console.log(getMarketplaceByDomain('Amazon.com.mx'))

/*
{ code: 'mx',
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  domain: 'amazon.com.mx',
  mwsDomain: 'mws.amazonservices.com',
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
