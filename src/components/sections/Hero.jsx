import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { APPLY_URL } from '../../data/content'

const lines = ['Welcome to', 'Tulas International', 'School.']
const line = { hidden: { y: '110%' }, show: (i) => ({ y: 0, transition: { duration: 0.8, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] } }) }

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, -120])
  const y2 = useTransform(scrollY, [0, 800], [0, 80])
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden px-5 pb-16 pt-32">
      <motion.div aria-hidden style={{ y: y1 }} className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-gold/50 blur-3xl" />
      <motion.div aria-hidden style={{ y: y2 }} className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-6 inline-block rounded-full border border-navy/15 px-4 py-1.5 text-xs opacity-80 dark:border-white/15">
          CBSE · Co-ed · Class 4 to 12 · Dehradun, Uttarakhand
        </p>
        <h1 className="mb-6 text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          {lines.map((t, i) => (
            <span key={t} className="block overflow-hidden pb-1">
              <motion.span custom={i} variants={line} initial="hidden" animate="show" className="block">
                {i === 1 ? <><em className="text-gold">Tulas</em> International</> : t}
              </motion.span>
            </span>
          ))}
        </h1>
        <p className="max-w-xl text-lg opacity-75">
          One of India's top boarding and day schools in Dehradun. Academic excellence, holistic development and preparation for global leadership.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={APPLY_URL}>Apply Now <ArrowRight size={16} /></Button>
          <Button href="https://tis.edu.in/virtual-tour/" variant="outline">Take the Virtual Tour</Button>
        </div>
      </div>
    </section>
  )
}
