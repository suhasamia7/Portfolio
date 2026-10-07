import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2
            id={`${id}-heading`}
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {title}
          </h2>
          <div className="mt-8">{children}</div>
        </Reveal>
      </div>
    </section>
  )
}