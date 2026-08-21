import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ServiceCard from '../ui/ServiceCard.jsx'
import { services } from '../../data/services.js'
import './Services.css'

function Services() {
  return (
    <section id="services" className="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I Can Help With"
          subtitle="A focused set of things I can take off your plate right now — not an exhaustive list of everything I might learn someday."
        />

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
