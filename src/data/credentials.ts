export const education = {
  degree: 'Bachelor of Software Engineering (Hons)',
  extension: 'Extension in Data Science',
  school: "Taylor's University, Malaysia",
  period: '2023 – 2026',
  focusAreas: [
    'Advanced Data Modelling',
    'Data Mining',
    'Big Data Technologies',
    'AI Integration',
    'Predictive Analytics',
  ],
  coursework: [
    'Human-Computer Interaction (HCI)',
    'Ethical Software Engineering',
    'Database Management Systems (SQL)',
  ],
  distinction:
    "Dean's List across multiple semesters, most recently February 2026",
}

export type Entry = {
  title: string
  detail?: string
  org?: string
  date?: string
  items?: string[]
}

export const achievements: Entry[] = [
  {
    title: 'Best Idea Award · Top 3 Finalist',
    detail:
      'UG Research Idea Pitch Competition, Centre for Intelligent Innovations (CII)',
    org: "Research & Innovation Festival (RNIF 2025), Taylor's University",
    date: '2–4 Dec 2025',
  },
  {
    title: "Dean's List",
    detail:
      'Recognised for academic performance across multiple semesters, most recently the February 2026 semester.',
    org: "Taylor's University",
    date: 'Feb 2026',
  },
]

export const hackathons: Entry[] = [
  {
    title: 'XR Jam Futurescape 2025',
    detail:
      '48-hour cross-university hackathon. Built Monere, a VR reminiscence therapy experience.',
    org: 'Participant',
    date: '24–26 Oct 2025',
  },
  {
    title: 'FutureHack! A.I. Battlefield',
    detail: 'AI hackathon.',
    org: 'Participant',
    date: '20 Jul 2025',
  },
]

export const certifications: Entry[] = [
  {
    title: 'AI Literacy for All',
    detail: "DECx Taylor's University",
    org: 'Digital Education Council',
    date: 'May 2026',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    org: 'Amazon Web Services (AWS)',
  },
  {
    title: 'Java Programming Course',
    org: 'Oracle Academy',
  },
  {
    title: 'Cisco Networking Academy',
    org: 'Packet Tracer courses',
    items: [
      'Getting Started with Cisco Packet Tracer (Nov 2024)',
      'Exploring Networking with Cisco Packet Tracer (Nov 2024)',
      'Introduction to Packet Tracer (Dec 2024)',
    ],
  },
]