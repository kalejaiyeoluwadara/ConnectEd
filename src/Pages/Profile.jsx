import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
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
          Cs Student | GPA 4.6 | Willing to help a student in need
        </p>
        {/* details */}
        <div>
          {/* location */}
          <p>Crystal</p>
          {/* link */}
          <p></p>
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
