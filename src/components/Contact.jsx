import { useState } from 'react'
import { CheckCircle2, Clock, MapPin, Phone, Send, Star } from 'lucide-react'
import useReveal from '../useReveal'
import { business, services } from '../data/siteData'
import { trackCallClick, trackFormSubmit } from '../utils/analytics'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const sectionRef = useReveal()

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
              <p>We received your request and will contact you soon.</p>
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

              <div className="form-row">
                <label>
                  First Name
                  <input type="text" name="firstName" required />
                </label>
                <label>
                  Last Name
                  <input type="text" name="lastName" required />
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

              <div className="form-row">
                <label>
                  Service Address
                  <input type="text" name="serviceAddress" placeholder="Street, City, State" required />
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

              <button type="submit" className="btn btn-primary btn-full" disabled={status === 'submitting'}>
                <Send size={16} />
                {status === 'submitting' ? 'Sending...' : 'Get My Free Estimate'}
              </button>

              {status === 'error' && <p className="form-error">Something went wrong. Please call us directly.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
