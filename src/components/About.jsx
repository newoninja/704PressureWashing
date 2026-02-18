import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import useReveal from '../useReveal'

const highlights = [
  'Founded by owner Andrew Matheny with family support',
  'Locally owned and operated for Charlotte-area properties',
  'Reliable scheduling and clear communication',
  'Surface-safe methods for long-lasting results',
]

export default function About() {
  const sectionRef = useReveal()

  return (
    <section id="about" className="section section-light" ref={sectionRef}>
      <div className="container split-section">
        <div className="reveal reveal-right">
          <p className="section-kicker">Our Story</p>
          <h2>About Us</h2>
          <p>
            Our owner, Andrew Matheny, started 704 Pressure Washing Services with friends and family
            and a clear focus on dependable exterior cleaning. From the beginning, our goal has been
            simple: show up on time, do the work right, and treat every property with care. As a
            locally owned and operated business serving Charlotte, Matthews, Indian Trail, and
            surrounding areas, we take pride in delivering personalized service backed by attention
            to detail.
          </p>
          <p>
            Today, with over five years of experience, our approach is hands-on and straightforward.
            We work directly with property owners to understand their needs and provide cleaning
            solutions that fit their property, schedule, and goals. Every driveway, home exterior,
            window, and gutter surface we clean receives the same level of care, regardless of job
            size.
          </p>
          <p>
            We are committed to clear communication, fast response times, and service you can count
            on. Whether we are handling routine maintenance or a larger cleanup project, our focus
            stays the same: dependable exterior cleaning that improves curb appeal and protects your
            property.
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
