import Image from 'next/image'
import AboutImg1 from '../../public/images/about.jpg'
export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen flex flex-col justify-evenly items-center py-24"
    >
      <div className="relative w-1/2 h-64">
        <Image
          src={AboutImg1}
          alt="Cityscape"
          layout="fill"
          objectFit="contain"
          className="z-10"
        />
        <div className="absolute -top-2 -left-3 h-60 w-60 bg-black mt-6"></div>
      </div>
      <div className="text-center px-6">
        <h2 className="font-bold text-left text-3xl">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-left pl-6 pt-4">
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