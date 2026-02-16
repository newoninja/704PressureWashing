import Contact from '../components/Contact'
import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        intro="Request your free estimate and we will follow up quickly with next steps."
        canonicalPath="/contact"
        schema={localBusinessSchema('/contact')}
      />
      <Contact />
    </>
  )
}
