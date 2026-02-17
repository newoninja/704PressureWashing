import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import ServiceDetailPage from './ServiceDetailPage'
import NotFoundPage from './NotFoundPage'
import { getServices } from '../data/contentApi'
import { decorateServices } from '../data/serviceIcons'
import useAsyncData from '../hooks/useAsyncData'

export default function ServiceRoutePage() {
  const { serviceSlug } = useParams()
  const { data: services, loading } = useAsyncData(getServices, [])

  const service = useMemo(() => {
    return decorateServices(services).find((item) => item.slug === serviceSlug)
  }, [serviceSlug, services])

  if (loading) return null
  if (!service) return <NotFoundPage />

  return <ServiceDetailPage service={service} canonicalPath={`/${service.slug}`} />
}
