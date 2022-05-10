import Landing from '../components/mainComponents/Landing'
import AboutMain from '../components/mainComponents/AboutMain'
import Services from '../components/mainComponents/Services'
import Features from '../components/mainComponents/Features'
import Testimonials from '../components/mainComponents/Testimonials'
import Contact from '../components/mainComponents/Contact'
import Section from './Section'

export default function Main() {
  return (
    // Home Container
    <main>
      <Landing />
      <AboutMain />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  )
}
