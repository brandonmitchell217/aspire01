// import Image from 'next/image'
// import Exp1 from '../public/images/header-expertise-icon-1.svg'
// import Exp2 from '../public/images/header-expertise-icon-2.svg'
// import Exp3 from '../public/images/header-expertise-icon-3.svg'
// import HeaderBG from '../public/images/header-background.jpg'

import Link from 'next/link'
import Landing from './mainComponents/Landing'
import About from './mainComponents/About'

export default function Main() {
  return (
    // Home Container
    <main>
      <Landing />
      <About />
    </main>
  )
}
