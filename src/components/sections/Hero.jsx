import Container from '../layout/Container.jsx'
import Button from '../ui/Button.jsx'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__text">
            <span className="hero__eyebrow">Virtual Assistant</span>
            <span className="hero__eyebrow">Web Support</span>
            <span className="hero__eyebrow">Administrative Support</span>

            <h1 className="hero__headline">
              Hi, I’m Elwin. I like making messy things a little less messy—whether that’s spreadsheets, 
              data, websites, or the never-ending pile of things that somehow need to be done.
            </h1>

            <p className="hero__subtext">
              I'm building my Virtual Assistant career from the ground up — one
              organized folder, one answered email, one finished task at a time.
              If you need an extra pair of capable hands, I'm ready.
            </p>

            <div className="hero__actions">
              <Button href="#contact">Need a Hand?</Button>
              <Button href="#services" variant="secondary">
                See What I Can Do
              </Button>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <HeroIllustration />
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * Signature visual: a few "task cards" — one tilted (messy),
 * settling into an aligned row (organized). Decorative only,
 * hence aria-hidden on the wrapper above.
 */
function HeroIllustration() {
  return (
    <svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" className="hero__illustration">
      <rect
        x="30"
        y="40"
        width="150"
        height="90"
        rx="14"
        fill="var(--color-white)"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
        transform="rotate(-8 105 85)"
        className="hero__card hero__card--1"
      />
      <line x1="55" y1="70" x2="150" y2="70" stroke="var(--color-border-strong)" strokeWidth="4" strokeLinecap="round" transform="rotate(-8 105 85)" />
      <line x1="55" y1="90" x2="130" y2="90" stroke="var(--color-light)" strokeWidth="4" strokeLinecap="round" transform="rotate(-8 105 85)" />

      <rect
        x="220"
        y="70"
        width="170"
        height="100"
        rx="16"
        fill="var(--color-white)"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
        className="hero__card hero__card--2"
      />
      <circle cx="248" cy="100" r="9" fill="var(--color-primary)" />
      <line x1="266" y1="100" x2="360" y2="100" stroke="var(--color-border)" strokeWidth="4" strokeLinecap="round" />
      <line x1="248" y1="130" x2="340" y2="130" stroke="var(--color-light)" strokeWidth="4" strokeLinecap="round" />
      <line x1="248" y1="150" x2="310" y2="150" stroke="var(--color-light)" strokeWidth="4" strokeLinecap="round" />

      <rect
        x="80"
        y="190"
        width="220"
        height="110"
        rx="16"
        fill="var(--color-primary)"
        className="hero__card hero__card--3"
      />
      <circle cx="112" cy="222" r="10" fill="var(--color-light)" />
      <path d="M107 222 l4 4 l8 -9" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="134" y1="222" x2="250" y2="222" stroke="rgba(238,241,248,0.85)" strokeWidth="4" strokeLinecap="round" />

      <circle cx="112" cy="254" r="10" fill="var(--color-light)" />
      <path d="M107 254 l4 4 l8 -9" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="134" y1="254" x2="270" y2="254" stroke="rgba(238,241,248,0.85)" strokeWidth="4" strokeLinecap="round" />

      <circle cx="112" cy="270" r="10" fill="none" stroke="rgba(238,241,248,0.6)" strokeWidth="2.5" />
      <line x1="134" y1="270" x2="220" y2="270" stroke="rgba(238,241,248,0.4)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export default Hero
