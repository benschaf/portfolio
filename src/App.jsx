import React, { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ColorThemeSwitch from "./components/ColorThemeSwitch";
import LanguageSwitch from "./components/LanguageSwitch";
import BentoGrid from "./components/BentoGrid";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import HeaderElement from "./components/HeaderElement";
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
      <header>
        <HeaderElement className="hidden md:block md:fixed md:top-2 md:left-2">
          <div className="px-4">
            <h1>Benjamin Schäfer</h1>
            <p>Online Web Dev Portfolio</p>
          </div>
        </HeaderElement>
        <HeaderElement
          className="
          fixed
          bottom-0 md:bottom-[initial]
          left-1/2 md:left-[initial] md:right-2 lg:left-1/2
          w-full md:w-fit
          transform -translate-x-1/2 md:transform-none md:translate-x-0 lg:transform lg:-translate-x-1/2
          md:top-2
          rounded-none md:rounded-full
        "
        >
          <NavBar />
        </HeaderElement>
        <HeaderElement className="absolute w-fit right-2 md:fixed md:bottom-2 lg:bottom-[initial] lg:top-2">
          <div className="flex h-full items-center">
            <LanguageSwitch />
            <ColorThemeSwitch
              toggleFunction={toggleTheme}
              isDarkMode={isDarkMode}
            />
          </div>
        </HeaderElement>
        <div className="hidden md:block h-28"></div>
      </header>
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
