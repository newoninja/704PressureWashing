import { ArrowRight, ShieldCheck, Star, ThumbsUp } from 'lucide-react'
import { business } from '../data/siteData'
import { trackCallClick, trackEvent } from '../utils/analytics'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Licensed and Insured Exterior Cleaning</p>
          <h1>Keep Your Property Looking Its Best</h1>
          <p className="hero-subhead">
            Pressure washing, soft washing, window cleaning, and gutter brightening for Charlotte,
            Matthews, Indian Trail, and surrounding communities.
          </p>

          <div className="hero-actions">
            <a href="/quote" className="btn btn-primary btn-lg" onClick={() => trackEvent('cta_click', { source: 'hero_estimate' })}>
              Get a Free Estimate
              <ArrowRight size={16} />
            </a>
            <a href={`tel:${business.phoneHref}`} className="btn btn-secondary btn-lg" onClick={() => trackCallClick('hero')}>
              Call Today
            </a>
          </div>

          <div className="hero-trust-row">
            <div>
              <strong>{business.rating}</strong>
              <span>Google Rating</span>
            </div>
            <div>
              <strong>{business.reviewCount}</strong>
              <span>Happy Customers</span>
            </div>
            <div>
              <strong>{business.years}</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hero-card" aria-hidden="true">
          <img src="/logo.png" alt="704 Pressure Washing Services" />
          <p>Experience Exterior Cleaning Like No Other</p>
          <ul>
            <li>
              <ShieldCheck size={16} />
              Licensed and insured
            </li>
            <li>
              <Star size={16} />
              58+ five-star reviews
            </li>
            <li>
              <ThumbsUp size={16} />
              100% satisfaction guarantee
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
