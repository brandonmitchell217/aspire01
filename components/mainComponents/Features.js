import Image from 'next/image'
import Link from 'next/link'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Feature1 from '../../public/images/details-1.jpg'
import Feature2 from '../../public/images/details-2.jpg'
import Feature3 from '../../public/images/details-3.jpg'
export default function Features() {
  return (
    <section
      id="features"
      className="container pt-8 pb-28 flex flex-col space-y-12 mx-auto"
    >
      <div className="container flex flex-col items-center">
        <div className="relative w-full h-64">
          <Image
            src={Feature1}
            layout="fill"
            objectFit="cover"
            alt="building"
          />
        </div>
        <div className="px-2">
          <h3 className="text-2xl my-1">Modern Capabilities</h3>
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
      <div className="container flex flex-col items-center">
        <div className="relative w-full h-64">
          <Image
            src={Feature2}
            layout="fill"
            objectFit="cover"
            alt="building"
          />
        </div>
        <div className="px-2">
          <h3 className="text-2xl my-1">Support for Growth</h3>
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
      <div className="container flex flex-col items-center">
        <div className="relative w-full h-64">
          <Image
            src={Feature3}
            layout="fill"
            objectFit="cover"
            alt="building"
          />
        </div>
        <div className="px-2">
          <h3 className="text-2xl my-1">Growing With You</h3>
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
      {/* Counters */}
      <div className="container flex justify-center space-x-3">
        <div className="flex flex-col text-center">
          <h2 className="text-3xl -mb-2">
            <CountUp end={24} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h2>
          <p className="text-xs leading-tight">Hours a day</p>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-3xl -mb-2">
            <CountUp end={7} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h2>
          <p className="text-xs leading-tight">Subscribers</p>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-3xl -mb-2">
            <CountUp end={365} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h2>
          <p className="text-xs leading-tight">Days a week</p>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-3xl -mb-2">
            <CountUp end={110} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span>k</span>
          </h2>
          <p className="text-xs leading-tight">Satisfied Clients</p>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-3xl -mb-2">
            <CountUp end={12} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h2>
          <p className="text-xs leading-tight">Years in business</p>
        </div>
      </div>
    </section>
  )
}
