import React from 'react';
import Header from './components/Header'
import NavBar from './components/NavBar';
import LanguagePicker from './components/LanguagePicker';
import ColorThemeSwitch from './components/ColorThemeSwitch';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header>
        <NavBar />
        {/* <LanguagePicker /> */}
        <ColorThemeSwitch />
      </Header>
      <main>
        {/* <HeroSection /> */}
        <BentoGrid />
        <Projects />
        <Testimonials />
      </main>
      <Footer>
        <ContactForm />
      </Footer>
    </>
  );
}

export default App;
