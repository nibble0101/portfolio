import React from "react";
import Description from "./Description";
import Stack from "./Stack";

function About(props) {
  return (
    <div className="about-wrapper">
      <Description />
      <Stack />
      <div id="projects"></div>
    </div>
  );
}
export default About;