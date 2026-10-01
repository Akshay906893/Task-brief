import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
      <Reveal>
        <div className="relative grid aspect-[4/3] place-items-end overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-blue-600 to-gold p-7 text-white md:aspect-[4/5]">
          <span className="absolute -bottom-1/4 -right-1/4 aspect-square w-3/4 rounded-full border-2 border-white/30 shadow-[0_0_0_40px_rgba(255,255,255,0.07)]" />
          <p className="relative max-w-[16rem] font-display text-2xl italic">Let's do it, with Tulas.</p>
        </div>
      </Reveal>
      <div>
        <Reveal><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] opacity-70">Boarding &amp; Day School Excellence</p></Reveal>
        <Reveal index={1}><h2 className="mb-5 text-4xl leading-tight md:text-5xl">A place where learning feels like an adventure.</h2></Reveal>
        <Reveal index={2}>
          <p className="mb-6 opacity-75">
            We provide world-class education, modern facilities and a nurturing environment for students to thrive academically, socially and culturally. Established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.
          </p>
        </Reveal>
        <Reveal index={3}><Button href="#life">Explore campus life</Button></Reveal>
      </div>
    </section>
  )
}
