import Reveal from '../animation/Reveal'
import Button from '../ui/Button'
import { APPLY_URL } from '../../data/content'

export default function CTA() {
  return (
    <section className="px-4">
      <Reveal className="mx-auto max-w-6xl rounded-[2rem] bg-navy px-6 py-16 text-center text-cream dark:bg-gold dark:text-navy md:px-10 md:py-20">
        <h2 className="mx-auto mb-4 max-w-3xl text-4xl md:text-6xl">Choose a school that chooses you.</h2>
        <p className="mx-auto mb-8 max-w-lg opacity-80">Admissions are open for Class IV to XII. Speak to our team or begin your application today.</p>
        <Button href={APPLY_URL} className="dark:!bg-navy dark:!text-gold">Enquire Now</Button>
      </Reveal>
    </section>
  )
}
