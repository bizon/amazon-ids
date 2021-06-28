export declare interface Marketplace {
  code: string;
  id: string;
  name: string;
  region: string;
  domain?: string;
  mwsDomain?: string;
  advertisingApiDomain?: string;
  imagesDomain?: string;
  vendorId?: string;
}

/**
 * All the available marketplaces
 */
export declare const marketplaces: Marketplace[]

/**
 * Get a marketplace by its id
 * @param id  The marketplace's id
 * @returns The marketplace
 */
export declare function getMarketplaceById(id: string): Marketplace | undefined

/**
 * Get a marketplace by its code
 * @param code The marketplace's code
 * @returns The markerplace
 */
export declare function getMarketplaceByCode(code: string): Marketplace | undefined

/**
 * Get a marketplace by its domain
 * @param domain The marketplace's domain
 * @returns The marketplace
 */
export declare function getMarketplaceByDomain(domain: string): Marketplace | undefined

/**
 * Get several marketplaces by a MWS domain
 * @param domain The MWS domain
 * @returns The marketplaces
 */
export declare function getMarketplacesByMwsDomain(domain: string): Marketplace[]

/**
 * Get several marketplaces by a MWS region
 * @param mwsRegion The MWS region
 * @returns The marketplaces
 */
export declare function getMarketplacesByMwsRegion(mwsRegion: string): Marketplace[]
