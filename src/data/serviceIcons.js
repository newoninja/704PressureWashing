import { CloudRain, Droplets, PaintBucket, Sparkles } from 'lucide-react'

const iconByKey = {
  droplets: Droplets,
  'cloud-rain': CloudRain,
  sparkles: Sparkles,
  'paint-bucket': PaintBucket,
}

export function decorateService(service) {
  return {
    ...service,
    icon: iconByKey[service.icon] || Droplets,
  }
}

export function decorateServices(services) {
  return services.map(decorateService)
}
