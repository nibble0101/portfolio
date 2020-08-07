import React from "react";

function CopyRight(props) {
  const year = new Date().getFullYear();
  return (
    <p className="copy-right">
      {year > 2020 ? `2020 - ${year}` : 2020}
      <span className="copy-right-symbol"> &#169;</span> Joseph Mawa
    </p>
  );
}

export default CopyRight;
