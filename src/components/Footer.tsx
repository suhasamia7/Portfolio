import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>

        <ul className="flex flex-wrap gap-6">
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-fg">
              Email
            </a>
          </li>
          <li>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <p>Built with React, TypeScript and Tailwind CSS</p>
      </div>
    </footer>
  )
}