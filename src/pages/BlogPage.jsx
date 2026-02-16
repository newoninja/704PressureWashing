import PageHeader from '../components/PageHeader'
import { locationPosts } from '../data/siteData'
import { localBusinessSchema } from '../data/seo'

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
              <p className="work-eyebrow">{post.city} • {post.focus}</p>
              <h3>{post.title}</h3>
              <p>{post.intro}</p>
              <a href={`/blog/${post.slug}`} className="text-link">Read More</a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
