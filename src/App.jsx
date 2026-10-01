import ScrollProgress from './components/animation/ScrollProgress'
import CustomCursor from './components/animation/CustomCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import About from './components/sections/About'
import Stats from './components/sections/Stats'
import Rankings from './components/sections/Rankings'
import Alumni from './components/sections/Alumni'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Rankings />
        <Alumni />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
