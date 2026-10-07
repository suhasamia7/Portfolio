import { skillGroups, inProgressSkills } from '../data/skills'

export default function Skills() {
  return (
    <div>
      <dl className="divide-y divide-line border-y border-line">
        {skillGroups.map((group) => (
          <div key={group.name} className="grid gap-3 py-5 sm:grid-cols-4">
            <dt className="text-sm font-medium text-muted">{group.name}</dt>
            <dd className="sm:col-span-3">
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`rounded-md border px-3 py-1 text-sm ${
                      group.primary
                        ? 'border-accent font-medium text-fg'
                        : 'border-line text-muted'
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}

        {/* Only shown when the list is not empty */}
        {inProgressSkills.length > 0 && (
          <div className="grid gap-3 py-5 sm:grid-cols-4">
            <dt className="text-sm font-medium text-muted">In progress</dt>
            <dd className="sm:col-span-3">
              <ul className="flex flex-wrap gap-2">
                {inProgressSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-dashed border-line px-3 py-1 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </div>
  )
}