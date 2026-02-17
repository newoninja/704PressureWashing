import { useEffect, useState } from 'react'

export default function useAsyncData(loadFn, initialValue) {
  const [data, setData] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    async function load() {
      try {
        setLoading(true)
        const result = await loadFn()
        if (!active) return
        setData(result)
        setError(null)
      } catch (err) {
        if (!active) return
        setError(err)
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    load()
    return () => {
      active = false
    }
  }, [loadFn])

  return { data, loading, error }
}
