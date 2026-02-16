import PageHeader from '../components/PageHeader'
import ServiceDetail from '../components/ServiceDetail'
import Testimonials from '../components/Testimonials'
import { serviceSchema } from '../data/seo'

export default function ServiceDetailPage({ service, canonicalPath }) {
  return (
    <>
      <PageHeader
        title={service.title}
        intro={service.short}
        canonicalPath={canonicalPath}
        schema={serviceSchema(service, canonicalPath)}
      />
      <ServiceDetail service={service} />
      <Testimonials />
    </>
  )
}
