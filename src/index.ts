import {
  type Marketplace,
  type MarketplaceCode,
  type MarketplaceDomain,
  type MarketplaceId,
  marketplaces,
} from './marketplaces.js'

export {
  marketplaces,
  type Marketplace,
  type MarketplaceCode,
  type MarketplaceDomain,
  type MarketplaceId,
  type MarketplaceRegion,
} from './marketplaces.js'

/**
 Get a marketplace by its id
 @param id The Amazon marketplace identifier to look up
 @returns The matching marketplace, or `undefined` if none matches
 */
export function getMarketplaceById(id: MarketplaceId): Marketplace
export function getMarketplaceById(id: string): Marketplace | undefined
export function getMarketplaceById(id: string) {
  return marketplaces.find((marketplace) => marketplace.id === id)
}

/**
 Get a marketplace by its code
 @param code The country code to look up (case-insensitive)
 @returns The matching marketplace, or `undefined` if none matches
 */
export function getMarketplaceByCode(
  code: MarketplaceCode | Uppercase<MarketplaceCode>,
): Marketplace
export function getMarketplaceByCode(code: string): Marketplace | undefined
export function getMarketplaceByCode(code: string) {
  code = code.toLowerCase()

  return marketplaces.find((marketplace) => marketplace.code === code)
}

/**
 Get a marketplace by its domain
 @param domain The domain to look up (case-insensitive, `www.` prefix stripped)
 @returns The matching marketplace, or `undefined` if none matches
 */
export function getMarketplaceByDomain(
  domain: MarketplaceDomain | Uppercase<MarketplaceDomain> | `www.${MarketplaceDomain}`,
): Marketplace
export function getMarketplaceByDomain(domain: string): Marketplace | undefined
export function getMarketplaceByDomain(domain: string) {
  domain = domain.toLowerCase()

  if (domain.startsWith('www.')) {
    domain = domain.slice(4)
  }

  return marketplaces.find((marketplace) => marketplace.domain === domain)
}
