import Image from 'next/image'
import AboutImg1 from '../../public/images/about.jpg'
// About section on Main
export default function AboutMain() {
  return (
    <section
      id="about"
      className="relative h-screen flex flex-col justify-center items-center space-y-10 lg:flex-row lg:justify-center md:px-24"
    >
      <div className="relative w-60 h-60 overflow-visible lg:w-72 lg:h-72">
        <Image
          src={AboutImg1}
          alt="Cityscape"
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
        <div className="absolute -bottom-4 -left-3 w-60 h-60 bg-black lg:w-72 lg:h-72"></div>
      </div>
      <div className="text-center px-6 max-w-xl">
        <h2 className="font-bold text-left text-3xl lg:text-4xl overflow-hidden">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-left pl-6 pt-2 lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          excepturi eos obcaecati officia, error aliquid sapiente consequatur?
          Porro nihil fuga beatae, dolores sequi incidunt, eos dolorem
          accusantium quam laborum obcaecati fugiat quos repellendus delectus
          itaque perferendis autem quaerat eveniet perspiciatis magnam vitae
          magni pariatur atque.
        </p>
      </div>
    </section>
  )
}
