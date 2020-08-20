import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

function Main(props) {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default Main;
