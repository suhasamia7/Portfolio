export default function About() {
  return (
    <div className="grid gap-12 md:grid-cols-5">
      <div className="space-y-5 text-lg leading-relaxed text-muted md:col-span-3">
        <p>
          I&apos;m a Software Engineering graduate from Taylor&apos;s University Malaysia
          with an extension in Data Science. My experience covers full-stack
          development, object-oriented design and Agile/Scrum delivery, along with
          applying machine learning and data-driven methods to real-world problems.
        </p>
        <p>
          I&apos;ve worked across healthcare, e-commerce and immersive technology. I led
          the team behind SpeakTrum, an AI-powered platform for early Parkinson&apos;s
          disease detection through vocal biomarker analysis, and I&apos;ve built
          production features across the UI, API and database layers.
        </p>
        <p>
          I&apos;m particularly interested in AI, backend systems and practical software
          that solves real problems.
        </p>
      </div>

      {/* "At a glance" facts, all taken from your CV */}
      <dl className="space-y-5 md:col-span-2">
        <div>
          <dt className="text-sm font-medium text-muted">Education</dt>
          <dd className="mt-1">
            BEng (Hons) Software Engineering, Data Science extension
            <span className="block text-sm text-muted">
              Taylor&apos;s University Malaysia, 2023–2026
            </span>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-muted">Recognition</dt>
          <dd className="mt-1">Dean&apos;s List · Best Idea Award, RNIF 2025</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-muted">Languages</dt>
          <dd className="mt-1">English (Fluent), Bangla, Hindi</dd>
        </div>
      </dl>
    </div>
  )
}