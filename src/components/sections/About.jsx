import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import profilePhoto from '../../assets/images/profile-photo.jpeg'
import { useInView } from '../../hooks/useInView.js'
import './About.css'

function About() {
  const [ref, isInView] = useInView()

  return (
    <section id="about" className="about">
      <Container>
        <div ref={ref} className={`about__grid ${isInView ? 'is-visible' : ''}`}>
          <AboutPhoto />

          <div className="about__content">
            <SectionHeading eyebrow="About Me" title="A bit about who I am" />

            <p className="about__lead">
              I'm Elwin — and I'm building my Virtual Assistant career from the
              ground up. I may be building my VA career, but I'm not starting
              from zero.
            </p>

            <p>
              Before this, I worked in software engineering, which is where I
              picked up habits that turn out to matter a lot in VA work too:
              paying close attention to detail, staying organized when things
              get complicated, and actually enjoying the process of learning a
              new tool instead of dreading it. I'm not here to build you
              software — I'm here to keep your spreadsheets clean, your inbox
              manageable, and your to-do list actually done.
            </p>

            <p>
              What I bring to the table right now: reliability, curiosity, and
              a genuine willingness to figure things out. What I don't have
              yet is a long list of VA clients — and I'd rather tell you that
              upfront than pretend otherwise. If you're looking for someone
              dependable to grow with, that's exactly what I'm here for.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * Photo placeholder — swap this out once you have your professional photo.
 *
 * To use a real photo:
 * 1. Drop your image into src/assets/images/ (e.g. profile-photo.jpg)
 * 2. Add this import at the top of the file:
 *      import profilePhoto from '../../assets/images/profile-photo.jpg'
 * 3. Replace the <div className="about__photo-placeholder">...</div> below with:
 *      <img src={profilePhoto} alt="Elwin Restor" className="about__photo" />
 */
function AboutPhoto() {
  return (
    <div className="about__photo-frame">
      <div className="about__photo-blob" aria-hidden="true" />
      <img src={profilePhoto} alt="Elwin Restor" className="about__photo" />
    </div>
  )
}

export default About
