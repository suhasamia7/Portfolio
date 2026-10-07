import { education } from '../data/credentials'

export default function Education() {
  return (
    <article className="rounded-lg border border-card-line bg-card p-6 text-card-fg">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-xl">{education.degree}</h3>
        <p className="text-sm text-card-muted">{education.period}</p>
      </div>

      <p className="mt-1 text-card-fg">{education.extension}</p>
      <p className="text-card-muted">{education.school}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="text-sm font-medium text-card-muted">Key focus areas</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-card-muted marker:text-card-line">
            {education.focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-card-muted">Relevant coursework</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-card-muted marker:text-card-line">
            {education.coursework.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 border-t border-card-line pt-4 text-sm text-card-muted">
        <span className="font-medium text-card-fg">Academic distinction: </span>
        {education.distinction}
      </p>
    </article>
  )
}