import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import useReveal from '../useReveal'
import useAsyncData from '../hooks/useAsyncData'
import { getGalleryProjects } from '../data/contentApi'

export default function ResultsPreview() {
  const sectionRef = useReveal()
  const { data: galleryProjects } = useAsyncData(getGalleryProjects, [])
  const featured = galleryProjects.slice(0, 3)

  return (
    <section className="section section-light results-preview" ref={sectionRef}>
      <div className="container">
        <div className="reveal reveal-up">
          <p className="section-kicker">Action Shots</p>
          <h2>Real Before &amp; After Results</h2>
          <p className="section-intro">
            See what happens when buildup gets removed with the right pressure and process.
          </p>
        </div>

        <div className="results-preview-grid reveal stagger-children">
          {featured.map((project) => (
            <article key={project.title} className="results-preview-card">
              <div className="results-preview-images">
                <img src={project.before} alt={`${project.title} before cleaning`} className="results-image-before" />
                <img src={project.after} alt={`${project.title} after cleaning`} className="results-image-after" />
              </div>
              <div className="results-preview-copy">
                <p className="work-eyebrow">{project.location} • {project.service}</p>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="results-preview-cta reveal reveal-up" style={{ animationDelay: '0.1s' }}>
          <Link to="/our-work" className="btn btn-primary">
            See More Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
