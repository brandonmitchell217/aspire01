import Link from 'next/link'
export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <div className="container mx-auto text-white">
        <h2 className="font-bold text-center text-3xl">Contact Us</h2>
        <p className="text-xs text-center max-w-4xl mx-auto px-3 mb-6 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit quia, eaque culpa architecto perspiciatis quod similique
          rerum veniam.
        </p>
      </div>
      <div className="w-full">
        <form className="">
          <div className="container mx-auto flex flex-col items-center space-y-6 px-6">
            <input
              type="text"
              className="bg-formGray min-w-full max-w-4xl text-white p-2 rounded-lg"
              value="Name"
              id="name"
            />
            <input
              type="text"
              className="bg-formGray min-w-full max-w-4xl text-white p-2 rounded-lg"
              value="Email Address"
              id="email"
            />
            <textarea
              className="bg-formGray min-w-full text-white p-2 rounded-lg"
              name="message"
              id="message"
              cols="30"
              rows="5"
            >
              Enter a message...
            </textarea>
            <Link href="/">
              <a className="w-48 mx-auto text-center py-1 rounded-lg text-white text-xl bg-brandBlue">
                Submit
              </a>
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
