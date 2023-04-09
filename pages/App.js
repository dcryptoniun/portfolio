import React from "react";
import Hero from "./hero.js";
import About from "./about.js";
import Services from "./services.js";
import Skills from "./skills.js";
import Projects from "./projects.js";
import Contact from "./contact.js";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full duration-500  scroll-smooth inset-4">
        <section id="hero">
          <Hero />
        </section>
        {/* <section id="about">
          <About />
        </section> */}
        <section id="services">
          <Services />
        </section>
        {/* <section id="skills">
          <Skills />
        </section> */}
        {/* <section id="projects">
          <Projects />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
