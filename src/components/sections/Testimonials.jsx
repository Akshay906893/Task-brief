import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  return (
    <section id="parents" className="mx-auto max-w-6xl px-5 pb-24">
      <SectionHeading eyebrow="From The Parents" title="Words that stay with us." />
      <Reveal className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
        {testimonials.map((t) => (
          <figure key={t.name} className="w-[85%] shrink-0 snap-start rounded-3xl border border-navy/10 bg-white p-7 dark:border-white/10 dark:bg-panel sm:w-96">
            <blockquote className="mb-5 font-display text-lg italic">“{t.quote}”</blockquote>
            <figcaption className="text-sm"><b>{t.name}</b><br /><span className="opacity-60">{t.role}</span></figcaption>
          </figure>
        ))}
      </Reveal>
    </section>
  )
}
