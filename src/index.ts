import mem from 'mem'

import _marketplaces from './marketplaces.json'

export interface Marketplace {
  code: string
  id: string
  name: string
  region: string
  domain?: string
  mwsDomain?: string
  advertisingApiDomain?: string
  imagesDomain?: string
  vendorId?: string
  sellerCentralDomain?: string
  vendorCentralDomain?: string
}

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

type MwsRegion = keyof typeof mwsRegionDomains

/**
 * All the available marketplaces
 */
export const marketplaces: Marketplace[] = _marketplaces

/**
 * Get a marketplace by its id
 * @param id  The marketplace's id
 * @returns The marketplace
 */
export const getMarketplaceById = mem((id: string) =>
  marketplaces.find((marketplace) => marketplace.id === id),
)

/**
 * Get a marketplace by its code
 * @param code The marketplace's code
 * @returns The markerplace
 */
export const getMarketplaceByCode = mem((code: string) => {
  code = code.toLowerCase()

  return marketplaces.find((marketplace) => marketplace.code === code)
})

/**
 * Get a marketplace by its domain
 * @param domain The marketplace's domain
 * @returns The marketplace
 */
export const getMarketplaceByDomain = mem((domain: string) => {
  domain = domain.toLowerCase()

  if (domain.startsWith('www.')) {
    domain = domain.slice(4)
  }

  return marketplaces.find((marketplace) => marketplace.domain === domain)
})

/**
 * Get marketplaces by an MWS domain
 * @param domain The MWS domain
 * @returns The marketplaces
 */
export const getMarketplacesByMwsDomain = mem((domain: string) =>
  marketplaces.filter((marketplace) => marketplace.mwsDomain === domain),
)

/**
 * Get marketplaces by an MWS region
 * @param mwsRegion The MWS region
 * @returns The marketplaces
 */
export const getMarketplacesByMwsRegion = mem((mwsRegion: MwsRegion) => {
  const mwsDomain = mwsRegionDomains[mwsRegion]

  if (!mwsDomain) {
    return []
  }

  return getMarketplacesByMwsDomain(mwsDomain)
})
