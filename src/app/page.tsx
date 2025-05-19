import SiteLayout from '../components/SiteLayout'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Projects from '../components/Projects'


export default function HomePage() {
  return (
    <SiteLayout>
      <section id="about">
        <About />
      </section>
      <section id="experience">
  <Experience />
</section>
<section id="projects">
  <Projects />
</section>

      <section id="contact">
        <Contact />
      </section>
    </SiteLayout>
  )
}

