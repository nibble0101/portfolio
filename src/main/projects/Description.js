import React from "react";

function Description(props) {
  return (
    <div className="description-wrapper">
      <p className="image-descrition"> {props.description} </p>
      <p className="source-code-link">
        <a href={props.sourceCodeUrl}>
          Source Code <i className="fab fa-github"></i>
        </a>
      </p>
    </div>
  );
}

export default Description;
