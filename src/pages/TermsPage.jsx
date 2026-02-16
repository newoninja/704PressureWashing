import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms and Conditions"
        intro="Service terms for estimates, scheduling, and project completion."
        canonicalPath="/terms"
        schema={localBusinessSchema('/terms')}
      />
      <section className="section section-light">
        <div className="container legal-content">
          <h3>Estimates</h3>
          <p>All estimates are provided based on the current condition and scope visible at the time of inspection.</p>
          <h3>Scheduling</h3>
          <p>Service dates may shift due to weather or safety concerns. We communicate any schedule changes as soon as possible.</p>
          <h3>Payment</h3>
          <p>Payment terms are provided before service begins and are due according to the approved quote.</p>
          <h3>Guarantee</h3>
          <p>We stand behind our work and will address reasonable quality concerns brought to our attention promptly.</p>
        </div>
      </section>
    </>
  )
}
