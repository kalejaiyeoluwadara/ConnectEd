import React from "react";
import board1 from "../assets/images/board1.png";
import logo from "../assets/images/logo.png";
function Board1() {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-between py-20">
      <img className="" src={board1} alt="" />
      <div>
        <img className="" src={logo} alt="" />
        <p>Trading made better</p>
      </div>
    </div>
  );
}

export default Board1;
