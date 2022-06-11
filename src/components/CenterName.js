import React from "react";
import '../styles/CenterName.css';

const CenterName = () => {

  const handleClick = () => {
    document.getElementsByClassName("circle")[0].classList.toggle("circle2");
  }

  const handleMouseDown = () => {
    document.getElementsByClassName("circle")[0].classList.toggle("circle3");

  }

  const handleMouseUp = () => {
    document.getElementsByClassName("circle")[0].classList.toggle("circle3");
  }

  return (
    <div className="name" >
      <h1 onClick={handleClick}>trung thuc</h1>
      <div className="circle" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}></div>
    </div>
  );
}

export default CenterName;