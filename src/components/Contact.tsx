import { profile } from '../data/profile'

export default function Contact() {
  return (
    <div className="max-w-2xl">
      <p className="text-lg leading-relaxed text-muted">
        I&apos;m looking for software engineering, AI/ML and backend roles, including
        graduate roles in Ireland. The best way to reach me is by email.
      </p>

      <p className="mt-6">
        <a
          href={`mailto:${profile.email}`}
          className="text-xl font-semibold underline underline-offset-4 hover:opacity-80"
        >
          {profile.email}
        </a>
      </p>

      <div className="mt-8">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-colors hover:opacity-90"
        >
          Send an email
        </a>
      </div>
    </div>
  )
}