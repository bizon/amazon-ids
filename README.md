# amazon-ids

> Collection of Amazon identifiers

[![npm version](https://img.shields.io/npm/v/@bizon/amazon-ids)](https://www.npmjs.com/package/@bizon/amazon-ids)
[![codecov](https://codecov.io/github/bizon/amazon-ids/graph/badge.svg?token=U6I6anuPfw)](https://codecov.io/github/bizon/amazon-ids)
[![XO code style](https://img.shields.io/badge/code_style-xo-cyan)](https://github.com/xojs/xo)

[<img src="https://files.bizon.solutions/images/logo/bizon-horizontal.png" alt="Bizon" width="250"/>](https://www.bizon.solutions?utm_source=github&utm_medium=readme&utm_campaign=amazon-ids)

## CI

[![Tests](https://github.com/bizon/amazon-ids/actions/workflows/tests.yml/badge.svg)](https://github.com/bizon/amazon-ids/actions/workflows/tests.yml)
[![Release](https://github.com/bizon/amazon-ids/actions/workflows/release.yml/badge.svg)](https://github.com/bizon/amazon-ids/actions/workflows/release.yml)

## Getting started

```bash
npm install --save @bizon/amazon-ids
```

## API

### `marketplaces`

```js
const { marketplaces } = require("@bizon/amazon-ids");

for (const marketplace of marketplaces) {
  // console.log(marketplace)
}
```

### `getMarketplaceById(id)`

```js
const { getMarketplaceById } = require("@bizon/amazon-ids");

getMarketplaceById("ATVPDKIKX0DER");

/*
{
  code: 'us',
  id: 'ATVPDKIKX0DER',
  name: 'United States',
  region: 'na',
  domain: 'amazon.com',
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
getMarketplaceById("A2ZV50J4W1RKNI");

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
const { getMarketplaceByCode } = require("@bizon/amazon-ids");

getMarketplaceByCode("DE");

/*
{
  code: 'de',
  id: 'A1PA6795UKMFR9',
  name: 'Germany',
  region: 'eu',
  domain: 'amazon.de',
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
const { getMarketplaceByDomain } = require("@bizon/amazon-ids");

getMarketplaceByDomain("Amazon.com.mx");

/*
{
  code: 'mx',
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  region: 'na',
  domain: 'amazon.com.mx',
  imagesDomain: 'images-na.ssl-images-amazon.com',
  vendorId: 'AVDBXBAVVSXLQ',
  sellerCentralDomain: 'sellercentral.amazon.com.mx',
  vendorCentralDomain: 'vendorcentral.amazon.com.mx',
  currencyCode: 'MXN'
}
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
