import useReveal from '../useReveal'
import { services } from '../data/siteData'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <span className="service-icon">
        <Icon size={24} />
      </span>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <a href={`/${service.slug}`}>Learn More</a>
    </article>
  )
}

export default function Services() {
  const sectionRef = useReveal()

  return (
    <section id="services" className="section section-muted" ref={sectionRef}>
      <div className="container">
        <div className="reveal reveal-up">
          <p className="section-kicker">Our Services</p>
          <h2>Exterior Cleaning Services Built for Real Results</h2>
          <p className="section-intro">
            Every service is tailored to your property with the correct pressure, chemistry, and
            technique for long-lasting results.
          </p>
        </div>

        <div className="services-grid reveal stagger-children">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
