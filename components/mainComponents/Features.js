import Image from 'next/image'
import Link from 'next/link'
import Feature1 from '../../public/images/details-1.jpg'
import Feature2 from '../../public/images/details-2.jpg'
import Feature3 from '../../public/images/details-3.jpg'
import Counters from './Counter'

export default function Features() {
  return (
    <section id="features" className=" py-24 min-h-screen">
      <div className="container mx-auto flex flex-col justify-center items-center space-y-12 lg:space-y-16">
        <div className="w-full flex flex-col items-center justify-center lg:flex-row">
          <div className="relative w-full max-w-lg h-64">
            <Image
              src={Feature1}
              layout="fill"
              objectFit="cover"
              alt="building"
            />
          </div>
          <div className="px-2 overflow-hidden max-w-lg lg:px-12 md:py-8">
            <h3 className="text-2xl my-1 lg:text-3xl">Modern Capabilities</h3>
            <p className="text-sm leading-tight mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              veritatis accusamus neque eius praesentium, incidunt animi sed
              doloribus laborum at odio, deserunt dolorem sunt aliquam nihil.
              Nobis corporis totam soluta debitis, eveniet natus commodi odio
              praesentium.
            </p>
            <Link href="/">
              <a className="px-6 py-1 rounded-lg bg-brandBlue">Service 1</a>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:flex-row-reverse">
          <div className="relative w-full max-w-lg h-64">
            <Image
              src={Feature2}
              layout="fill"
              objectFit="cover"
              alt="building"
            />
          </div>
          <div className="px-2 overflow-hidden max-w-lg lg:px-12 md:py-8">
            <h3 className="text-2xl my-1 lg:text-3xl">Support for Growth</h3>
            <p className="text-sm leading-tight mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              veritatis accusamus neque eius praesentium, incidunt animi sed
              doloribus laborum at odio, deserunt dolorem sunt aliquam nihil.
              Nobis corporis totam soluta debitis, eveniet natus commodi odio
              praesentium.
            </p>
            <Link href="/">
              <a className="px-6 py-1 rounded-lg bg-brandBlue">Service 2</a>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:flex-row">
          <div className="relative w-full max-w-lg h-64">
            <Image
              src={Feature3}
              layout="fill"
              objectFit="cover"
              alt="building"
            />
          </div>
          <div className="px-2 overflow-hidden max-w-lg lg:px-12 md:py-8">
            <h3 className="text-2xl my-1 lg:text-3xl">Growing With You</h3>
            <p className="text-sm leading-tight mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              veritatis accusamus neque eius praesentium, incidunt animi sed
              doloribus laborum at odio, deserunt dolorem sunt aliquam nihil.
              Nobis corporis totam soluta debitis, eveniet natus commodi odio
              praesentium.
            </p>
            <Link href="/">
              <a className="px-6 py-1 rounded-lg bg-brandBlue">Service 3</a>
            </Link>
          </div>
        </div>
        <Counters />
      </div>
    </section>
  )
}
