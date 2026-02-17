import { business } from './business'

const baseUrl = 'https://704pressurewashing.com'

export function localBusinessSchema(path = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    image: `${baseUrl}/logo.png`,
    telephone: business.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '303 Summermore Dr',
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      postalCode: '28270',
      addressCountry: 'US',
    },
    areaServed: 'Charlotte, NC Metro',
    url: `${baseUrl}${path}`,
    priceRange: '$$',
  }
}

export function serviceSchema(service, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in Charlotte, NC`,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phoneDisplay,
    },
    areaServed: 'Charlotte Metro',
    description: service.short,
    url: `${baseUrl}${path}`,
  }
}
