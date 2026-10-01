import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useFinePointer from '../../hooks/useFinePointer'

const INTERACTIVE = 'a, button, [data-hover]'

export default function CustomCursor() {
  const fine = useFinePointer()
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!fine) return
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); setVisible(true) }
    const over = (e) => setHovering(!!e.target.closest?.(INTERACTIVE))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [fine, x, y])

  if (!fine) return null
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: hovering ? 72 : 36, height: hovering ? 72 : 36, opacity: visible ? 1 : 0 }}
      className={`pointer-events-none fixed left-0 top-0 z-[99] rounded-full border-2 border-gold ${hovering ? 'bg-gold/25' : ''}`}
    />
  )
}
