const memoize = require('memoizee')

const marketplaces = require('./marketplaces.json')

exports.marketplaces = marketplaces

exports.getMarketplaceById = memoize(id => {
  return marketplaces.find(marketplace => marketplace.id === id)
})

exports.getMarketplaceByCode = memoize(code => {
  return marketplaces.find(marketplace => marketplace.code === code)
})

exports.getMarketplaceByDomain = memoize(domain => {
  return marketplaces.find(marketplace => marketplace.domain === domain.toLowerCase())
})
