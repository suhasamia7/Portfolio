import { achievements, hackathons, certifications } from '../data/credentials'
import type { Entry } from '../data/credentials'

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="h-full rounded-lg border border-card-line bg-card p-6 text-card-fg">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h4 className="text-lg font-semibold tracking-tight">{entry.title}</h4>
        {entry.date && <p className="shrink-0 text-sm text-card-muted">{entry.date}</p>}
      </div>

      {entry.detail && (
        <p className="mt-2 text-sm leading-relaxed text-card-muted">{entry.detail}</p>
      )}
      {entry.org && <p className="mt-1 text-sm text-card-muted">{entry.org}</p>}

      {entry.items && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-card-muted marker:text-card-line">
          {entry.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

function Group({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl">{title}</h3>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {entries.map((entry) => (
          <li key={entry.title}>
            <EntryCard entry={entry} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Achievements() {
  return (
    <div className="space-y-14">
      <Group title="Awards & recognition" entries={achievements} />
      <Group title="Hackathons" entries={hackathons} />
      <Group title="Certifications" entries={certifications} />
    </div>
  )
}