import { CalendarCheck2, ShieldCheck, MessageSquareText, SearchCheck } from 'lucide-react'
import useReveal from '../useReveal'

const points = [
  {
    icon: ShieldCheck,
    title: '100% Satisfaction Guarantee',
    desc: 'If something is not right, we make it right. We stand behind every cleaning service.',
  },
  {
    icon: CalendarCheck2,
    title: 'Dependable Scheduling',
    desc: 'You get clear timelines and reliable arrival windows, without the runaround.',
  },
  {
    icon: SearchCheck,
    title: 'Detailed Workmanship',
    desc: 'We clean with attention to edges, corners, and surfaces that are easy to miss.',
  },
  {
    icon: MessageSquareText,
    title: 'Clear Communication',
    desc: 'Questions, updates, and next steps are straightforward from quote to final walkthrough.',
  },
]

export default function Guarantee() {
  const sectionRef = useReveal()

  return (
    <section className="section section-dark" ref={sectionRef}>
      <div className="container">
        <div className="reveal reveal-up">
          <p className="section-kicker section-kicker-light">Why Choose 704 Pressure Washing Services</p>
          <h2 className="section-title-light">Reliable. Professional. Built on Results.</h2>
        </div>

        <div className="promise-grid reveal stagger-children">
          {points.map((point) => {
            const Icon = point.icon

            return (
              <article key={point.title} className="promise-card">
                <span>
                  <Icon size={22} />
                </span>
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
