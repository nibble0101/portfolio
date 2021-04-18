import React from "react";

function Description(props) {
  return (
    <div className="description-wrapper">
      <h3 className="project-name">
        {" "}
        <a href={props.projectUrl} target="_blank" rel="noreferrer noopener"> {props.name} </a>
      </h3>
      <p className="image-descrition"> {props.description} </p>
      <p className="source-code-link">
        <a href={props.sourceCodeUrl} target="_blank" aria-label="github" rel="noreferrer noopener">
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Description;
