import Link from 'next/link';

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <div className="container mx-auto text-white">
        <h2 className="font-bold text-center text-3xl lg:text-5xl overflow-visible drop-shadow-lg">
          Contact Us
        </h2>
        <p className="text-xs text-center max-w-2xl mx-auto px-3 mb-12 mt-2 drop-shadow-md lg:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit quia, eaque culpa architecto perspiciatis quod similique
          rerum veniam.
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <form className="">
          <div className="container mx-auto flex flex-col items-center space-y-6 px-6">
            <input
              type="text"
              className="bg-formGray min-w-full text-sm text-white focus:outline-none focus:shadow-lg p-2 rounded-lg lg:text-base"
              value="Name"
              id="name"
            />
            <input
              type="text"
              className="bg-formGray min-w-full text-sm text-white focus:outline-none focus:shadow-lg p-2 rounded-lg lg:text-base"
              value="Email Address"
              id="email"
            />
            <textarea
              className="h-36 bg-formGray min-w-full text-sm text-white focus:outline-none focus:shadow-lg p-2 rounded-lg overflow-clip lg:h-52 lg:text-base"
              name="message"
              id="message"
            >
              Enter a message...
            </textarea>
            <Link href="/">
              <a className="w-1/3 mx-auto text-center py-1 rounded-lg text-white text-lg bg-brandBlue lg:text-2xl lg:py-2 lg:w-1/4">
                Submit
              </a>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
