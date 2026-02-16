import { Facebook, Instagram, MapPin } from 'lucide-react'
import useReveal from '../useReveal'
import { areas, business } from '../data/siteData'

export default function Areas() {
  const sectionRef = useReveal()
  const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const mapSrc = googleApiKey
    ? `https://www.google.com/maps/embed/v1/view?key=${googleApiKey}&center=35.2271,-80.8431&zoom=10&maptype=roadmap`
    : 'https://maps.google.com/maps?q=Charlotte%2C%20NC&z=10&output=embed'

  return (
    <section id="areas" className="section section-light area-section" ref={sectionRef}>
      <div className="container area-spotlight-grid">
        <div className="area-copy-panel reveal reveal-right">
          <p className="section-kicker">Areas Served</p>
          <h2>Proudly Serving Charlotte, NC, and Nearby Areas</h2>
          <p className="section-intro">
            Reliable pressure washing services across Charlotte and neighboring communities in North
            Carolina and South Carolina.
          </p>

          <div className="area-list">
            {areas.map((area) => (
              <div key={area} className="area-list-item">
                <MapPin size={16} />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="area-meta">
            <span>{areas.length} Communities Covered</span>
            <span>Fast Scheduling Available</span>
          </div>
        </div>

        <div className="coverage-map-card reveal reveal-left" style={{ animationDelay: '0.2s' }}>
          <iframe
            title="Service area map"
            loading="lazy"
            className="coverage-map-embed"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
          />
          <div className="map-ring map-ring-outer" aria-hidden="true" />
          <div className="map-ring map-ring-inner" aria-hidden="true" />
          <div className="map-center-pin" aria-hidden="true">
            <MapPin size={24} />
          </div>
          <div className="map-label">Charlotte Core Radius</div>
          <a className="map-watermark" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
            Open Full Map
          </a>
        </div>

        <div className="area-social-rail" aria-label="Social links">
          <a className="area-social-link area-social-facebook" href="https://www.facebook.com/people/704Pressurewashingservices/61558510378051/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={16} />
            <span>Facebook</span>
          </a>
          <a className="area-social-link area-social-instagram" href="https://www.instagram.com/704pressurewashingservices" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={16} />
            <span>Instagram</span>
          </a>
          <a className="area-social-link area-social-maps" href={business.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
            <MapPin size={16} />
            <span>Map</span>
          </a>
        </div>
      </div>
    </section>
  )
}
