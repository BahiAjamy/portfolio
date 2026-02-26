import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofBar from './components/ProofBar';
import ImpactHighlights from './components/ImpactHighlights';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileContactCta from './components/MobileContactCta';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-white min-h-screen text-slate-900 selection:bg-teal-500/20 pb-24 md:pb-0">
        <Navbar />
        <main>
          <Hero />
          <ImpactHighlights />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
          <ProofBar />
        </main>
        <Footer />
        <MobileContactCta />
      </div>
    </LanguageProvider>
  );
}

export default App;
