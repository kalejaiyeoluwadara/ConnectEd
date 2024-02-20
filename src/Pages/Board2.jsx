import React from "react";
import board2 from "../assets/images/cuate.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useGlobal } from "../context";
import left from "../assets/images/left.svg";
import right from "../assets/images/right.svg";
function Board2() {
  const { setPage } = useGlobal();
  return (
    <div className="min-h-screen relative w-screen px-8 flex-col bg-black flex items-center  pt-6 pb-12">
      <div className="flex items-center justify-center gap-4">
        <img src={left} className="h-[25px]  " alt="" />
        <h2 className="text-[30px] font-[600] ">ConnectEd</h2>
        <img src={right} className="h-[25px]  " alt="" />
      </div>
      <div className="flec items-center mt-8 justify-center">
        <img className="" src={board2} alt="" />
      </div>

      <div className="bg-white px-6 pt-7 font-[500] text-[18px] absolute rounded-t-[40px] h-[270px] w-full left-0 -bottom-3 ">
        <p className="text-black">
          Where Learners meet experts, connect, learn and grow together. Join a
          vibrant community where knowledge is shared, skills are honed,and
          aspirations are realised. Your pathway to success starts here.
        </p>
        <button
          onClick={() => {
            setPage("signup");
          }}
          className="bg-blue-500 mt-4 font-[600] text-[20pz] w-full py-3 rounded-[8px] px-4 "
        >
          Explore
        </button>
      </div>
    </div>
  );
}

export default Board2;
