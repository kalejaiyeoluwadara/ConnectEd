import React from "react";
import board1 from "../assets/images/board1.png";
import logo from "../assets/images/logo.png";
import { useGlobal } from "../context";
import { FaArrowRight, FaAngleRight } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
function Board1() {
  const { setPage } = useGlobal();
  return (
    <div className="h-screen w-screen px-8 flex-col bg-black flex items-center justify-between py-20">
      <img className="" src={board1} alt="" />
      <div className="gap-3 flex flex-col w-full items-center justify-center">
        {/* <img className="" src={logo} alt="" /> */}
        <h2 className="text-[50px] leading-[20px] mb-6 font-[700] ">
          ConnectEd
        </h2>
        <p className="text-[20px] ">Where Learners Meet Experts</p>
        <button
          onClick={() => {
            setPage("board2");
          }}
          className="h-[50px] flex items-center justify-center w-[50px] bg-blue-600 rounded-[50%]  "
        >
          <FiChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default Board1;
