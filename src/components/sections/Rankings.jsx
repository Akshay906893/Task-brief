import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { rankings } from '../../data/content'

export default function Rankings() {
  return (
    <section id="rankings" className="mx-auto max-w-6xl px-5 pb-24">
      <SectionHeading eyebrow="Recognition" title="Ranked among the best." />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {rankings.map((r, i) => (
          <Reveal key={r.place} index={i}>
            <div data-hover className="h-full rounded-3xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1.5 hover:border-gold dark:border-white/10 dark:bg-panel">
              <p className="font-display text-5xl font-bold text-gold">{r.rank}</p>
              <h3 className="mt-2 text-xl">{r.place}</h3>
              <p className="mt-1 text-sm opacity-65">{r.by}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
