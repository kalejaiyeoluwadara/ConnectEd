import React from "react";
import board1 from "../assets/images/board1.png";
import left from "../assets/images/left.svg";
import right from "../assets/images/right.svg";
import { useGlobal } from "../context";
import { FaArrowRight, FaAngleRight } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
function Board1() {
  const { setPage } = useGlobal();
  return (
    <div
      onClick={() => {
        setPage("board2");
      }}
      className="h-screen w-screen px-8 flex-col bg-black flex items-center justify-center py-20"
    >
      <div className="gap-3 flex flex-col w-full items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          <img src={left} alt="" />
          <h2 className="text-[45px] leading-[10px]  font-[800] ">ConnectEd</h2>
          <img src={right} alt="" />
        </div>
        <p className="text-[14px] text-center  ">
          Empowering learning One connection at a time
        </p>
        {/* <button
          onClick={() => {
            setPage("board2");
          }}
          className="h-[50px] flex items-center justify-center w-[50px] bg-blue-600 rounded-[50%]  "
        >
          <FiChevronRight size={30} />
        </button> */}
      </div>
    </div>
  );
}

export default Board1;
