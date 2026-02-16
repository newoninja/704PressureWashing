import PageHeader from '../../components/PageHeader'
import { localBusinessSchema } from '../../data/seo'
import { ArrowRight, CheckCircle2, MapPin, Phone } from 'lucide-react'
import { business } from '../../data/siteData'

export default function BlogPostPage({ post }) {
  return (
    <>
      <PageHeader
        title={post.title}
        intro={post.intro}
        canonicalPath={`/blog/${post.slug}`}
        schema={localBusinessSchema(`/blog/${post.slug}`)}
      />
      <section className="section section-light">
        <div className="container blog-post-layout">
          <article className="blog-post">
            <div className="blog-post-highlight">
              <p className="blog-post-lead">
                {post.city} properties deal with humidity, pollen, and seasonal organic buildup that can
                impact curb appeal and surface longevity.
              </p>
            </div>

            <h2 className="blog-section-title">What Matters Most</h2>
            <ul className="blog-points">
              {post.points.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={16} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="blog-post-cta-inline">
              <p>
                Need help with {post.focus.toLowerCase()} in {post.city}? We provide free estimates and
                straightforward scheduling.
              </p>
              <a href="/quote" className="btn btn-primary">
                Request a Free Estimate
                <ArrowRight size={16} />
              </a>
            </div>
          </article>

          <aside className="blog-post-sidebar">
            <div className="blog-sidebar-card">
              <p className="blog-sidebar-kicker">Service Area</p>
              <p className="blog-sidebar-row">
                <MapPin size={16} />
                {post.city}
              </p>
              <p className="blog-sidebar-row">
                <Phone size={16} />
                {business.phoneDisplay}
              </p>
            </div>
            <div className="blog-sidebar-card blog-sidebar-card-cta">
              <h3>Ready to book exterior cleaning?</h3>
              <p>Get a fast quote and choose a time that works for your schedule.</p>
              <a href="/quote" className="btn btn-primary">
                Get Free Estimate
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
