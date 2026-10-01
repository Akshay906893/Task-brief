const styles = {
  primary: 'bg-gold text-navy hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/40',
  outline: 'border border-navy/20 hover:border-gold dark:border-white/20',
}

export default function Button({ href, variant = 'primary', className = '', children }) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}>
      {children}
    </a>
  )
}
