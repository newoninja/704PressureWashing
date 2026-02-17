import { ArrowRight, ShieldCheck, Star, ThumbsUp } from 'lucide-react'
import { business } from '../data/siteData'
import { trackCallClick, trackEvent } from '../utils/analytics'
import useGooglePlaceStats from '../hooks/useGooglePlaceStats'

export default function Hero() {
  const { ratingText, reviewCountText } = useGooglePlaceStats()

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
              Get Free Estimate
              <ArrowRight size={16} />
            </a>
            <a href={`tel:${business.phoneHref}`} className="btn btn-secondary btn-lg" onClick={() => trackCallClick('hero')}>
              Call {business.phoneDisplay}
            </a>
          </div>

          <div className="hero-proof-stack">
            <p className="hero-how">How it works: Request a quote, choose a time, and get a spotless exterior.</p>

            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-google-badge"
              onClick={() => trackEvent('cta_click', { source: 'hero_google_badge' })}
            >
              <div className="hero-google-badge-main">
                <div className="hero-google-stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" />
                  ))}
                </div>
                <span className="hero-google-score">{ratingText}/5.00</span>
              </div>
              <p>
                Over <strong>{reviewCountText}</strong> Happy Customers!
              </p>
              <span className="hero-google-icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </span>
            </a>

            <div className="hero-review-snippet" role="note" aria-label="Customer review highlight">
              <span className="hero-review-stars" aria-hidden="true">★★★★★</span>
              "Andrew did an outstanding job. Very professional and thorough." - Vickie D.
            </div>

            <div className="hero-trust-row" aria-label="Trust highlights">
              <div className="hero-trust-item">
                <strong>{ratingText}</strong>
                <span>Google Rating</span>
              </div>
              <div className="hero-trust-item">
                <strong>{reviewCountText}</strong>
                <span>Happy Customers</span>
              </div>
              <div className="hero-trust-item hero-trust-item-years">
                <strong>{business.years}</strong>
                <span>Years Experience</span>
              </div>
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
              {reviewCountText}+ five-star reviews
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
