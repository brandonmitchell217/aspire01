import Footer from '../components/Footer'
import Nav from '../components/Nav'
// About page
export default function About() {
  return (
    <>
      <Nav />
      <section
        id="aboutPage"
        className="h-screen flex justify-center items-center bg-red-600"
      >
        <h1 className="text-4xl font-bold overflow-hidden">About Page</h1>
      </section>
      <Footer />
    </>
  )
}
