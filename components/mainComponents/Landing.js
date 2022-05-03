import Image from 'next/image'
import Link from 'next/link'
import Exp1 from '../../public/images/header-expertise-icon-1.svg'
import Exp2 from '../../public/images/header-expertise-icon-2.svg'
import Exp3 from '../../public/images/header-expertise-icon-3.svg'

export default function Landing() {
  return (
    <section id="home" className="relative h-screen pt-12">
      {/* Flex Container */}
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="truncate text-6xl text-center font-bold mb-6">
          Award Winning <br /> Tech Support
        </h1>
        <div className="flex space-x-12 text-3xl">
          <Link href="/">
            <a className="px-6 py-1 rounded-xl border-2 border-brandBlue bg-brandBlue text-white">
              Services
            </a>
          </Link>
          <Link href="/" className="px-6 bg-brandBlue">
            <a className="px-6 py-1 rounded-xl border-2 border-brandBlue">
              Contact
            </a>
          </Link>
        </div>
        {/* Expertise Features */}
        <div className="mt-6 flex flex-col justify-center items-center space-y-2 md:flex-row md:space-x-4">
          {/* Expertise 1 */}
          <div className="w-full px-3 h-28 mt-2 flex justify-center items-center bg-neutral-50 bg-opacity-50 shadow-md">
            <div className="relative h-14 w-14 mr-3">
              <Image
                src={Exp1}
                layout="fill"
                objectFit="cover"
                alt="Computer Icon"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold">24/7 Assistance</h4>
              <p className="text-xs leading-tight">
                Available 24/7 for anything you may need
              </p>
            </div>
          </div>
          {/* Expertise 2 */}
          <div className="w-full px-3 h-28 flex justify-center items-center bg-neutral-50 bg-opacity-50 shadow-md">
            <div className="relative h-14 w-14 mr-3">
              <Image
                src={Exp2}
                layout="fill"
                objectFit="cover"
                alt="Folder Icon"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold">Private & Secure</h4>
              <p className="text-xs leading-tight">
                The most secure support on the market
              </p>
            </div>
          </div>
          {/* Expertise 3 */}
          <div className="w-full px-3 h-28 flex justify-center items-center bg-neutral-50 bg-opacity-50 shadow-md">
            <div className="relative h-14 w-14 mr-3">
              <Image
                src={Exp3}
                layout="fill"
                objectFit="cover"
                alt="File Icon"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold">Reliable Service</h4>
              <p className="text-xs leading-tight">
                Friendly assistance from professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
