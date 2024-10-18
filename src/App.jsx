import React, { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ColorThemeSwitch from "./components/ColorThemeSwitch";
import LanguageSwitch from "./components/LanguageSwitch";
import BentoGrid from "./components/BentoGrid";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

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
        <div className="flex items-center justify-around rounded-full bg-[rgba(255,255,255,.4)] dark:bg-[rgba(0,0,0,.4)] text-text p-1 backdrop-blur-3xl shadow-[10px_10px_25px_20px_rgba(0,0,0,0.2)] md:shadow-[10px_10px_25px_0px_rgba(0,0,0,0.2)]">
          <LanguageSwitch />
          <ColorThemeSwitch
            toggleFunction={toggleTheme}
            isDarkMode={isDarkMode}
          />
        </div>
      </Header>
      <main className="mx-4 md:w-[80vw] md:mx-auto max-w-7xl">
        {/* <HeroSection /> */}
        <BentoGrid />
        <About />
        <Projects />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
