import React from "react";
import lemur from "./lemur.jpg";

function About(props) {
  return (
    <div
      className="about-section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        textAlign: "center"
      }}
    >
      <h1>
        Hello There. Thanks for passing by. My name is Joseph Mawa and i am a full stack
        web developer.
      </h1>
    </div>
  );
}

export default About;
