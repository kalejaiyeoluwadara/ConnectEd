import React from "react";
import left from "../assets/images/left.svg";
import right from "../assets/images/right.svg";
function Logo() {
  return (
    <div className="flex items-center justify-center gap-4">
      <img src={left} className="h-[25px]  " alt="" />
      <h2 className="text-[30px] font-[600] ">ConnectEd</h2>
      <img src={right} className="h-[25px]  " alt="" />
    </div>
  );
}

export default Logo;
