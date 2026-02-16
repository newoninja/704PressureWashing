import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import useReveal from '../useReveal'
import { business } from '../data/siteData'

const AUTO_PLAY_MS = 4000

const fallbackReviews = [
  {
    name: 'Local Customer',
    text: 'Great service and excellent communication. Our home looked noticeably cleaner the same day.',
    rating: 5,
    date: '2025-01-01',
  },
]

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

export default function Testimonials() {
  const [reviews, setReviews] = useState(fallbackReviews)
  const [index, setIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const sectionRef = useReveal()

  useEffect(() => {
    let active = true

    async function loadReviews() {
      try {
        const response = await fetch('/data/reviews.json', { cache: 'no-store' })
        if (!response.ok) throw new Error('Unable to load reviews')

        const data = await response.json()
        const normalized = data
          .filter((review) => review?.name && review?.text)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 9)

        if (active && normalized.length) setReviews(normalized)
      } catch {
        if (active) setReviews(fallbackReviews)
      }
    }

    loadReviews()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth < 680) setCardsPerView(1)
      else if (window.innerWidth < 1020) setCardsPerView(2)
      else setCardsPerView(3)
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = Math.max(0, reviews.length - cardsPerView)
  const paused = useRef(false)

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex)
  }, [index, maxIndex])

  const goNext = useCallback(() => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  function goPrev() {
    setIndex((prev) => Math.max(0, prev - 1))
  }

  // Auto-play
  useEffect(() => {
    if (maxIndex <= 0) return
    const id = setInterval(() => {
      if (!paused.current) goNext()
    }, AUTO_PLAY_MS)
    return () => clearInterval(id)
  }, [maxIndex, goNext])

  const gapPx = 16
  const slidePercent = 100 / cardsPerView
  const offset = index * slidePercent

  return (
    <section className="section section-muted" ref={sectionRef}>
      <div className="container">
        <div className="reveal reveal-up">
          <p className="section-kicker">Customer Reviews</p>
          <h2>What Our Customers Say</h2>
          <p className="section-intro">
            We load the latest review set from your review data feed and show recent highlights.
          </p>
        </div>

        <div
          className="review-slider-wrap reveal reveal-up"
          style={{ animationDelay: '0.15s' }}
          onMouseEnter={() => { paused.current = true }}
          onMouseLeave={() => { paused.current = false }}
        >
          <div
            className="review-slider-track"
            style={{
              transform: `translateX(calc(-${offset}% - ${index * gapPx}px))`,
            }}
          >
            {reviews.map((review, reviewIndex) => (
              <article
                key={`${review.name}-${review.date}-${reviewIndex}`}
                className="review-card-v2 review-slide-card"
                style={{ width: `calc(${slidePercent}% - ${gapPx - gapPx / cardsPerView}px)` }}
              >
                <div className="review-card-top">
                  <strong className="review-name">{review.name}</strong>
                  <div className="review-stars" aria-label={`${review.rating || 5} star rating`}>
                    {Array.from({ length: review.rating || 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-meta">Google Review • {formatDate(review.date)}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="reviews-nav">
          <button type="button" className="reviews-arrow" onClick={goPrev} disabled={index === 0}>
            <ChevronLeft size={18} />
          </button>
          <span className="reviews-indicator">{index + 1} / {maxIndex + 1}</span>
          <button type="button" className="reviews-arrow" onClick={goNext} disabled={index >= maxIndex}>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="reviews-cta">
          <a href={business.reviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Leave a Review
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link">
            See All Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
