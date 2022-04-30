import Image from 'next/image'
import Testi1 from '../../public/images/testimonial-1.jpg'
import Testi2 from '../../public/images/testimonial-2.jpg'
import Testi3 from '../../public/images/testimonial-3.jpg'

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto py-24 bg-gray-200">
      <h2 className="font-bold text-3xl text-center">From Our Customers...</h2>
      <div className="mx-auto px-12 py-6 flex flex-col justify-center items-center">
        <Image
          src={Testi1}
          height="66px"
          width="66px"
          className="rounded-full"
          alt="testimonial image"
        />
        <p className="py-3 text-xs leading-none">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          aspernatur doloribus vel omnis qui beatae aliquid placeat dolores!
          Eligendi optio illum earum, sint reprehenderit dicta suscipit qui
          velit, autem atque quia explicabo rem consequatur ipsam maiores
          tempora expedita fugit!
        </p>
        <h5 className="text-lg font-bold py-1">
          Lori Miller - Software Engineer
        </h5>
      </div>
      <div className="mx-auto px-12 py-6 flex flex-col justify-center items-center">
        <Image
          src={Testi2}
          height="66px"
          width="66px"
          className="rounded-full"
          alt="testimonial image"
        />
        <p className="py-3 text-xs leading-none">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          aspernatur doloribus vel omnis qui beatae aliquid placeat dolores!
          Eligendi optio illum earum, sint reprehenderit dicta suscipit qui
          velit, autem atque quia explicabo rem consequatur ipsam maiores
          tempora expedita fugit!
        </p>
        <h5 className="text-lg font-bold py-1">
          Tom Simpson - Systems Engineer
        </h5>
      </div>
      <div className="mx-auto px-12 py-6 flex flex-col justify-center items-center">
        <Image
          src={Testi3}
          height="66px"
          width="66px"
          className="rounded-full"
          alt="testimonial image"
        />
        <p className="py-3 text-xs leading-none">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          aspernatur doloribus vel omnis qui beatae aliquid placeat dolores!
          Eligendi optio illum earum, sint reprehenderit dicta suscipit qui
          velit, autem atque quia explicabo rem consequatur ipsam maiores
          tempora expedita fugit!
        </p>
        <h5 className="text-lg font-bold py-1">
          Rebecca Jones - Security Analyst
        </h5>
      </div>
    </section>
  )
}
