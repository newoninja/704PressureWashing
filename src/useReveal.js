import { useEffect, useRef } from 'react'

export default function useReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
