import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { siteContent } from '../../data/siteContent.js'
import './Contact.css'

const reachOutFor = ['Ongoing VA support', 'A one-off project', 'Job opportunities']

function Contact() {
  const { email, phone } = siteContent.contact
  const telHref = `tel:${phone.replace(/\s+/g, '')}`

  return (
    <section id="contact" className="contact">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk"
          subtitle="Whether it's ongoing VA support, a one-off project, or a job opportunity — I'd love to hear from you. Reach out directly, no forms to fill out."
        />

        <ul className="contact__reasons">
          {reachOutFor.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>

        <div className="contact__methods">
          <a href={`mailto:${email}`} className="contact__method">
            <span className="contact__method-icon" aria-hidden="true">
              📧
            </span>
            <span>
              <span className="contact__method-label">Email</span>
              <span className="contact__method-value">{email}</span>
            </span>
          </a>

          <a href={telHref} className="contact__method">
            <span className="contact__method-icon" aria-hidden="true">
              📞
            </span>
            <span>
              <span className="contact__method-label">Phone</span>
              <span className="contact__method-value">{phone}</span>
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Contact
