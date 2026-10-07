import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-4xl sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-colors hover:opacity-90"
      >
        Back to home
      </Link>
    </section>
  )
}