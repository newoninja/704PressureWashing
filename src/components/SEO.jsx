import { useEffect } from 'react'

function ensureMeta(name, attr = 'name') {
  let element = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  return element
}

export default function SEO({ title, description, canonicalPath = '/', schema = null }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | 704 Pressure Washing Services` : '704 Pressure Washing Services'
    document.title = fullTitle

    const desc = ensureMeta('description')
    desc.setAttribute('content', description)

    const ogTitle = ensureMeta('og:title', 'property')
    ogTitle.setAttribute('content', fullTitle)

    const ogDesc = ensureMeta('og:description', 'property')
    ogDesc.setAttribute('content', description)

    const ogType = ensureMeta('og:type', 'property')
    ogType.setAttribute('content', 'website')

    const ogImage = ensureMeta('og:image', 'property')
    ogImage.setAttribute('content', '/logo.png')

    const canonicalHref = `${window.location.origin}${canonicalPath}`
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalHref)

    let script = document.head.querySelector('script[data-schema="local-seo"]')
    if (schema) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-schema', 'local-seo')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(schema)
    } else if (script) {
      script.remove()
    }
  }, [title, description, canonicalPath, schema])

  return null
}
