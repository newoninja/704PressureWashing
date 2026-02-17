import { ArrowRight, MoveHorizontal, Star, UserRound } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { getGalleryProjects } from '../data/contentApi'
import useAsyncData from '../hooks/useAsyncData'
import { trackCallClick, trackEvent } from '../utils/analytics'
import useGooglePlaceStats from '../hooks/useGooglePlaceStats'

export default function Hero() {
  const { ratingText, reviewCountText } = useGooglePlaceStats()
  const { data: galleryProjects } = useAsyncData(getGalleryProjects, [])
  const [split, setSplit] = useState(52)
  const [hasTeamPhoto, setHasTeamPhoto] = useState(true)

  const featuredProject = useMemo(() => galleryProjects[0] || null, [galleryProjects])
  const beforeImage = featuredProject?.before || '/logo.png'
  const afterImage = featuredProject?.after || '/logo.png'
  const beforeIsStyledFallback = beforeImage === afterImage

  return (
    <section className="hero-section">
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/hero-cleaning.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/5698710/5698710-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Licensed and Insured Exterior Cleaning</p>
          <h1>
            Keep Your Property
            <br />
            Looking Its <span className="hero-headline-accent">Best</span>
          </h1>
          <p className="hero-subhead">
            Pressure washing, soft washing, window cleaning, and gutter brightening for Charlotte,
            Matthews, Indian Trail, and surrounding communities.
          </p>

          <div className="hero-actions">
            <Link id="hero-primary-cta" to="/quote" className="btn btn-primary btn-lg" onClick={() => trackEvent('cta_click', { source: 'hero_estimate' })}>
              Get Free Estimate
              <ArrowRight size={16} />
            </Link>
            <a href={`tel:${business.phoneHref}`} className="btn btn-secondary btn-lg" onClick={() => trackCallClick('hero')}>
              Call {business.phoneDisplay}
            </a>
          </div>
          <a href={`tel:${business.phoneHref}`} className="hero-call-inline" onClick={() => trackCallClick('hero_inline')}>
            Or call {business.phoneDisplay}
          </a>

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

        <div className="hero-visual-stack" aria-label="Before and after cleaning preview">
          <div className="before-after-card">
            <div className="before-after-head">
              <p>Before / After</p>
              <span>Drag to compare results</span>
            </div>
            <div className="before-after-frame">
              <img className="before-after-image before-after-after" src={afterImage} alt="Cleaned driveway after pressure washing" />
              <div className="before-after-before-layer" style={{ width: `${split}%` }}>
                <img
                  className={`before-after-image before-after-before ${beforeIsStyledFallback ? 'before-after-before-fallback' : ''}`}
                  src={beforeImage}
                  alt="Driveway before pressure washing service"
                />
              </div>
              <div className="before-after-divider" style={{ left: `${split}%` }}>
                <span><MoveHorizontal size={14} /></span>
              </div>
              <input
                type="range"
                min="8"
                max="92"
                value={split}
                onChange={(event) => setSplit(Number(event.target.value))}
                className="before-after-slider"
                aria-label="Slide to compare before and after cleaning"
              />
              <span className="before-label">Before</span>
              <span className="after-label">After</span>
            </div>
          </div>

          <div className="hero-team-card">
            {hasTeamPhoto ? (
              <img
                src="/team-photo.jpg"
                alt="704 Pressure Washing team"
                onError={() => setHasTeamPhoto(false)}
              />
            ) : (
              <div className="hero-team-placeholder" aria-hidden="true">
                <UserRound size={42} />
              </div>
            )}
            <div>
              <p>Owner-led, local service you can trust.</p>
              {!hasTeamPhoto && <small>Add `public/team-photo.jpg` to show your real team photo.</small>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
