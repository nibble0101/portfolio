import React from "react";
import Logo from "../header/Logo";

function SocialMedia() {
  return (
    <div className="wrapper">
      <Logo>
        <p>
          MJ. <span className = "surname-text"> MAWA </span> <i class="fas fa-laptop"></i>
        </p>
      </Logo>
      <div className="social-media-wrapper">
        <div className="twitter">
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </div>
        <div className="facebook">
          <i className="fab fa-facebook" aria-hidden="true"></i>
        </div>
        <div className="github">
          <i className="fab fa-github" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
