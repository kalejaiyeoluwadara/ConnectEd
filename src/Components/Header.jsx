import React from "react";
import { BsBellFill } from "react-icons/bs";
import face1 from "../assets/images/face2.png";
function Header() {
  return (
    <div className="w-full flex px-6 py-4 justify-between items-center">
      <section className="flex gap-2">
        <img src={face1} className="" alt="" />
        <div className="flex flex-col">
          <h4 className="font-bold text-[18px] ">Welcome, Tise</h4>
          <p className="text-[13px] font-[500] opacity-[0.7] ">Babcock, Ogun</p>
        </div>
      </section>
      <section>
        <BsBellFill size={25} />
      </section>
    </div>
  );
}

export default Header;
