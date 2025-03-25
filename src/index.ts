import _marketplaces from './marketplaces.json' with {type: 'json'}

export interface Marketplace {
  code: string
  id: string
  name: string
  region: string
  domain?: string
  advertisingApiDomain?: string
  imagesDomain?: string
  vendorId?: string
  sellerCentralDomain?: string
  vendorCentralDomain?: string
  currencyCode: string
}

/**
 * All the available marketplaces
 */
export const marketplaces: Marketplace[] = _marketplaces

/**
 * Get a marketplace by its id
 * @param id  The marketplace's id
 * @returns The marketplace
 */
export function getMarketplaceById(id: string) {
  return marketplaces.find((marketplace) => marketplace.id === id)
}

/**
 * Get a marketplace by its code
 * @param code The marketplace's code
 * @returns The markerplace
 */
export function getMarketplaceByCode(code: string) {
  code = code.toLowerCase()

  return marketplaces.find((marketplace) => marketplace.code === code)
}

/**
 * Get a marketplace by its domain
 * @param domain The marketplace's domain
 * @returns The marketplace
 */
export function getMarketplaceByDomain(domain: string) {
  domain = domain.toLowerCase()

  if (domain.startsWith('www.')) {
    domain = domain.slice(4)
  }

  return marketplaces.find((marketplace) => marketplace.domain === domain)
}
