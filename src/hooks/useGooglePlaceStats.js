import { useEffect, useState } from 'react'
import { business } from '../data/business'

const fallbackStats = {
  rating: Number.parseFloat(business.rating) || 5,
  reviewCount: Number.parseInt(String(business.reviewCount).replace(/[^\d]/g, ''), 10) || 86,
}

let cachedStats = null
let inFlight = null

async function fetchGooglePlaceStats() {
  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY || import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID || 'ChIJ6x_X-XjFQwgRaVFtSgZ7Www'

  if (!apiKey || !placeId) return fallbackStats

  const endpoint = `https://places.googleapis.com/v1/places/${placeId}`

  const response = await fetch(endpoint, {
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'rating,userRatingCount',
    },
  })

  if (!response.ok) throw new Error('Unable to load Google place stats')

  const data = await response.json()

  return {
    rating: typeof data.rating === 'number' ? data.rating : fallbackStats.rating,
    reviewCount:
      typeof data.userRatingCount === 'number' ? data.userRatingCount : fallbackStats.reviewCount,
  }
}

export default function useGooglePlaceStats() {
  const [stats, setStats] = useState(cachedStats || fallbackStats)

  useEffect(() => {
    let active = true

    if (cachedStats) return undefined

    if (!inFlight) {
      inFlight = fetchGooglePlaceStats()
        .then((result) => {
          cachedStats = result
          return result
        })
        .catch(() => fallbackStats)
        .finally(() => {
          inFlight = null
        })
    }

    inFlight.then((result) => {
      if (!active) return
      setStats(result)
    })

    return () => {
      active = false
    }
  }, [])

  return {
    ratingText: stats.rating.toFixed(1),
    reviewCountText: String(stats.reviewCount),
  }
}
