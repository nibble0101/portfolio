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
        <a href="#cv"> CV </a>
      </li>
    </ul>
  );
}

export default Menu;
