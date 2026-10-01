import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../animation/ThemeToggle'
import Button from '../ui/Button'
import { APPLY_URL, navLinks } from '../../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-navy/10 bg-cream/80 py-2 pl-5 pr-2 backdrop-blur-xl dark:border-white/10 dark:bg-night/80">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-navy">T</span>
          <span className="hidden sm:inline">Tulas International</span>
        </a>
        <ul className="hidden gap-7 text-sm opacity-80 xl:flex">
          {navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-gold">{l.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href={APPLY_URL} className="!px-5 !py-2.5">Apply Now</Button>
          <button className="grid h-10 w-10 place-items-center xl:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-navy/10 bg-cream p-4 dark:border-white/10 dark:bg-night xl:hidden">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 hover:bg-gold/20">{l.label}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
