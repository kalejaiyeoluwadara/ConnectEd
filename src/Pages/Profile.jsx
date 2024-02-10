import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiMenuKebab, CiLocationOn } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import face1 from "../assets/images/face2.png";
import { useGlobal } from "../context";
function Profile() {
  const { setPage } = useGlobal();
  return (
    <div className="h-screen w-screen bg-black">
      {/* Banner */}
      <div className="w-full flex justify-between items-start px-3 py-1 bg-gray-800 h-[100px] ">
        <BsArrowLeft
          onClick={() => {
            setPage("home");
          }}
          size={30}
        />
        <CiMenuKebab size={25} />
      </div>

      <div className="relative flex flex-col px-3  w-screen ">
        <img src={face1} className="-top-4 absolute" alt="" />
        <button className="border-[2px] font-[500] border-gray-700 px-[15px] py-1  absolute right-6 top-3 rounded-[20px] ">
          Edit profile
        </button>
        <p className=" mt-12  text-[25px] font-bold">Tise</p>
      </div>
      {/* details/description */}
      <div className="px-4 mt-2">
        {/* desc */}
        <p className="font-[500]">
          Cs Student | CGPA-4.6 | Willing to help students in need.
        </p>
        {/* details */}
        <div className="flex w-full mt-4 font-500 text-[16px] justify-start text-gray-300 gap-2 items-center ">
          {/* location */}
          <p className="flex gap-1 items-center   ">
            {" "}
            <CiLocationOn />
            Crystal
          </p>
          {/* link */}
          <p className="flex items-center  gap-1">
            {" "}
            <IoMdLink size={21} />{" "}
            <span className="text-blue-400">link-social.net</span>
          </p>
        </div>
      </div>
      {/* Post && Bookmarks */}
      <nav></nav>
      {/* items */}
      <div></div>
    </div>
  );
}

export default Profile;
