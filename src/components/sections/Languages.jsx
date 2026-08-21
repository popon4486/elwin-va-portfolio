import Container from '../layout/Container.jsx'
import { languages } from '../../data/languages.js'
import './Languages.css'

function Languages() {
  return (
    <section id="languages" className="languages">
      <Container>
        <div className="languages__row">
          <span className="languages__label">Languages I work in</span>

          <ul className="languages__list">
            {languages.map((language) => (
              <li key={language.name} className="languages__item">
                {language.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Languages
