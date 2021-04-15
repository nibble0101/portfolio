import React from "react";
import Socials from "../../footer/Socials";

function Home(props) {
  const arrowClickHandle = () => {
      document.getElementById('about').scrollIntoView();
  }
  return (
    <section className="home" id="home">
      <div className="about-section">
        <h1>
          HI. MY NAME IS <span className="name">JOSEPH MAWA</span>
        </h1>
        <p>I AM A WEB DEVELOPER AND TECHNICAL WRITER!</p>
      </div>
      <div className="arrow-wrapper">
        <button className="arrow-button" onClick = {arrowClickHandle}>
          <span className="inner-wrapper">&#8595;</span>
        </button>
      </div>
      <Socials />
    </section>
  );
}

export default Home;
