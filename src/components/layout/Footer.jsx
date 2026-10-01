export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-14 text-sm opacity-80">
      <div className="grid gap-8 border-b border-navy/10 pb-8 dark:border-white/10 md:grid-cols-3">
        <address className="not-italic">
          <h3 className="mb-2 text-lg">Tulas International School</h3>
          Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)
        </address>
        <div>
          <h3 className="mb-2 text-lg">Contact</h3>
          <a href="tel:+919837983791" className="block hover:text-gold">Admissions +91-98379 83791</a>
          <a href="tel:01352699444" className="block hover:text-gold">0135-2699444 / 0135-2699666</a>
          <a href="mailto:info@tis.edu.in" className="block hover:text-gold">info@tis.edu.in</a>
        </div>
        <div>
          <h3 className="mb-2 text-lg">Quick Links</h3>
          <a href="https://tis.edu.in/faq/" className="block hover:text-gold">FAQ</a>
          <a href="https://tis.edu.in/privacy-policy/" className="block hover:text-gold">Privacy Policy</a>
          <a href="https://tis.fedena.com/" className="block hover:text-gold">Fedena Login</a>
        </div>
      </div>
      <p className="pt-6">Copyright © 2026 Tulas International School, Dehradun. Redesign concept for evaluation.</p>
    </footer>
  )
}
