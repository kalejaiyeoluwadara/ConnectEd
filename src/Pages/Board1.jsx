import React, { useEffect } from "react";
import left from "../assets/images/left.svg";
import right from "../assets/images/right.svg";
import { useGlobal } from "../context";
import { FiChevronRight } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";

function Board1() {
  const { setPage } = useGlobal();
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage("board2");
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [setPage]);

  useEffect(() => {
    controls.start({
      x: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 120 },
    });
  }, [controls]);

  return (
    <div
      onClick={() => {
        setPage("board2");
      }}
      className="h-screen w-screen px-8 flex-col bg-black flex items-center justify-center py-20"
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={controls}
        exit={{ x: "-100vw" }}
        className="gap-3 flex flex-col w-full items-center justify-center"
      >
        <div className="flex items-center justify-center gap-4">
          <img src={left} alt="" />
          <h2 className="text-[45px] inter leading-[10px]  font-[800] ">
            ConnectEd
          </h2>
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
      </motion.div>
    </div>
  );
}

export default Board1;
