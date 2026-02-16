import FAQ from '../components/FAQ'
import PageHeader from '../components/PageHeader'
import { localBusinessSchema } from '../data/seo'

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        intro="Answers to common questions about scheduling, service methods, and response times."
        canonicalPath="/faqs"
        schema={localBusinessSchema('/faqs')}
      />
      <FAQ />
    </>
  )
}
