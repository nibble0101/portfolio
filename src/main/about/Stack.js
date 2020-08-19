import React from "react";
import Description from "./Description";

const stack = [
  { name: "HTML5", class: "fab fa-html5", id: "html5" },
  { name: "CSS3", class: "fab fa-css3", id: "css3" },
  { name: "JS", class: "fab fa-js-square", id: "javascript" },
  { name: "React.js", class: "fab fa-react", id: "react" },
  { name: "Node.js", class: "fab fa-node", id: "node" },
  { name: "Mongodb", class: "fas fa-database", id: "mongodb" },
  { name: "Express.js", class: "fas fa-server", id: "server" },
  { name: "Sass", class: "fab fa-sass", id: "sass" },
  { name: "Bootstrap", class: "fab fa-bootstrap", id: "bootstrap" },
];

function Stack(props) {
  return (
    <section id="stack" className = "stack">
      {stack.map((tech, index) => {
        return (
          <div key={tech.id} className="individual-tech">
            <h2>  <i className={tech.class}></i>  </h2>
            <p> {tech.name} </p>
          </div>
        );
      })}
    </section>
  );
}

export default Stack;
