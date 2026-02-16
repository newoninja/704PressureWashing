import About from '../components/About'
import Guarantee from '../components/Guarantee'
import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'

export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        title="Our Story"
        intro="Locally owned, family-backed, and focused on dependable exterior cleaning across Charlotte."
        canonicalPath="/our-story"
        schema={localBusinessSchema('/our-story')}
      />
      <About />
      <Guarantee />
    </>
  )
}
