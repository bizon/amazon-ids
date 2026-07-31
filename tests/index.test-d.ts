import {
  getMarketplaceByCode,
  getMarketplaceByDomain,
  getMarketplaceById,
  type Marketplace,
  type MarketplaceCode,
  type MarketplaceDomain,
  type MarketplaceId,
} from '../src/index.js'

type IsEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false

type Expect<T extends true> = T

declare const someString: string
declare const someCode: MarketplaceCode
declare const someId: MarketplaceId
declare const someDomain: MarketplaceDomain

const _byLiteralId = getMarketplaceById('ATVPDKIKX0DER')
const _byLiteralCode = getMarketplaceByCode('fr')
const _byLiteralUppercaseCode = getMarketplaceByCode('FR')
const _byLiteralDomain = getMarketplaceByDomain('amazon.fr')
const _byLiteralWwwDomain = getMarketplaceByDomain('www.amazon.fr')

const _byUnionId = getMarketplaceById(someId)
const _byUnionCode = getMarketplaceByCode(someCode)
const _byUnionDomain = getMarketplaceByDomain(someDomain)

const _byStringId = getMarketplaceById(someString)
const _byStringCode = getMarketplaceByCode(someString)
const _byStringDomain = getMarketplaceByDomain(someString)

// Codes of marketplaces without a domain are not part of `MarketplaceCode`
const _byDomainLessCode = getMarketplaceByCode('us-non-amazon')

// Known literals never return `undefined`
export type _ById = Expect<IsEqual<typeof _byLiteralId, Marketplace>>
export type _ByCode = Expect<IsEqual<typeof _byLiteralCode, Marketplace>>
export type _ByUppercaseCode = Expect<IsEqual<typeof _byLiteralUppercaseCode, Marketplace>>
export type _ByDomain = Expect<IsEqual<typeof _byLiteralDomain, Marketplace>>
export type _ByWwwDomain = Expect<IsEqual<typeof _byLiteralWwwDomain, Marketplace>>

// Values typed with one of the unions are known too
export type _ByIdUnion = Expect<IsEqual<typeof _byUnionId, Marketplace>>
export type _ByCodeUnion = Expect<IsEqual<typeof _byUnionCode, Marketplace>>
export type _ByDomainUnion = Expect<IsEqual<typeof _byUnionDomain, Marketplace>>

// Arbitrary strings stay optional
export type _ByStringId = Expect<IsEqual<typeof _byStringId, Marketplace | undefined>>
export type _ByStringCode = Expect<IsEqual<typeof _byStringCode, Marketplace | undefined>>
export type _ByStringDomain = Expect<IsEqual<typeof _byStringDomain, Marketplace | undefined>>
export type _ByDomainLessCode = Expect<IsEqual<typeof _byDomainLessCode, Marketplace | undefined>>
