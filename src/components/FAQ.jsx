import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import useReveal from '../useReveal'

const faqs = [
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We are fully licensed and insured and have over five years of exterior cleaning experience in the Charlotte area.',
  },
  {
    q: 'Do you provide free estimates?',
    a: 'Yes. Every service starts with a free estimate. Call (704) 651-6329 or submit the form to get started.',
  },
  {
    q: 'What is the difference between pressure washing and soft washing?',
    a: 'Pressure washing is best for harder surfaces like concrete. Soft washing uses lower pressure and cleaning solutions for delicate areas like roofs and siding.',
  },
  {
    q: 'Do you clean windows and gutters?',
    a: 'Yes. We offer pure water window cleaning and gutter brightening to remove stains and improve curb appeal.',
  },
  {
    q: 'How quickly do you respond?',
    a: 'We prioritize quick response times. We are available Monday through Sunday from 9 AM to 9 PM.',
  },
]

function FAQItem({ index, faq, open, onToggle }) {
  const id = `faq-panel-${index}`

  return (
    <article className="faq-item">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="faq-trigger"
      >
        <span>{faq.q}</span>
        {open ? <Minus size={18} /> : <Plus size={18} />}
      </button>
      {open && (
        <div id={id} className="faq-content">
          <p>{faq.a}</p>
        </div>
      )}
    </article>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useReveal()

  return (
    <section id="faq" className="section section-muted" ref={sectionRef}>
      <div className="container narrow">
        <div className="reveal reveal-up">
          <p className="section-kicker">FAQs</p>
          <h2>Questions We Hear Most Often</h2>
        </div>

        <div className="faq-list reveal stagger-children">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.q}
              index={index}
              faq={faq}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
