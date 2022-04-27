// import Image from 'next/image'
// import HeaderBG from '../public/images/header-background.jpg'

import Link from 'next/link'

export default function Main() {
  return (
    <main id="home">
      <header className="relative h-screen pt-12">
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-6xl text-center font-bold">
            Award Winning <br /> Tech Support
          </h1>
          <p className="max-w-3xl mx-auto text-center text-lg my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            facere consectetur consequuntur mollitia, dolores iure eaque nemo
            assumenda reiciendis harum blanditiis, neque necessitatibus.
          </p>
          <div className="flex space-x-12 text-3xl">
            <Link href="/">
              <a className="px-6 py-1 bg-brandBlue">Services</a>
            </Link>
            <Link href="/" className="px-6 bg-brandBlue">
              <a className="px-6 py-1 bg-brandBlue">Contact</a>
            </Link>
          </div>
        </div>
      </header>
    </main>
  )
}
