import React from "react";
function Menu(props) {
  return (
    <ul className="menu">
      <li>
        <a href="#home"> HOME</a>
      </li>
      <li>
        <a href="#about"> ABOUT </a>
      </li>
      <li>
        <a href="#projects"> PROJECTS</a>
      </li>
      <li>
        <a href="#contact"> CONTACT </a>
      </li>
      <li>
        <a
          href="https://dev.to/nibble0101"
          target="_blank"
          rel="noreferrer noopener"
        >
          BLOG
        </a>
      </li>
    </ul>
  );
}

export default Menu;
