import React from "react";

function Description() {
  const year = new Date().getFullYear();
  return (
    <section className="description">
      <div id="about"></div>
      <h2 >ABOUT ME</h2>
      <p>
        My name is Joseph Mawa, a web developer from Uganda. I started coding as
        a hobby after graduating college approximately {year - 2012} years ago.
        The first language i was introduced to was python. I also toyed with R
        and C before discovering Javascript. Since then i fell in love with web
        development. At school, i studied Physics and Education. I worked as a
        high school teacher before quitting to learn web development full time.
        I am always working towards making myself a better developer. In my
        spare time, you will either find me watching a movie or listening to {" "}
        <a
          href="https://www.recklessradio.ug/"
          target="_blank"
          rel="noreferrer noopener"
        >
          music
        </a>
        .
      </p>
      <h2>SKILLS</h2>
    </section>
  );
}
export default Description;
