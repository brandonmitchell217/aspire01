import Image from 'next/image'

export const getStaticProps = async () => {
  const res = await fetch('../../data.json')
  const data = await res.json()

  return {
    props: {
      services: data,
    },
  }
}

function Service({ services }) {
  return (
    <>
      {services.map((serv) => (
        <div className="flex" key={serv.id}>
          <div className="relative h-12 w-40 mr-2 mt-1.5">
            <Image
              src={serv.src}
              layout="fill"
              objectFit="cover"
              alt="List Icon"
            />
          </div>
          <div className="text-white">
            <h4 className="font-bold text-xl">{serv.title}</h4>
            <p className="text-sm leading-tight">{serv.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}
{
  /* <div className="flex">
            <div className="relative h-12 w-40 mr-2 mt-1.5">
              <Image
                src={Serv1}
                layout="fill"
                objectFit="cover"
                alt="List Icon"
              />
            </div>
            <div className="text-white">
              <h4 className="font-bold text-xl">Easy Setup</h4>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                odit repellat. Lorem ipsum dolor sit.
              </p>
            </div>
          </div> */
}

export default Service
