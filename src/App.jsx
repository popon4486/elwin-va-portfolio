import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Languages from './components/sections/Languages.jsx'
import Services from './components/sections/Services.jsx'
import Portfolio from './components/sections/Portfolio.jsx'
import Skills from './components/sections/Skills.jsx'
import WhyWorkWithMe from './components/sections/WhyWorkWithMe.jsx'
import Contact from './components/sections/Contact.jsx'

function App() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Languages />
        <Services />
        <Portfolio />
        <Skills />
        <WhyWorkWithMe />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
