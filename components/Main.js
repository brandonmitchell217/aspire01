// import Image from 'next/image'
// import Exp1 from '../public/images/header-expertise-icon-1.svg'
// import Exp2 from '../public/images/header-expertise-icon-2.svg'
// import Exp3 from '../public/images/header-expertise-icon-3.svg'
// import HeaderBG from '../public/images/header-background.jpg'

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
