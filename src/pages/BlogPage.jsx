import PageHeader from '../components/PageHeader'
import { locationPosts } from '../data/siteData'
import { localBusinessSchema } from '../data/seo'
import { ArrowRight, MapPin } from 'lucide-react'

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        intro="Local service guides and exterior cleaning resources for Charlotte-area homeowners."
        canonicalPath="/blog"
        schema={localBusinessSchema('/blog')}
      />
      <section className="section section-light">
        <div className="container blog-list">
          {locationPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <p className="blog-card-kicker">{post.focus}</p>
              <h3>{post.title}</h3>
              <p className="blog-card-meta">
                <MapPin size={14} />
                {post.city}
              </p>
              <p>{post.intro}</p>
              <a href={`/blog/${post.slug}`} className="blog-card-link">
                Read Guide
                <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
