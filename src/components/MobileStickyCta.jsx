import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { business } from '../data/business'

export default function MobileStickyCta() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function updateVisibility() {
      const isMobile = window.innerWidth <= 760
      const onHomePage = pathname === '/'
      const scrolledPastHero = window.scrollY > 340
      setVisible(isMobile && onHomePage && scrolledPastHero)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div className="mobile-sticky-cta" role="region" aria-label="Quick contact actions">
      <a href={`tel:${business.phoneHref}`} className="mobile-sticky-btn mobile-sticky-btn-call">
        <Phone size={16} />
        Call Now
      </a>
      <Link to="/quote" className="mobile-sticky-btn mobile-sticky-btn-quote">
        Get Quote
      </Link>
    </div>
  )
}
