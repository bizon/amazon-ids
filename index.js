const mem = require('mem')

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
  au: 'mws.amazonservices.com.au',
}

exports.marketplaces = marketplaces

exports.getMarketplaceById = mem((id) => marketplaces.find((marketplace) => marketplace.id === id))

exports.getMarketplaceByCode = mem((code) => {
  code = code.toLowerCase()

  return marketplaces.find((marketplace) => marketplace.code === code)
})

exports.getMarketplaceByDomain = mem((domain) => {
  domain = domain.toLowerCase()

  if (domain.startsWith('www.')) {
    domain = domain.slice(4)
  }

  return marketplaces.find((marketplace) => marketplace.domain === domain)
})

exports.getMarketplacesByMwsDomain = mem((domain) =>
  marketplaces.filter((marketplace) => marketplace.mwsDomain === domain),
)

exports.getMarketplacesByMwsRegion = mem((mwsRegion) => {
  const mwsDomain = mwsRegionDomains[String(mwsRegion).toLowerCase()]

  if (!mwsDomain) {
    return []
  }

  return this.getMarketplacesByMwsDomain(mwsDomain)
})
