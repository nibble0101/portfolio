import React from "react";
import Logo from "../header/Logo";

function SocialMedia() {
  return (
    <div className="wrapper">
      <Logo>
        <p>
          MJ. <span className="surname-text"> MAWA </span>
          <i class="fas fa-laptop"></i>
        </p>
      </Logo>
      <div className="social-media-wrapper">
        <div className="twitter" >
          <a href="https://twitter.com/MJMAWA" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div className="facebook">
          <a href="#" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/nibble0101"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <div className="codepen">
          <a
            href="https://codepen.io/nibble0101"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fab fa-codepen"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
