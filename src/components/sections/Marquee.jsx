import { sports } from '../../data/content'

export default function Marquee() {
  const row = sports.map((s) => <span key={s}>{s} <b className="text-gold">✦</b></span>)
  return (
    <div className="overflow-hidden bg-navy py-5 text-cream dark:bg-gold dark:text-navy" aria-hidden>
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl italic">
        <div className="flex gap-10">{row}</div>
        <div className="flex gap-10">{row}</div>
      </div>
    </div>
  )
}
