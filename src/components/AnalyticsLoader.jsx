import { useEffect } from 'react'

export default function AnalyticsLoader() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (!measurementId || typeof window === 'undefined') return
    if (document.getElementById('ga-script')) return

    const script = document.createElement('script')
    script.id = 'ga-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`

    const inline = document.createElement('script')
    inline.id = 'ga-inline'
    inline.textContent = [
      'window.dataLayer = window.dataLayer || [];',
      'function gtag(){dataLayer.push(arguments);}',
      "gtag('js', new Date());",
      `gtag('config', '${measurementId}');`,
    ].join('')

    document.head.appendChild(script)
    document.head.appendChild(inline)

    return () => {
      const scriptEl = document.getElementById('ga-script')
      const inlineEl = document.getElementById('ga-inline')
      if (scriptEl) scriptEl.remove()
      if (inlineEl) inlineEl.remove()
    }
  }, [])

  return null
}
