import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ServiceCard from '../ui/ServiceCard.jsx'
import { reasons } from '../../data/reasons.js'
import './WhyWorkWithMe.css'

function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="why">
      <Container>
        <SectionHeading eyebrow="Why Work With Me" title="What You Can Expect From Me" />

        <div className="why__grid">
          {reasons.map((reason) => (
            <ServiceCard key={reason.id} {...reason} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyWorkWithMe
