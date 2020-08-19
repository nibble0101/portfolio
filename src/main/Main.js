import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";

function Main(props) {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Projects />
    </React.Fragment>
  );
}

export default Main;
