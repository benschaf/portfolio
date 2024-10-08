import React, { useState } from 'react';
import Header from './components/Header'
import NavBar from './components/NavBar';
import LanguagePicker from './components/LanguagePicker';
import About from './components/About';
import ColorThemeSwitch from './components/ColorThemeSwitch';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {

  /* Color Switch */
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
      return newMode;
    });
  };
  return (
    <>
      <Header>
        <NavBar />
        {/* <LanguagePicker /> */}
        <ColorThemeSwitch className="hidden md:block" toggleFunction={toggleTheme} isDarkMode={isDarkMode} />
      </Header>
      <main className='mx-4 md:w-[80vw] md:mx-auto max-w-7xl'>
        {/* <HeroSection /> */}
        <ColorThemeSwitch className="md:hidden" toggleFunction={toggleTheme} isDarkMode={isDarkMode} />
        <BentoGrid />
        <About />
        <Projects />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer>
      </Footer>
    </>
  );
}

export default App;
