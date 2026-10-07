export type ExperienceItem = {
  role: string
  organization: string
  period?: string // optional, because the Capstone has no dates in your CV
  points: string[]
  tech?: string[] // optional list of technologies shown as small tags
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack Developer',
    organization: '7-Eleven Sdn Bhd',
    period: 'Apr 2025 – Aug 2026',
    points: [
      'Developed and maintained frontend and backend features for an internal business platform.',
      'Built merchandising features spanning product data, promotions and inventory workflows for an internal e-commerce platform.',
      'Diagnosed and resolved cross-stack bugs across UI, API and database layers.',
      'Diagnosed and resolved backend data-binding and integration issues in file upload and reporting workflows.',
    ],
    tech: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      '.NET Core',
      'ASP.NET Core',
      'PostgreSQL',
      'REST APIs',
      'Git',
    ],
  },
  {
    role: 'Capstone Project Lead',
    organization: "SpeakTrum, Taylor's University",
    points: [
      "Led a cross-functional team building an AI-powered mobile platform for early Parkinson's disease screening through vocal biomarker analysis.",
      'Served as project lead, system architect and data engineer, directing architecture design and project milestones.',
      'Designed the Supabase (PostgreSQL) infrastructure with Row Level Security, and built the audio quality-check and spectrogram pipeline that feeds the CNN model.',
      'Built the CNN training and 5-fold cross-validation pipeline, and containerised the inference worker with Docker for deployment on Fly.io.',
    ],
    tech: ['Python', 'PyTorch', 'PostgreSQL', 'Supabase', 'Docker'],
  },
  {
    role: 'Student Helper',
    organization: 'VORTEX Lab',
    period: '2025',
    points: [
      'Provided technical support and facilitated student engagement with Virtual Reality technology.',
      'Troubleshot real-time hardware and software issues.',
    ],
  },
]