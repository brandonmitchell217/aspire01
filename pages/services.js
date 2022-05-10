import OtherPages from '../components/OtherPages'
// Services page
export default function Services() {
  const title = 'Services'

  return (
    <section
      id="servicesPage"
      className="h-screen flex justify-center items-center"
    >
      <OtherPages title={title} />
    </section>
  )
}
