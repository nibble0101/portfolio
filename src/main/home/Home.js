import React from "react";

function Home(props) {
  return (
    <section className="home" id="home">
      <div className="about-section">
        <h1>
          HI. MY NAME IS <span className="name">JOSEPH MAWA</span>
        </h1>
        <p>I AM A FULL STACK DEVELOPER!</p>
      </div>
      <div className="arrow-wrapper">
        <button className="arrow-button">
          <span className="inner-wrapper">&#8595;</span>
        </button>
      </div>
    </section>
  );
}

export default Home;
