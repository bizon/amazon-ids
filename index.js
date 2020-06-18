const memoize = require('memoizee')

const marketplaces = require('./marketplaces.json')

const mwsRegionDomains = {
  // Generic MWS regions:
  na: 'mws.amazonservices.com',
  eu: 'mws-eu.amazonservices.com',
  fe: 'mws-fe.amazonservices.com',

  // Country specific MWS regions:
  ca: 'mws.amazonservices.ca',
  mx: 'mws.amazonservices.com.mx',
  ae: 'mws.amazonservices.ae',
  in: 'mws.amazonservices.in',
  jp: 'mws.amazonservices.jp',
  au: 'mws.amazonservices.com.au'
}

exports.marketplaces = marketplaces

exports.getMarketplaceById = memoize(id => {
  return marketplaces.find(marketplace => marketplace.id === id)
})

exports.getMarketplaceByCode = memoize(code => {
  return marketplaces.find(marketplace => marketplace.code === code.toLowerCase())
})

exports.getMarketplaceByDomain = memoize(domain => {
  return marketplaces.find(marketplace => marketplace.domain === domain.toLowerCase())
})

exports.getMarketplacesByMwsDomain = memoize(domain => {
  return marketplaces.filter(marketplace => marketplace.mwsDomain === domain)
})

exports.getMarketplacesByMwsRegion = memoize(mwsRegion => {
  const mwsDomain = mwsRegionDomains[String(mwsRegion).toLowerCase()]

  if (!mwsDomain) {
    return []
  }

  return this.getMarketplacesByMwsDomain(mwsDomain)
})
