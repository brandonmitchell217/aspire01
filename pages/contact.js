import OtherPages from '../components/OtherPages'
// Contact page
export default function Contact() {
  const title = 'Contact'

  return (
    <section
      id="contactPage"
      className="h-screen flex justify-center items-center"
    >
      <OtherPages title={title} />
    </section>
  )
}
