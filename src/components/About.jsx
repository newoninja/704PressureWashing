import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import useReveal from '../useReveal'

const highlights = [
  'Locally owned and operated in Charlotte, NC',
  'Founded by Andrew Matheny with family support',
  'Direct communication from estimate to completion',
  'Tailored cleaning methods for each surface type',
]

export default function About() {
  const sectionRef = useReveal()

  return (
    <section id="about" className="section section-light" ref={sectionRef}>
      <div className="container split-section">
        <div className="reveal reveal-right">
          <p className="section-kicker">Our Story</p>
          <h2>Your Go-To Pressure Washing Company in Charlotte</h2>
          <p>
            704 Pressure Washing Services was built on one idea: show up on time, do the work right,
            and treat every property with care. We work with homeowners and businesses across
            Charlotte and nearby communities.
          </p>
          <p>
            Whether you need driveway cleaning, a full soft wash, or streak-free windows, we bring
            the right method for the job and keep you informed from start to finish.
          </p>
          <Link to="/services" className="text-link">
            See Our Services
          </Link>
        </div>

        <div className="story-panel reveal reveal-left" style={{ animationDelay: '0.15s' }}>
          <h3>Why customers keep calling us back</h3>
          <ul>
            {highlights.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
