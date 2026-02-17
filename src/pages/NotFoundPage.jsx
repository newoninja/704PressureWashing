import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'

export default function NotFoundPage() {
  return (
    <>
      <PageHeader
        title="Page Not Found"
        intro="The page you requested is not available. Return home or contact us for help."
        canonicalPath="/404"
        schema={localBusinessSchema('/404')}
      />
      <section className="section section-light">
        <div className="container">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
