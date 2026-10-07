import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { projectDetails } from '../data/projectDetails'
import NotFound from './NotFound'

function Block({ title, children }: { title: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/\s+/g, '-')
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-2xl sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4 leading-relaxed text-muted">
      {items.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-line">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

const buttonClass =
  'inline-flex items-center rounded-md border border-line px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-line/60'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const detail = slug ? projectDetails[slug] : undefined

  useEffect(() => {
    if (project) document.title = `${project.title} | Samia Islam`
    return () => {
      document.title = 'Samia Islam | Software Engineer'
    }
  }, [project])

  if (!project || !detail) return <NotFound />

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        to="/#projects"
        className="text-sm text-muted transition-colors hover:text-fg"
      >
        ← All projects
      </Link>

      <header className="mt-8">
        <p className="text-sm font-medium text-muted">{project.badge}</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">{project.title}</h1>
        <p className="mt-2 text-lg text-muted">{project.subtitle}</p>
        {project.role && (
          <p className="mt-4 text-sm">
            <span className="text-muted">My role: </span>
            <span className="font-medium">{project.role}</span>
          </p>
        )}
      </header>

      <div className="mt-12 space-y-12">
        {detail.problem && (
          <Block title="Problem">
            <Paragraphs items={detail.problem} />
          </Block>
        )}

        {detail.goal && (
          <Block title="Goal">
            <Paragraphs items={detail.goal} />
          </Block>
        )}

        {detail.myRole && (
          <Block title="My role">
            <Paragraphs items={detail.myRole} />
          </Block>
        )}

        {detail.solution && (
          <Block title="Solution">
            <Paragraphs items={detail.solution} />
          </Block>
        )}

        {detail.architecture && (
          <Block title="Architecture">
            <ol className="space-y-3">
              {detail.architecture.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-lg border border-line bg-surface p-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>
        )}

        <Block title="Technologies">
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </Block>

        {detail.keyFeatures && (
          <Block title="Key features">
            <Bullets items={detail.keyFeatures} />
          </Block>
        )}

        {detail.process && (
          <Block title="Development process">
            <Bullets items={detail.process} />
          </Block>
        )}

        {detail.challenges && (
          <Block title="Challenges">
            <ul className="space-y-4">
              {detail.challenges.map((c) => (
                <li
                  key={c.title}
                  className="rounded-lg border border-card-line bg-card p-5 text-card-fg"
                >
                  <h3 className="text-lg">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-card-muted">{c.text}</p>
                </li>
              ))}
            </ul>
          </Block>
        )}

        {detail.results && (
          <Block title="Results">
            <Bullets items={detail.results} />
          </Block>
        )}

        {detail.limitations && (
          <Block title="Limitations">
            <Bullets items={detail.limitations} />
          </Block>
        )}

        {detail.lessons && (
          <Block title="Lessons learned">
            <Bullets items={detail.lessons} />
          </Block>
        )}

        {detail.screenshots && detail.screenshots.length > 0 && (
          <Block title="Screenshots">
            <div className="grid gap-6 sm:grid-cols-2">
              {detail.screenshots.map((s) => (
                <figure key={s.src}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full rounded-lg border border-line"
                  />
                  <figcaption className="mt-2 text-sm text-muted">{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Block>
        )}

        {(project.repoUrl || project.demoUrl || (detail.links && detail.links.length > 0)) && (
          <Block title="Links">
            <div className="flex flex-wrap gap-3">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  GitHub repository
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  Live demo
                </a>
              )}
              {detail.links?.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </Block>
        )}
      </div>
    </article>
  )
}