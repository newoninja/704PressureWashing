const cache = new Map()
const galleryFallbackPairs = [
  { before: '/images/jobs/IMG_0051.jpg', after: '/images/jobs/IMG_0059.jpg' },
  { before: '/images/jobs/IMG_2551.jpg', after: '/images/jobs/IMG_2553.jpg' },
  { before: '/images/jobs/IMG_0909.jpg', after: '/images/jobs/IMG_0928.jpg' },
]

function sanitizeGalleryImage(src, fallback) {
  if (typeof src !== 'string') return fallback
  const value = src.trim()
  if (!value || value === '/logo.png' || value.endsWith('/logo.png')) return fallback
  return value
}

function normalizeGalleryProjects(projects) {
  if (!Array.isArray(projects)) return []

  return projects.map((project, index) => {
    const fallbackPair = galleryFallbackPairs[index] || galleryFallbackPairs[0]
    return {
      ...project,
      before: sanitizeGalleryImage(project?.before, fallbackPair.before),
      after: sanitizeGalleryImage(project?.after, fallbackPair.after),
    }
  })
}

async function fetchJson(path) {
  if (cache.has(path)) return cache.get(path)

  const request = fetch(path, { cache: 'no-store' }).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Failed to load ${path}: ${response.status}`)
    }
    return response.json()
  })

  cache.set(path, request)
  return request
}

export function clearContentCache() {
  cache.clear()
}

export function getAreas() {
  return fetchJson('/data/areas.json')
}

export function getServices() {
  return fetchJson('/data/services.json')
}

export function getLocationPosts() {
  return fetchJson('/data/location-posts.json')
}

export function getGalleryProjects() {
  return fetchJson('/data/gallery-projects.json').then(normalizeGalleryProjects)
}
