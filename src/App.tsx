import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ResultsSection from './components/ResultsSection'
import RoiSection from './components/RoiSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import JourneySection from './components/JourneySection'
import StackSection from './components/StackSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ResultsSection />
      <RoiSection />
      <ServicesSection />
      <ProjectsSection />
      <JourneySection />
      <StackSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
