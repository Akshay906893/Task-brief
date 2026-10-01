import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import useTheme from '../../hooks/useTheme'

export default function ThemeToggle() {
  const [dark, toggle] = useTheme()
  return (
    <button onClick={toggle} aria-label="Toggle dark mode" aria-pressed={dark}
      className="relative h-8 w-14 shrink-0 rounded-full border border-navy/15 bg-white dark:border-white/15 dark:bg-panel">
      <motion.span animate={{ x: dark ? 26 : 2 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full bg-gold text-navy">
        {dark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.span>
    </button>
  )
}
