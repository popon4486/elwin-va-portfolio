import Container from './Container.jsx'
import { siteContent } from '../../data/siteContent.js'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  const { name, role, contact } = siteContent

  return (
    <footer className="footer">
      <Container>
        <div className="footer__row">
          <div>
            <p className="footer__name">{name}</p>
            <p className="footer__role">{role}</p>
          </div>

          <div className="footer__contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
          </div>
        </div>

        <p className="footer__copyright">
          © {year} {name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
