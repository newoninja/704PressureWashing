import { Link } from 'react-router-dom'
import useReveal from '../useReveal'
import useAsyncData from '../hooks/useAsyncData'
import { getServices } from '../data/contentApi'
import { decorateServices } from '../data/serviceIcons'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <span className="service-icon">
        <Icon size={22} />
      </span>
      <h3>{service.title}</h3>
      <p className="service-best-for">{service.bestFor}</p>
      <p>{service.short}</p>
      <Link to={`/${service.slug}`}>Learn More</Link>
    </article>
  )
}

export default function Services() {
  const sectionRef = useReveal()
  const { data: rawServices } = useAsyncData(getServices, [])
  const services = decorateServices(rawServices)

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
