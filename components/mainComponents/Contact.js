import Link from 'next/link'
export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <div className="container mx-auto text-white mb-12">
        <h2 className="font-bold text-center text-3xl">Contact Us</h2>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit quia, eaque culpa architecto perspiciatis quod similique
          rerum veniam.
        </p>
      </div>
      <div className="container mx-auto px-8">
        <form>
          <div className="flex flex-col items-center space-y-6">
            <input
              type="text"
              className="bg-gray-400  text-white w-96 p-2 rounded-lg"
              value="Name"
              id="name"
            />
            <input
              type="text"
              className="bg-gray-400  text-white w-96 p-2 rounded-lg"
              value="Email Address"
              id="email"
            />
            <textarea
              className="bg-gray-400 text-white w-96 p-2 rounded-lg"
              name="message"
              id="message"
              cols="30"
              rows="5"
            >
              Enter a message...
            </textarea>
            <Link href="/">
              <a className="max-w-xs mx-auto px-6 py-1 rounded-lg bg-brandBlue">
                Submit
              </a>
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
