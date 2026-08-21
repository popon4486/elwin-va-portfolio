import { useState } from 'react'
import Container from './Container.jsx'
import Button from '../ui/Button.jsx'
import { siteContent } from '../../data/siteContent.js'
import logo from '../../assets/images/logo.png'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <Container>
        <div className="navbar__row">
          <a href="#top" className="navbar__logo" aria-label={`${siteContent.name} — Home`}>
            <img src={logo} alt="" className="navbar__logo-img" />
          </a>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Primary">
            {siteContent.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar__cta">
            {/* <Button href={siteContent.cta.href}>{siteContent.cta.label}</Button> */}
          </div>

          {/* Mobile toggle */}
          <button
            className="navbar__toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={`navbar__toggle-bar ${isOpen ? 'is-open' : ''}`} />
            <span className={`navbar__toggle-bar ${isOpen ? 'is-open' : ''}`} />
            <span className={`navbar__toggle-bar ${isOpen ? 'is-open' : ''}`} />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`navbar__mobile ${isOpen ? 'is-open' : ''}`}
        aria-label="Mobile"
      >
        {siteContent.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <Button href={siteContent.cta.href} onClick={closeMenu} className="navbar__mobile-cta">
          {siteContent.cta.label}
        </Button>
      </nav>
    </header>
  )
}

export default Navbar
