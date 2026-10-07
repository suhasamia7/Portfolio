import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Section from '../components/Section'

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="about" title="About Me">
        <About />
      </Section>

      <Section id="projects" title="Featured Projects">
        <Projects />
      </Section>

      <Section id="skills" title="Technical Skills">
        <Skills />
      </Section>

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>

      <Section id="achievements" title="Achievements & Certifications">
        <Achievements />
      </Section>

      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </>
  )
}