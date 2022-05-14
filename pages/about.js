import OtherPages from '../components/OtherPages'

// About page
export default function About() {
  const title = 'About'

  return (
    <>
      <section
        id="aboutPage"
        className="h-screen flex justify-center items-center"
      >
        <OtherPages title={title} />
      </section>
    </>
  )
}
