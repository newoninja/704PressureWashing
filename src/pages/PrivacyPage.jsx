import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        intro="How we collect, use, and protect your contact information."
        canonicalPath="/privacy-policy"
        schema={localBusinessSchema('/privacy-policy')}
      />
      <section className="section section-light">
        <div className="container legal-content">
          <h3>Information We Collect</h3>
          <p>When you submit a form or contact us, we may collect your name, phone number, email, and service address.</p>
          <h3>How We Use It</h3>
          <p>We use your information only to provide estimates, schedule service, and communicate updates related to your request.</p>
          <h3>Data Sharing</h3>
          <p>We do not sell personal information. We may share limited data with service providers used to run our website and communications.</p>
          <h3>Contact</h3>
          <p>Questions about this policy can be directed to (704) 651-6329.</p>
        </div>
      </section>
    </>
  )
}
