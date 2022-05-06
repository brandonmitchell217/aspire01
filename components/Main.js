import Link from 'next/link'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Landing from './mainComponents/Landing'
import About from './mainComponents/About'
import Services from './mainComponents/Services'
import Features from './mainComponents/Features'
import Testimonials from './mainComponents/Testimonials'
import Contact from './mainComponents/Contact'

export default function Main() {
  return (
    // Home Container
    <main>
      <Landing />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  )
}
