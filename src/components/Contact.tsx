import { useState } from 'react'
import { profile } from '../data/profile'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // If copying is blocked, the email is still visible above to copy by hand
    }
  }

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

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-colors hover:opacity-90"
        >
          Send an email
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center justify-center rounded-md border border-line px-5 py-3 text-sm font-medium text-fg transition-colors hover:bg-line/60"
        >
          Copy email address
        </button>

        {/* Screen readers announce this message when it appears */}
        <span role="status" className="text-sm text-muted">
          {copied ? 'Copied to clipboard' : ''}
        </span>
      </div>
    </div>
  )
}