import React, { useState } from "react";

function Button(props) {
  const [didClick, setDidClick] = useState(false);

  function handleClick() {
    setDidClick(true);
  }

  let className = "button";
  if (didClick) {
    className += " red";
  }

  return (
    <button className={className} onClick={handleClick}>
      {props.label}
    </button>
  )
}

export default Button;