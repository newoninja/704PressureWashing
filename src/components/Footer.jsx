import { MapPin, Phone } from 'lucide-react'
import { business } from '../data/siteData'
import { trackCallClick } from '../utils/analytics'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/logo.png" alt="704 Pressure Washing Services" className="footer-logo" />
          <p>
            Professional pressure washing, soft washing, window cleaning, and gutter brightening for
            Charlotte area homes and businesses.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="/pressure-washing">Pressure Washing</a></li>
            <li><a href="/soft-washing">Soft Washing</a></li>
            <li><a href="/window-cleaning">Window Cleaning</a></li>
            <li><a href="/gutter-brightening">Gutter Brightening</a></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/our-work">Our Work</a></li>
            <li><a href="/areas-served">Areas Served</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${business.phoneHref}`} className="footer-icon-link" onClick={() => trackCallClick('footer')}>
                <Phone size={14} />
                {business.phoneDisplay}
              </a>
            </li>
            <li className="footer-icon-link">
              <MapPin size={14} />
              {business.address}
            </li>
            <li><a href="https://www.facebook.com/people/704Pressurewashingservices" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/704pressurewashingservices" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>Copyright 2026 704 Pressure Washing Services. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
