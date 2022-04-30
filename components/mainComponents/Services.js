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
    <section
      id="services"
      className="relative container h-screen pt-12 bg-black flex flex-col justify-center mx-auto"
    >
      <h2 className="truncate text-white text-4xl">
        State-of-the-art <br />
        support options:
      </h2>
      <div className="container flex flex-col justify-center items-center space-y-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex">
            <div className="mr-2 flex justify-center">
              <Image src={Serv1} alt="List Icon" height="100px" width="120px" />
            </div>
            <div className="text-white">
              <h4 className="font-bold text-xl">Easy Setup</h4>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                odit repellat. Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-2 flex justify-center">
              <Image src={Serv2} alt="List Icon" height="100px" width="120px" />
            </div>
            <div className="text-white">
              <h4 className="font-bold text-xl">Instant Support</h4>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit dolor.
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-2 flex justify-center">
              <Image src={Serv3} alt="List Icon" height="100px" width="120px" />
            </div>
            <div className="text-white">
              <h4 className="font-bold text-xl">24/7 Coverage</h4>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor. Lorem
                ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-2 flex justify-center">
              <Image src={Serv4} alt="List Icon" height="100px" width="120px" />
            </div>
            <div className="text-white">
              <h4 className="font-bold text-xl">Private & Secure</h4>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex">
            <div className="mr-2 flex justify-center">
              <Image src={Serv5} alt="List Icon" height="100px" width="120px" />
            </div>
            <div className="text-white">
              <h4 className="font-bold text-xl">Fast Navigation</h4>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi?
                Provident corporis magnam suscipit magni.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-2 flex justify-center">
              <Image src={Serv6} alt="List Icon" height="100px" width="120px" />
            </div>
            <div className="text-white">
              <h4 className="font-bold text-xl">Easily Accessible</h4>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet. Provident corporis magnam suscipit
                magni.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="flex justify-center mt-12 text-white text-lg">
        Please
        <Link href="/">
          <a className="mx-1.5 underline underline-offset-2 text-brandBlue font-bold">
            contact us
          </a>
        </Link>
        for more info!
      </p>
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
