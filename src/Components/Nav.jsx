import React, { useState } from "react";
import { BsHouse, BsHouseFill, BsSearch, BsBell, BsPlus } from "react-icons/bs";
import face1 from "../assets/images/person.svg";
import { CiBookmark } from "react-icons/ci";
import { useGlobal } from "../context";
import { LiaTimesSolid } from "react-icons/lia";
import { FaCaretDown, FaBell } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";

function Nav() {
  const {
    setPage,
    home,
    bookmark,
    uploadPage,
    notifications,
    userDetails,
    localData,
    setImg,
    img,
  } = useGlobal();
  const photoURL = img.img || face1;
  return (
    <footer className="w-screen cursor-pointer flex  items-center px-4 justify-between bg-gray-800 z-50 fixed bottom-0 h-[75px] rounded-t-[20px] left-0">
      <div
        onClick={() => {
          setPage("home");
        }}
      >
        {home ? <BsHouseFill size={25} /> : <BsHouse size={25} />}
      </div>
      <div
        onClick={() => {
          setPage("bookmark");
        }}
      >
        {bookmark ? <IoBookmark size={25} /> : <CiBookmark size={25} />}
      </div>
      <div
        onClick={() => {
          setPage("upload");
        }}
        className="h-[60px] w-[60px] flex items-center justify-center bg-blue-600 rounded-[50%] "
      >
        {uploadPage ? <LiaTimesSolid size={35} /> : <BsPlus size={45} />}
      </div>
      <div
        onClick={() => {
          setPage("notifications");
        }}
      >
        {notifications ? <FaBell size={25} /> : <BsBell size={25} />}
      </div>
      <div
        onClick={() => {
          setPage("profile");
        }}
      >
        <img
          className="h-[40px] rounded-[50%] w-[40px] "
          src={photoURL}
          alt=""
        />
      </div>
    </footer>
  );
}

export default Nav;
