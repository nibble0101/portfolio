import React from "react";
import Logo from "../header/Logo";
import Socials from "./Socials";

function SocialMedia() {
  return (
    <div className="wrapper">
      <Logo>
        <p>
          MJ. <span className="surname-text"> MAWA </span>
          <i className="fas fa-laptop" aria-hidden="true"></i>
        </p>
      </Logo>
      <Socials />
    </div>
  );
}

export default SocialMedia;
