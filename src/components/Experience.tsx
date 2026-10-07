import { experience } from '../data/experience'

export default function Experience() {
  return (
    <ul className="space-y-6">
      {experience.map((item) => (
        <li key={`${item.role}-${item.organization}`}>
          <article className="rounded-lg border border-card-line bg-card p-6 text-card-fg">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
              {item.period && <p className="text-sm text-card-muted">{item.period}</p>}
            </div>

            <p className="mt-1 text-card-muted">{item.organization}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-card-muted marker:text-card-line">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {/* Technology tags only appear when the role has a "tech" list */}
            {item.tech && (
              <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-card-line px-2.5 py-1 text-xs font-medium text-card-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </li>
      ))}
    </ul>
  )
}