import Image from 'next/image'
import Testi1 from '../../public/images/testimonial-1.jpg'
import Testi2 from '../../public/images/testimonial-2.jpg'
import Testi3 from '../../public/images/testimonial-3.jpg'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-200 lg:py-32">
      <h2 className="max-w-6xl mx-auto pl-6 font-bold text-3xl text-left lg:text-5xl lg:mb-12 overflow-hidden">
        From Our Customers...
      </h2>
      <div className="container max-w-6xl flex flex-col mx-auto lg:flex-row">
        <div className="mx-auto px-12 py-6 flex flex-col justify-center items-center lg:text-center">
          <div className="relative h-24 w-24 overflow-hidden">
            <Image
              src={Testi1}
              layout="intrinsic"
              className="rounded-full"
              alt="testimonial image"
            />
          </div>
          <p className="py-3 text-xs leading-none lg:pb-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            aspernatur doloribus vel omnis qui beatae aliquid placeat dolores!
            Eligendi optio illum earum, sint reprehenderit dicta suscipit qui
            velit, autem atque quia explicabo rem consequatur ipsam maiores
            tempora expedita fugit!
          </p>
          <h5 className="text-lg font-bold py-1 lg:text-xs">
            Lori Miller - Software Engineer
          </h5>
        </div>
        <div className="mx-auto px-12 py-6 flex flex-col justify-center items-center lg:text-center">
          <div className="relative h-24 w-24 overflow-hidden">
            <Image
              src={Testi2}
              layout="intrinsic"
              className="rounded-full"
              alt="testimonial image"
            />
          </div>
          <p className="py-3 text-xs leading-none lg:pb-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            aspernatur doloribus vel omnis qui beatae aliquid placeat dolores!
            Eligendi optio illum earum, sint reprehenderit dicta suscipit qui
            velit, autem atque quia explicabo rem consequatur ipsam maiores
            tempora expedita fugit!
          </p>
          <h5 className="text-lg font-bold py-1 lg:text-xs">
            Tom Simpson - Systems Engineer
          </h5>
        </div>
        <div className="mx-auto px-12 py-6 flex flex-col justify-center items-center lg:text-center">
          <div className="relative h-24 w-24 overflow-hidden">
            <Image
              src={Testi3}
              layout="intrinsic"
              className="rounded-full"
              alt="testimonial image"
            />
          </div>
          <p className="py-3 text-xs leading-none lg:pb-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            aspernatur doloribus vel omnis qui beatae aliquid placeat dolores!
            Eligendi optio illum earum, sint reprehenderit dicta suscipit qui
            velit, autem atque quia explicabo rem consequatur ipsam maiores
            tempora expedita fugit!
          </p>
          <h5 className="text-lg font-bold py-1 lg:text-xs">
            Rebecca Jones - Security Analyst
          </h5>
        </div>
      </div>
    </section>
  )
}
