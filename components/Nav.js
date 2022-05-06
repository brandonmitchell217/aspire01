import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/images/logo.png'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    !open
      ? document.getElementById('mobileMenu').classList.toggle('hidden')
      : document.getElementById('mobileMenu').classList.toggle('hidden')
  }, [open])

  return (
    <nav className="absolute top-0 left-0 z-10 container min-w-full flex justify-between px-5 pt-3 pb-2.5 border-b-2 border-black">
      <div className="image h-10 w-36 relative">
        <a href="#">
          <Image
            src={Logo}
            alt="Aspire"
            layout="fill" // required
            objectFit="contain" // change to suit your needs
          />
        </a>
      </div>

      {/* Burger */}
      <div
        id="menu-btn"
        className="block absolute top-1.5 right-1 hamburger md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </div>

      {/* Full Menu */}
      <div className="hidden md:flex space-x-8 mt-2">
        <Link href="/">
          <a href="#">Home</a>
        </Link>
        <Link href="/">
          <a href="#">About Us</a>
        </Link>
        <Link href="/">
          <a href="#">Services</a>
        </Link>
        <Link href="/">
          <a href="#">Contact Us</a>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed w-full top-20 -translate-y-4 left-0 flex flex-col justify-center items-center space-y-10 py-6 border-b-2 border-black bg-brandWhite lg:hidden"
      >
        <Link href="/">
          <a href="#">Home</a>
        </Link>
        <Link href="/">
          <a href="#">About Us</a>
        </Link>
        <Link href="/">
          <a href="#">Services</a>
        </Link>
        <Link href="/">
          <a href="#">Contact Us</a>
        </Link>
      </div>
    </nav>
  )
}
