import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { alumni } from '../../data/content'

export default function Alumni() {
  return (
    <section id="community" className="mx-auto max-w-6xl px-5 pb-24">
      <SectionHeading eyebrow="Influential Personalities on Campus" title="Champions walk our grounds." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {alumni.map((a, i) => (
          <Reveal key={a.name} index={i % 3}>
            <div data-hover className="h-full rounded-3xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1.5 hover:border-gold dark:border-white/10 dark:bg-panel">
              <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-gold to-blue-600" />
              <h3 className="text-xl">{a.name}</h3>
              <p className="mt-1 text-sm opacity-65">{a.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
