import React from "react";
import board1 from "../assets/images/board1.png";
import logo from "../assets/images/logo.png";
function Board1() {
  return (
    <div className="h-screen w-screen px-8 flex-col bg-black flex items-center justify-between py-20">
      <img className="" src={board1} alt="" />
      <div className="gap-3 flex flex-col w-full items-center justify-center">
        <img className="" src={logo} alt="" />
        <p className="text-[20px]  ">Trading made better</p>
        <button className="h-[50px] w-[50px] bg-blue-600 rounded-[50%]  ">
          L
        </button>
      </div>
    </div>
  );
}

export default Board1;
