import { Link } from 'react-router-dom'
import { projects, showPlannedProjects } from '../data/projects'
import type { Project } from '../data/projects'
import { projectDetails } from '../data/projectDetails'

const linkClass =
  'inline-flex items-center rounded-md border border-card-line px-3 py-1.5 text-sm font-medium text-card-fg transition-colors hover:bg-card-line/40'

function ProjectCard({ project }: { project: Project }) {
  const isPlanned = project.status === 'planned'
  const hasDetails = Boolean(projectDetails[project.slug])

  return (
    <li>
      <article
        className={`flex h-full flex-col rounded-lg border border-card-line bg-card p-6 text-card-fg ${
          isPlanned ? 'border-dashed' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-1 text-sm text-card-muted">{project.subtitle}</p>
          </div>
          <span className="shrink-0 rounded-full border border-card-line px-2.5 py-1 text-xs font-medium text-card-muted">
            {project.badge}
          </span>
        </div>

        {project.role && (
          <p className="mt-4 text-sm">
            <span className="text-card-muted">My role: </span>
            <span className="font-medium">{project.role}</span>
          </p>
        )}

        <p className="mt-4 leading-relaxed text-card-muted">{project.summary}</p>

        {project.highlights && (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-card-muted marker:text-card-line">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {/* mt-auto pushes the tags and links to the bottom so cards line up */}
        <div className="mt-auto pt-6">
          <ul aria-label="Technologies" className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-card-line px-2.5 py-1 text-xs font-medium text-card-muted"
              >
                {t}
              </li>
            ))}
          </ul>

          {hasDetails && (
            <Link
              to={`/projects/${project.slug}`}
              aria-label={`View details: ${project.title}`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-card-fg underline underline-offset-4 hover:opacity-80"
            >
              View details <span aria-hidden="true">→</span>
            </Link>
          )}

          {/* Buttons only render when a link exists in projects.ts */}
          {(project.repoUrl || project.demoUrl) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub (opens in a new tab)`}
                  className={linkClass}
                >
                  GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo (opens in a new tab)`}
                  className={linkClass}
                >
                  Live demo
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </li>
  )
}

export default function Projects() {
  const visible = projects.filter((p) => showPlannedProjects || p.status === 'built')

  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {visible.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </ul>
  )
}