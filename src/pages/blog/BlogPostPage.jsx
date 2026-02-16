import PageHeader from '../../components/PageHeader'
import { localBusinessSchema } from '../../data/seo'

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
        <div className="container blog-post">
          <p>
            {post.city} properties deal with humidity, pollen, and seasonal organic buildup that can
            impact curb appeal and surface longevity.
          </p>
          <ul>
            {post.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p>
            Need help with {post.focus.toLowerCase()} in {post.city}? We provide free estimates and
            straightforward scheduling.
          </p>
          <a href="/quote" className="btn btn-primary">Request a Free Estimate</a>
        </div>
      </section>
    </>
  )
}
