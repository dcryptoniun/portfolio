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
      <div className=" scroll-smooth duration-500  w-full inset-4  flex justify-center items-center flex-col">
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
