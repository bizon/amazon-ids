import {getMarketplaceByDomain, getMarketplaceByCode} from '../src'

describe('index', () => {
  describe('getMarketplaceByCode', () => {
    it('should support all cases', () => {
      expect(getMarketplaceByCode('FR')?.domain).toBe('amazon.fr')
      expect(getMarketplaceByCode('fr')?.domain).toBe('amazon.fr')
      expect(getMarketplaceByCode('Fr')?.domain).toBe('amazon.fr')
    })

    it('should return undefined for unknown codes', () => {
      expect(getMarketplaceByCode('unknown')).toBeUndefined()
      expect(getMarketplaceByCode('')).toBeUndefined()
    })
  })

  describe('getMarketplaceByDomain', () => {
    it('should support all cases', () => {
      expect(getMarketplaceByDomain('Amazon.fr')?.domain).toBe('amazon.fr')
      expect(getMarketplaceByDomain('amazon.fr')?.domain).toBe('amazon.fr')
      expect(getMarketplaceByDomain('AMAZON.fr')?.domain).toBe('amazon.fr')
      expect(getMarketplaceByDomain('amazon.FR')?.domain).toBe('amazon.fr')
    })

    it('should support domains with the www subdomain', () => {
      expect(getMarketplaceByDomain('www.amazon.fr')?.domain).toBe('amazon.fr')
      expect(getMarketplaceByDomain('www.amazon.co.uk')?.domain).toBe('amazon.co.uk')
      expect(getMarketplaceByDomain('www.amazon.com')?.domain).toBe('amazon.com')
      expect(getMarketplaceByDomain('www.Amazon.de')?.domain).toBe('amazon.de')
      expect(getMarketplaceByDomain('WWW.amazoN.it')?.domain).toBe('amazon.it')
    })

    it('should return undefined for unknown domains', () => {
      expect(getMarketplaceByDomain('www.google.com')).toBeUndefined()
      expect(getMarketplaceByDomain('unknown')).toBeUndefined()
      expect(getMarketplaceByDomain('')).toBeUndefined()
    })
  })
})
