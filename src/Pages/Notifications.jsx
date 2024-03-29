 import React from "react";
import Nav from "../Components/Nav";
import { useGlobal } from "../context";
import { motion } from "framer-motion";

function Notifications() {
  const {localData} = useGlobal()
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw" }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-4 px-4 bg-gray-900 w-screen  "
      >
        <h3 className="font-bold text-[22px]">Notifications</h3>

        {/* Notifications */}
        <section className="flex mt-4 flex-col gap-4 ">
          <div className="flex sm:items-start sm:justify-start items-center bg-gray-800 rounded-[8px] px-4 py-3 justify-center  sm:w-[70%] gap-4  ">
            <section className="">
              <img
                className="h-[60px] object-cover w-[60px] rounded-[50%] shadow-sm "
                src={localData.img}
                alt=""
              />
            </section>
            <section className="flex   flex-col">
              <span className="text-gray-300">Welcome Note</span>
              <p className="   text-[18px]">
                Welcome to ConnectEd {localData.name}
              </p>
            </section>
          </div>
        </section>
      </motion.div>
        <Nav />
    </>
  );
}

export default Notifications;
