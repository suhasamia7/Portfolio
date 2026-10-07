export type SkillGroup = {
  name: string
  skills: string[]
  primary?: boolean // highlighted style for your main skills
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Primary languages',
    primary: true,
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    name: 'AI & data',
    skills: [
      'Machine Learning',
      'Data Science',
      'Predictive Analytics',
      'Data Modelling',
      'Data Mining',
      'PyTorch',
    ],
  },
  {
    name: 'Backend',
    skills: [
      'REST APIs',
      'FastAPI',
      'Node.js',
      '.NET Core',
      'ASP.NET Core',
      'PostgreSQL',
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Git', 'Azure DevOps'],
  },
  {
    name: 'Frontend & XR',
    skills: ['React', 'Next.js', 'TypeScript', 'Flutter', 'Unity', 'C#', 'XR/VR'],
  },
  {
    name: 'Practices',
    skills: [
      'Agile / Scrum',
      'Object-Oriented Design',
      'Software Architecture',
      'Software Testing',
      'UI/UX (HCI)',
    ],
  },
]

// Technologies you are currently learning or building with.
// If you have not started Spring Boot yet, change this to: []
export const inProgressSkills: string[] = []