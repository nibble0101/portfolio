import React from "react";

function Image(props) {
  return (
    <div className="image-wrapper">
      <img src={props.projectUrl} alt={props.altText} />
    </div>
  );
};

export default Image;
