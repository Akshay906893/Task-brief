import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import CountUp from '../ui/CountUp'
import { sports, stats } from '../../data/content'

export default function Stats() {
  return (
    <section id="life" className="mx-auto max-w-6xl px-5 pb-24">
      <SectionHeading eyebrow="Boarding Life" title="Built around every student." />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} index={i}>
            <div data-hover className="h-full rounded-3xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1.5 hover:border-gold dark:border-white/10 dark:bg-panel">
              <p className="font-display text-5xl font-bold"><CountUp to={s.value} />{s.suffix}</p>
              <p className="mt-2 text-xs uppercase tracking-widest opacity-60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 flex flex-wrap gap-2.5">
        {sports.map((s) => (
          <span key={s} data-hover className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:bg-gold dark:border-white/10 dark:bg-panel dark:hover:text-navy">{s}</span>
        ))}
      </Reveal>
    </section>
  )
}
