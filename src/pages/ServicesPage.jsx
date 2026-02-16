import Services from '../components/Services'
import Guarantee from '../components/Guarantee'
import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        intro="Pressure washing, soft washing, pure water window cleaning, and gutter brightening for homes and businesses."
        canonicalPath="/services"
        schema={localBusinessSchema('/services')}
      />
      <Services />
      <Guarantee />
    </>
  )
}
