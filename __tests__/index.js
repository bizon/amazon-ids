const {
  getMarketplaceByDomain,
} = require('..')

describe('index', () => {
  describe('getMarketplaceByDomain', () => {
    it('should support all cases', () => {
      expect(getMarketplaceByDomain('Amazon.fr').domain).toBe('amazon.fr')
      expect(getMarketplaceByDomain('amazon.fr').domain).toBe('amazon.fr')
      expect(getMarketplaceByDomain('AMAZON.fr').domain).toBe('amazon.fr')
      expect(getMarketplaceByDomain('amazon.FR').domain).toBe('amazon.fr')
    })

    it('should support domains with the www subdomain', () => {
      expect(getMarketplaceByDomain('www.amazon.fr').domain).toBe('amazon.fr')
      expect(getMarketplaceByDomain('www.amazon.co.uk').domain).toBe('amazon.co.uk')
      expect(getMarketplaceByDomain('www.amazon.com').domain).toBe('amazon.com')
      expect(getMarketplaceByDomain('www.Amazon.de').domain).toBe('amazon.de')
      expect(getMarketplaceByDomain('WWW.amazoN.it').domain).toBe('amazon.it')

      expect(getMarketplaceByDomain('www.google.com')).toBeUndefined()
    })
  })
})
