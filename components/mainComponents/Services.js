import Image from 'next/image'
import Link from 'next/link'
import Serv1 from '../../public/images/service-icon-1.svg'
import Serv2 from '../../public/images/service-icon-2.svg'
import Serv3 from '../../public/images/service-icon-3.svg'
import Serv4 from '../../public/images/service-icon-4.svg'
import Serv5 from '../../public/images/service-icon-5.svg'
import Serv6 from '../../public/images/service-icon-6.svg'

export default function Services() {
  return (
    <section id="services" className="relative h-screen pt-12 bg-black">
      <div className="container mx-auto h-full flex flex-col justify-center space-y-6">
        <h2 className="truncate text-white text-4xl">
          State-of-the-art <br />
          support options:
        </h2>
        {/* Services cards */}
        <div className="flex justify-center items-center flex-wrap gap-y-6">
          <div className="w-5/12 flex flex-col">
            <div className="flex justify-center">
              <Image src={Serv1} alt="List Icon" height="60px" width="80px" />
            </div>
            <div className="text-white">
              <h4 className="leading-tight font-bold text-xl text-center">
                Easily Accessible
              </h4>
              <p className="text-xs leading-tight text-center">
                Lorem ipsum dolor sit amet. Provident corporis magnam suscipit
                magni.
              </p>
            </div>
          </div>
          <div className="w-5/12 flex flex-col">
            <div className="flex justify-center">
              <Image src={Serv2} alt="List Icon" height="60px" width="80px" />
            </div>
            <div className="text-white">
              <h4 className="leading-tight font-bold text-xl text-center">
                Easily Accessible
              </h4>
              <p className="text-xs leading-tight text-center">
                Lorem ipsum dolor sit amet. Provident corporis magnam suscipit
                magni.
              </p>
            </div>
          </div>
          <div className="w-5/12 flex flex-col">
            <div className="flex justify-center">
              <Image src={Serv3} alt="List Icon" height="60px" width="80px" />
            </div>
            <div className="text-white">
              <h4 className="leading-tight font-bold text-xl text-center">
                Easily Accessible
              </h4>
              <p className="text-xs leading-tight text-center">
                Lorem ipsum dolor sit amet. Provident corporis magnam suscipit
                magni.
              </p>
            </div>
          </div>
          <div className="w-5/12 flex flex-col">
            <div className="flex justify-center">
              <Image src={Serv4} alt="List Icon" height="60px" width="80px" />
            </div>
            <div className="text-white">
              <h4 className="leading-tight font-bold text-xl text-center">
                Easily Accessible
              </h4>
              <p className="text-xs leading-tight text-center">
                Lorem ipsum dolor sit amet. Provident corporis magnam suscipit
                magni.
              </p>
            </div>
          </div>
          <div className="w-5/12 flex flex-col">
            <div className="flex justify-center">
              <Image src={Serv5} alt="List Icon" height="60px" width="80px" />
            </div>
            <div className="text-white">
              <h4 className="leading-tight font-bold text-xl text-center">
                Easily Accessible
              </h4>
              <p className="text-xs leading-tight text-center">
                Lorem ipsum dolor sit amet. Provident corporis magnam suscipit
                magni.
              </p>
            </div>
          </div>
          <div className="w-5/12 flex flex-col">
            <div className="flex justify-center">
              <Image src={Serv6} alt="List Icon" height="60px" width="80px" />
            </div>
            <div className="text-white">
              <h4 className="leading-tight font-bold text-xl text-center">
                Easily Accessible
              </h4>
              <p className="text-xs leading-tight text-center">
                Lorem ipsum dolor sit amet. Provident corporis magnam suscipit
                magni.
              </p>
            </div>
          </div>
        </div>

        <p className="flex justify-center text-white text-lg">
          Please
          <Link href="/">
            <a className="mx-1.5 underline underline-offset-2 text-brandBlue font-bold">
              contact us
            </a>
          </Link>
          for more info!
        </p>
      </div>
    </section>
  )
}
{
  /* <div className="relative h-7 w-7">
<Image src={Serv1} layout="fill"
objectFit="cover"
   alt="List Icon" />
</div>
<div>
<h4>Easy Setup</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis magnam suscipit magni, pariatur labore tempora tempore nostrum.</p>
</div> */
}
