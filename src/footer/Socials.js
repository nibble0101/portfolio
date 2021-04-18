import React from "react";
function Socials() {
  return (
    <div className="social-media-wrapper">
      <div className="linkedin">
        <a
          href="https://www.linkedin.com/in/joseph-mawa-465000203/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="linkedin"
        >
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
      <div className="twitter">
        <a
          href="https://twitter.com/MJMAWA"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="twitter"
        >
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
      <div className="github">
        <a
          href="https://github.com/nibble0101"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="github"
        >
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
      </div>
      <div className="codepen">
        <a
          href="https://codepen.io/nibble0101"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="codepen"
        >
          <i className="fab fa-codepen" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Socials;