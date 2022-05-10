import Link from 'next/link'

export default function Contact() {
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="font-bold text-6xl overflow-visible">About Page</h2>
      <Link href="/">
        <a className="w-64 mx-auto py-3 text-center text-2xl bg-brandBlue rounded-full">
          Go Home
        </a>
      </Link>
    </div>
  )
}
