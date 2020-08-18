import React from "react";
import About from "./about/About";
import Stack from "./stack/Stack";
import Projects from "./projects/Projects";

function Main(props) {
  return (
    <React.Fragment>
      <section className="main">
        <About />
      </section>
      <Stack />
      <Projects />
    </React.Fragment>
  );
}

export default Main;
