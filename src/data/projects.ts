export type Project = {
  slug: string // used for the project's own page in Step 6
  title: string
  subtitle: string
  status: 'built' | 'planned'
  badge: string // small label on the card
  role?: string
  summary: string
  highlights?: string[]
  tech: string[]
  repoUrl?: string 
  demoUrl?: string // add later: the button only appears when this exists
}

export const showPlannedProjects = false

export const projects: Project[] = [
  {
    slug: 'speaktrum',
    title: 'SpeakTrum',
    subtitle: "Early detection of Parkinson's disease",
    status: 'built',
    badge: 'Capstone project',
    role: 'Team Leader',
    summary:
      "An AI-powered mobile platform for early-stage Parkinson's disease screening through vocal biomarker analysis.",
    highlights: [
      'Audio quality checks reject recordings that are too noisy or too short before analysis.',
      'Voice recordings are converted into spectrograms for a CNN-based risk classifier.',
      'Supabase (PostgreSQL) backend with Row Level Security, so users can only access their own data.',
    ],
    tech: ['Python', 'PyTorch', 'FastAPI', 'Flutter', 'Supabase', 'PostgreSQL', 'Docker'],
  },
  {
    slug: 'monere',
    title: 'Monere',
    subtitle: 'Reminiscence therapy in VR',
    status: 'built',
   badge: 'XR Jam Futurescape 2025',
    role: 'Developer',
    summary:
      'An immersive VR experience built to support reminiscence therapy for patients with cognitive impairment.',
    highlights: [
      'Focused on emotional design and intuitive 3D interaction to support patient engagement.',
    ],
    tech: ['Unity', 'C#', 'XR/VR'],
  },
  {
    slug: 'spring-boot-backend',
    title: 'Java / Spring Boot Backend',
    subtitle: 'Backend REST API project',
    status: 'planned',
    badge: 'Planned',
    summary:
      'A new portfolio project to demonstrate Java backend development. Features will be defined and added here once the project is built.',
    tech: ['Java', 'Spring Boot'],
  },
  {
    slug: 'ai-job-matcher',
    title: 'AI Job Matcher',
    subtitle: 'Python and AI project',
    status: 'planned',
    badge: 'Planned',
    summary:
      'A new Python and AI portfolio project. Features will be defined and added here once the project is built.',
    tech: ['Python'],
  },
]