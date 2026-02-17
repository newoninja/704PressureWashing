import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'
import { getLocationPosts } from '../data/contentApi'
import useAsyncData from '../hooks/useAsyncData'

export default function BlogPage() {
  const { data: locationPosts } = useAsyncData(getLocationPosts, [])

  return (
    <>
      <PageHeader
        title="Blog"
        intro="Local service guides and exterior cleaning resources for Charlotte-area homeowners."
        canonicalPath="/blog"
        schema={localBusinessSchema('/blog')}
      />
      <section className="section section-light blog-index-section">
        <div className="container blog-list">
          {locationPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link to={`/blog/${post.slug}`} className="blog-card-anchor" aria-label={`Open blog post: ${post.title}`}>
                <p className="blog-card-kicker">{post.focus}</p>
                <h3>{post.title}</h3>
                <p className="blog-card-meta">
                  <MapPin size={14} />
                  {post.city}
                </p>
                <p>{post.intro}</p>
                <div className="blog-card-footer">
                  <span className="blog-card-readtime">
                    <Clock3 size={13} />
                    2 min read
                  </span>
                  <span className="blog-card-link">
                    Read Guide
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
