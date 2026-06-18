import { useEffect } from 'react';
import ProfessionalBackground from './components/ProfessionalBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceCertifications from './components/ExperienceCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollFadeSection from './components/ScrollFadeSection';

function App() {
  useEffect(() => {
    document.body.classList.add('light-theme');
    document.body.style.backgroundColor = '#F8F9FD';
    document.body.style.color = '#1E293B';
  }, []);

  return (
    <>
      {/* Professional Background */}
      <div className="fixed inset-0 -z-20 w-full h-full">
        <ProfessionalBackground />
      </div>

      {/* Styled Spring Cursor */}
      <CustomCursor />

      {/* Header Menu */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 w-full min-h-screen">
        <ScrollFadeSection isHero={true}>
          <Hero />
        </ScrollFadeSection>
        
        <ScrollFadeSection>
          <About />
        </ScrollFadeSection>
        
        <ScrollFadeSection>
          <Skills />
        </ScrollFadeSection>
        
        <ScrollFadeSection>
          <Projects />
        </ScrollFadeSection>
        
        <ScrollFadeSection>
          <ExperienceCertifications />
        </ScrollFadeSection>
        
        <ScrollFadeSection>
          <Contact />
        </ScrollFadeSection>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
