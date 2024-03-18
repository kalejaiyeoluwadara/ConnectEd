import React, { useState } from "react";
import { BsHouse, BsHouseFill, BsSearch, BsBell, BsPlus } from "react-icons/bs";
import face1 from "../assets/images/person.svg";
import { CiBookmark } from "react-icons/ci";
import { useGlobal } from "../context";
import { LiaTimesSolid } from "react-icons/lia";
import { FaCaretDown, FaBell } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { motion } from "framer-motion";
// FIXME: add message functionality fix create button to be on home screen then create should be a button that displays other options for appeal for course and create a course button
function Nav() {
  const {
    setPage,page,
    home,
    bookmark,
    uploadPage,
    notifications,
    userDetails,
    localData,
    setImg,
    img,counts,setCounts
  } = useGlobal();
  const photoURL = img.img || face1;
  return (
    <footer className="w-screen cursor-pointer flex  items-center px-4 justify-between bg-gray-800 sm:bg-gray-900 sm:border-gray-100 sm:border-opacity-[0.1] sm:border-[1px] z-50 fixed sm:top-0 sm:left-0 sm:h-screen sm:flex-col sm:py-6 sm:rounded-none rounded-r-none sm:w-[9%] bottom-0 h-[75px] rounded-t-[20px] left-0">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setPage("home");
        }}
      >
        {home ? <BsHouseFill size={25} /> : <BsHouse size={25} />}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setPage("bookmark");
        }}
      >
        {bookmark ? <IoBookmark size={25} /> : <CiBookmark size={25} />}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setPage("upload");
        }}
        className="h-[60px] w-[60px] flex items-center justify-center bg-blue-500 rounded-[50%] "
      >
        {uploadPage ? <LiaTimesSolid size={35} /> : <BsPlus size={45} />}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
        onClick={() => {
          setCounts(0);
          setPage("notifications");
        }}
      >
        {notifications ? <FaBell size={25} /> : <BsBell size={25} />}
        {counts != 0 && (
          <span className="h-[20px] absolute -top-2 -right-[8px] w-[20px] flex items-center justify-center bg-red-600 rounded-[50%]  ">
            {counts}
          </span>
        )}
      </motion.div>
      <motion.div
        onClick={() => {
          setPage("profile");
        }}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="h-[40px] rounded-[50%] w-[40px] "
          src={photoURL}
          alt=""
        />
      </motion.div>
    </footer>
  );
}

export default Nav;
