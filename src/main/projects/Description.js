import React from "react";

function Description(props) {
  return (
    <div className="description-wrapper">
      <h3 className = "project-name"> <a href = {props.projectUrl}> {props.name} </a></h3>
      <p className="image-descrition"> {props.description} </p>
      <p className="source-code-link">
        <a href={props.sourceCodeUrl}>
           <i className="fab fa-github"></i>
        </a>
      </p>
    </div>
  );
}

export default Description;
