import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'
import { projects } from '../../data/projects.js'
import './Portfolio.css'

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="My Work"
          subtitle="I'm early in my VA journey, so this section is small and honest on purpose. This website is my first real project — more will join it as I take on real work."
        />

        <div className="portfolio__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}

          <ComingSoonCard />
        </div>
      </Container>
    </section>
  )
}

function ComingSoonCard() {
  return (
    <div className="coming-soon-card">
      <span className="coming-soon-card__icon" aria-hidden="true">
        🌱
      </span>
      <h3 className="coming-soon-card__title">More Projects Coming Soon</h3>
      <p className="coming-soon-card__description">
        As I take on real client work — spreadsheets, research, Canva pieces,
        more websites — they'll show up here. No filler in the meantime.
      </p>
    </div>
  )
}

export default Portfolio
