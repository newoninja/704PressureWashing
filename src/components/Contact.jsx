import { useState } from 'react'
import { CheckCircle2, Clock, MapPin, Phone, Send, ShieldCheck, Star } from 'lucide-react'
import useReveal from '../useReveal'
import { business } from '../data/business'
import { trackCallClick, trackFormSubmit } from '../utils/analytics'
import useGooglePlaceStats from '../hooks/useGooglePlaceStats'
import useAsyncData from '../hooks/useAsyncData'
import { getServices } from '../data/contentApi'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const sectionRef = useReveal()
  const { ratingText, reviewCountText } = useGooglePlaceStats()
  const { data: services } = useAsyncData(getServices, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })

      if (!response.ok) throw new Error('Request failed')

      trackFormSubmit('contact', 'success')
      setStatus('success')
      form.reset()
    } catch {
      trackFormSubmit('contact', 'error')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section-light" ref={sectionRef}>
      <div className="container contact-grid">
        <div className="reveal reveal-right">
          <p className="section-kicker">Contact Us</p>
          <h2>Book Your Exterior Washing Service Today</h2>
          <p className="section-intro">
            Request a free estimate, choose your preferred contact method, and we will respond quickly.
          </p>

          <div className="contact-rating-badge" aria-label="Google rating">
            <span>★★★★★</span>
            <strong>Rated {ratingText}/5.0 by {reviewCountText} customers</strong>
          </div>

          <div className="contact-info-card">
            <a href={`tel:${business.phoneHref}`} onClick={() => trackCallClick('contact_panel')}>
              <Phone size={16} />
              <span>{business.phoneDisplay}</span>
            </a>
            <div>
              <MapPin size={16} />
              <span>{business.address}</span>
            </div>
            <div>
              <Clock size={16} />
              <span>{business.hours}</span>
            </div>
            <a href={business.reviewUrl} target="_blank" rel="noopener noreferrer" className="review-link">
              <Star size={16} />
              Leave A Review
            </a>
          </div>
        </div>

        <div className="reveal reveal-left" style={{ animationDelay: '0.15s' }}>
          {status === 'success' ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={30} />
              <h3>Thanks for reaching out.</h3>
              <p>We received your request and will contact you within a few business hours.</p>
            </div>
          ) : (
            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <h3 className="form-section-title">Contact Details</h3>
              <div className="form-row">
                <label>
                  First Name
                  <input type="text" name="firstName" required />
                </label>
                <label>
                  Last Name
                  <input type="text" name="lastName" />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Email
                  <input type="email" name="email" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" required />
                </label>
              </div>

              <h3 className="form-section-title">Project Details</h3>
              <div className="form-row">
                <label>
                  Service Address
                  <input type="text" name="serviceAddress" placeholder="Street, City, State" />
                </label>
                <label>
                  ZIP Code
                  <input type="text" name="zip" required />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Service Needed
                  <select name="service" required>
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Preferred Contact
                  <select name="preferredContact" required>
                    <option value="">Choose one</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Email">Email</option>
                  </select>
                </label>
              </div>

              <label className="full-width-field">
                Project Notes
                <textarea name="message" rows="4" placeholder="Tell us what you want cleaned and any access notes." />
              </label>

              <label className="check-field">
                <input type="checkbox" name="smsOptIn" value="yes" />
                <span>I agree to receive SMS updates about my estimate and appointment.</span>
              </label>

              <div className="form-reassurance" role="note">
                <span><ShieldCheck size={14} /> 100% Free Estimate</span>
                <span><Clock size={14} /> Fast Response</span>
                <span><ShieldCheck size={14} /> No Spam, Ever</span>
              </div>

              <button type="submit" className="btn btn-primary btn-full" disabled={status === 'submitting'}>
                <Send size={16} />
                {status === 'submitting' ? 'Sending...' : 'Get Free Estimate'}
              </button>

              {status === 'error' && <p className="form-error">Something went wrong. Please call us directly.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
