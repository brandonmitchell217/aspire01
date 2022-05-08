import Image from 'next/image'
import Link from 'next/link'
import FootLogo from '../public/images/favicon.png'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-screen text-white">
      <div className="flex justify-between items-center px-6 py-2">
        <Image src={FootLogo} height="75px" width="75px" alt="logo" />
        <p className="text-sm leading-tight">
          Reach out today!
          <Link href="/">
            <a className="block text-base">contact@email.com</a>
          </Link>
        </p>
      </div>
      <div className="absolute bottom-1.5 text-xs left-1/2 -translate-x-1/2">
        Copyright &#169;2022 Aspire
      </div>
    </footer>
  )
}
