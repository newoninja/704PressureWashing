const cache = new Map()

async function fetchJson(path) {
  if (cache.has(path)) return cache.get(path)

  const request = fetch(path, { cache: 'force-cache' }).then(async (response) => {
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
  return fetchJson('/data/gallery-projects.json')
}
