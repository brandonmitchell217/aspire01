import Image from 'next/image'
import Logo from '../public/images/logo.png'
export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 z-10 container min-w-full flex justify-between px-5 py-3">
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

      <button
        id="menu-btn"
        className="block hamburger md:hidden focus:outline-none"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      <div className="hidden md:flex space-x-8">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  )
}
