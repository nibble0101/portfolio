import React from "react";
import About from "./about/About";
import Stack from "./stack/Stack";

function Main(props) {
  return (
    <React.Fragment>
      <section className="main">
        <About />
      </section>
      <Stack />
    </React.Fragment>
  );
}

export default Main;
