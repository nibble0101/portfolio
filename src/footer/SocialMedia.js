import React from "react";

function SocialMedia() {
  return (
    <div className="wrapper">
      <div className="laptop">
        <i class="fas fa-laptop"></i>
      </div>
      <div className = "social-media-wrapper">
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
