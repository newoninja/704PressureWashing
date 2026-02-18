import { ArrowRight, Facebook, Instagram, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { trackCallClick, trackEvent } from '../utils/analytics'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top-cta">
        <div className="container footer-top-cta-inner">
          <div>
            <p className="footer-cta-kicker">Need Exterior Cleaning This Week?</p>
            <h3>Get fast scheduling and a free estimate.</h3>
          </div>
          <div className="footer-cta-actions">
            <Link to="/quote" className="btn btn-primary" onClick={() => trackEvent('cta_click', { source: 'footer_estimate' })}>
              Get Free Estimate
              <ArrowRight size={16} />
            </Link>
            <a href={`tel:${business.phoneHref}`} className="btn footer-call-btn" onClick={() => trackCallClick('footer_cta')}>
              <Phone size={16} />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/logo.png" alt="704 Pressure Washing Services" className="footer-logo" />
          <p>
            Professional pressure washing, soft washing, window cleaning, and gutter brightening for
            Charlotte area homes and businesses.
          </p>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li><Link to="/pressure-washing">Pressure Washing</Link></li>
            <li><Link to="/soft-washing">Soft Washing</Link></li>
            <li><Link to="/window-cleaning">Window Cleaning</Link></li>
            <li><Link to="/gutter-brightening">Gutter Brightening</Link></li>
          </ul>
        </div>

        <div className="footer-company">
          <h4>Company</h4>
          <ul>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/our-work">Our Work</Link></li>
            <li><Link to="/areas-served">Areas Served</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${business.phoneHref}`} className="footer-icon-link" onClick={() => trackCallClick('footer')}>
                <Phone size={14} />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="footer-social-link footer-social-facebook" href="https://www.facebook.com/people/704Pressurewashingservices/61558510378051/" target="_blank" rel="noopener noreferrer">
                <Facebook size={14} />
                Facebook
              </a>
            </li>
            <li>
              <a className="footer-social-link footer-social-instagram" href="https://www.instagram.com/704pressurewashingservices" target="_blank" rel="noopener noreferrer">
                <Instagram size={14} />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div>
            <p className="footer-copyright">© {currentYear} 704 Pressure Washing Services · All rights reserved.</p>
            <p className="footer-seo-address">{business.address}</p>
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
