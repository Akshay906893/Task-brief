import Reveal from '../animation/Reveal'

export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] opacity-70">
          <span className="h-[3px] w-8 rounded bg-gold" />{eyebrow}
        </p>
      </Reveal>
      <Reveal index={1}><h2 className="max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h2></Reveal>
    </div>
  )
}
