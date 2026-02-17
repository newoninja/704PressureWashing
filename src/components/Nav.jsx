import { useState } from 'react'
import { Clock, Menu, Phone, MapPin, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { business } from '../data/business'
import { trackCallClick } from '../utils/analytics'

const desktopLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Company', href: '/our-story' },
  { label: 'Areas Served', href: '/areas-served' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const mobileLinks = [
  ...desktopLinks,
  { label: 'Our Work', href: '/our-work' },
  { label: 'FAQs', href: '/faqs' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" id="top">
      <div className="top-strip" aria-label="Contact quick info">
        <div className="container top-strip-inner">
          <div className="top-strip-item">
            <Phone size={14} />
            <a href={`tel:${business.phoneHref}`} onClick={() => trackCallClick('top_strip')}>
              {business.phoneDisplay}
            </a>
          </div>
          <div className="top-strip-item top-strip-hide-sm">
            <MapPin size={14} />
            <span>{business.address}</span>
          </div>
          <div className="top-strip-item top-strip-hide-md">
            <Clock size={14} />
            <span>{business.hours}</span>
          </div>
        </div>
      </div>

      <div className="main-nav-wrap">
        <div className="container main-nav">
          <Link to="/" className="brand-lockup" aria-label="704 Pressure Washing Services home">
            <img src="/logo.png" alt="704 Pressure Washing Services" />
            <div>
              <p>704 Pressure Washing</p>
              <span>Charlotte, NC</span>
            </div>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {desktopLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Link to="/quote" className="btn btn-primary nav-estimate-btn">
              <span className="nav-estimate-full">Get Free Estimate</span>
              <span className="nav-estimate-short">Estimate</span>
            </Link>
            <button
              type="button"
              aria-label="Toggle mobile menu"
              className="menu-toggle"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <div className="container">
              {mobileLinks.map((link) => (
                <Link key={`${link.label}-${link.href}`} to={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${business.phoneHref}`}
                className="btn btn-primary mobile-call-btn"
                onClick={() => trackCallClick('mobile_menu')}
              >
                <Phone size={16} />
                Call {business.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
