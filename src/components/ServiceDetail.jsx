import { CheckCircle2 } from 'lucide-react'
import { business } from '../data/siteData'

export default function ServiceDetail({ service }) {
  const Icon = service.icon

  return (
    <section className="section section-light">
      <div className="container split-section">
        <div>
          <p className="section-kicker">{service.title}</p>
          <h2>{service.hero}</h2>
          <p>
            We use the right method for each surface and keep communication clear throughout the
            entire project.
          </p>
          <a href="/quote" className="btn btn-primary">Request a Free Estimate</a>
        </div>

        <div className="story-panel service-panel">
          <h3>
            <Icon size={20} />
            What’s Included
          </h3>
          <ul>
            {service.details.map((detail) => (
              <li key={detail}>
                <CheckCircle2 size={18} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <p className="service-panel-note">Call {business.phoneDisplay} for same-week availability.</p>
        </div>
      </div>
    </section>
  )
}
