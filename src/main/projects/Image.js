import React from "react";

function Image(props) {
  return (
    <div className="image-wrapper">
      <a href={props.projectUrl} target="_blank" rel="noreferrer noopener">
        {" "}
        <img src={props.imageUrl} alt={props.altText} />{" "}
      </a>
    </div>
  );
}

export default Image;
