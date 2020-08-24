import React, {useRef} from "react";
import Menu from "./Menu";
import Logo from "./Logo";

function Header(props) {
  return (
    <header className="header">
      <Logo>
        <h1>
          MJ. <span className="surname-text">MAWA</span>{" "}
          <i className="fas fa-laptop"></i>
        </h1>
      </Logo>
      <Menu />
    </header>
  );
}

export default Header;
