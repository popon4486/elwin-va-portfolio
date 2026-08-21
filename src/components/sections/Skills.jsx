import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { skillCategories } from '../../data/skills.js'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <Container>
        <SectionHeading eyebrow="Skills & Tools" title="What I Work With" />

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skills__group">
              <h3 className="skills__group-title">{category.title}</h3>
              <ul className="skills__list">
                {category.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
