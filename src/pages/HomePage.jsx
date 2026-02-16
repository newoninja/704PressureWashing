import Hero from '../components/Hero'
import Services from '../components/Services'
import Guarantee from '../components/Guarantee'
import Testimonials from '../components/Testimonials'
import SEO from '../components/SEO'
import { localBusinessSchema } from '../data/seo'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Pressure Washing Charlotte NC"
        description="Professional pressure washing, soft washing, window cleaning, and gutter brightening in Charlotte, NC with free estimates."
        canonicalPath="/"
        schema={localBusinessSchema('/')}
      />
      <Hero />
      <Services />
      <Guarantee />
      <Testimonials />
    </>
  )
}
