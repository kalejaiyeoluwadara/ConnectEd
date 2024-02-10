import React, { useState } from "react";
import { BsHouse, BsSearch, BsBell, BsPlus } from "react-icons/bs";
import face1 from "../assets/images/face2.png";
import { useGlobal } from "../context";
function Nav() {
  const { setPage } = useGlobal();
  return (
    <footer className="w-screen cursor-pointer flex  items-center px-4 justify-between bg-gray-800 z-50 fixed bottom-0 h-[75px] rounded-t-[20px] left-0">
      <div
        onClick={() => {
          setPage("home");
        }}
      >
        <BsHouse size={25} />
      </div>
      <div>
        <BsSearch size={25} />
      </div>
      <div className="h-[60px] w-[60px] flex items-center justify-center bg-blue-600 rounded-[50%] ">
        <BsPlus size={45} />
      </div>
      <div>
        <BsBell size={25} />
      </div>
      <div
        onClick={() => {
          setPage("profile");
        }}
      >
        <img className="h-[40px] w-[40px] " src={face1} alt="" />
      </div>
    </footer>
  );
}

export default Nav;
