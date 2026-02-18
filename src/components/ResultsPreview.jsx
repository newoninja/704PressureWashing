import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'
import useReveal from '../useReveal'
import useAsyncData from '../hooks/useAsyncData'
import { getGalleryProjects } from '../data/contentApi'

export default function ResultsPreview() {
  const sectionRef = useReveal()
  const { data: galleryProjects } = useAsyncData(getGalleryProjects, [])
  const featured = galleryProjects.slice(0, 3)
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (!activeProject) return

    function handleEscape(event) {
      if (event.key === 'Escape') setActiveProject(null)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [activeProject])

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
              <button
                type="button"
                className="results-preview-card-button"
                onClick={() => setActiveProject(project)}
                aria-label={`Open ${project.title} project details`}
              >
                <div className="results-preview-images">
                  <img src={project.before} alt={`${project.title} before cleaning`} className="results-image-before" />
                  <img src={project.after} alt={`${project.title} after cleaning`} className="results-image-after" />
                </div>
                <div className="results-preview-copy">
                  <p className="work-eyebrow">{project.location} • {project.service}</p>
                  <h3>{project.title}</h3>
                  <span className="results-preview-expand">View project details</span>
                </div>
              </button>
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

      {activeProject && (
        <div
          className="results-modal-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null)
          }}
        >
          <div className="results-modal" role="dialog" aria-modal="true" aria-labelledby="results-modal-title">
            <button
              type="button"
              className="results-modal-close"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
            >
              <X size={18} />
            </button>
            <div className="results-modal-head">
              <p className="work-eyebrow">{activeProject.location} • {activeProject.service}</p>
              <h3 id="results-modal-title">{activeProject.title}</h3>
              <p>{activeProject.result}</p>
            </div>
            <div className="results-modal-images">
              <figure>
                <img src={activeProject.before} alt={`${activeProject.title} before cleaning`} className="results-image-before" />
                <figcaption>Before</figcaption>
              </figure>
              <figure>
                <img src={activeProject.after} alt={`${activeProject.title} after cleaning`} />
                <figcaption>After</figcaption>
              </figure>
            </div>
            <div className="results-modal-actions">
              <Link to="/our-work" className="btn btn-secondary" onClick={() => setActiveProject(null)}>
                See More Projects
              </Link>
              <Link to="/quote" className="btn btn-primary" onClick={() => setActiveProject(null)}>
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
