import Areas from '../components/Areas'
import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'

export default function AreasPage() {
  return (
    <>
      <PageHeader
        title="Areas Served"
        intro="Serving Charlotte and surrounding North Carolina and South Carolina communities."
        canonicalPath="/areas-served"
        schema={localBusinessSchema('/areas-served')}
      />
      <Areas />
    </>
  )
}
