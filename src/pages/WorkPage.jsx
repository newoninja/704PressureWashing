import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'
import { getGalleryProjects } from '../data/contentApi'
import useAsyncData from '../hooks/useAsyncData'

function ProjectCard({ project }) {
  return (
    <article className="work-card">
      <header>
        <p className="work-eyebrow">{project.location} • {project.service}</p>
        <h3>{project.title}</h3>
      </header>
      <div className="work-image-grid">
        <figure>
          <img src={project.before} alt={`${project.title} before`} />
          <figcaption>Before</figcaption>
        </figure>
        <figure>
          <img src={project.after} alt={`${project.title} after`} />
          <figcaption>After</figcaption>
        </figure>
      </div>
      <p>{project.result}</p>
    </article>
  )
}

export default function WorkPage() {
  const { data: galleryProjects } = useAsyncData(getGalleryProjects, [])

  return (
    <>
      <PageHeader
        title="Our Work"
        intro="Recent exterior cleaning projects across Charlotte and surrounding service areas."
        canonicalPath="/our-work"
        schema={localBusinessSchema('/our-work')}
      />
      <section className="section section-light">
        <div className="container work-grid">
          {galleryProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
