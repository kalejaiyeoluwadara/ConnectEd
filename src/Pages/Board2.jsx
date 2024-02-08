import React from "react";
import board2 from "../assets/images/board2.png";
import logo from "../assets/images/logo.png";
import { useGlobal } from "../context";
function Board2() {
  const { setPage } = useGlobal();
  return (
    <div className="h-screen w-screen px-8 flex-col bg-black flex items-center justify-between pt-6 pb-12">
      <img className="" src={board2} alt="" />
      <div className="gap-3 flex flex-col w-full items-start justify-center">
        <h2 className="text-[35px] font-[600]">
          Buy what you need, sell what you don't
        </h2>
        <p className="text-[18px] text-start ">
          Discover a wide range of options and easily barter your unwanted
          items.
        </p>
        <div className="w-full mt-2 flex items-center justify-center">
          <button
            onClick={() => {
              setPage("signup");
            }}
            className="px-8 text-[18px] font-[500] py-3 bg-blue-600 rounded-[5px]  "
          >
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board2;
