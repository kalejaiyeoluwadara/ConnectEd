import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiMenuKebab, CiLocationOn } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { FaW, FaWhatsapp } from "react-icons/fa6";
import face1 from "../assets/images/face2.png";
import { useGlobal } from "../context";
import { LuMail } from "react-icons/lu";
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
          Computer Science enthusiast with a top-notch CGPA of 4.6, ready to
          lend a helping hand to fellow students in need. Let's conquer
          challenges together!
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
            <span className="text-blue-400 flex gap-1">
              <a
                href="https://wa.me/09070934589
"
              >
                <FaWhatsapp size={20} />
              </a>
              <a href="kalejaiyeoluwadara1@gmail.com">
                <LuMail size={20} />
              </a>
            </span>
          </p>
        </div>
      </div>
      {/* Post && Bookmarks */}
      <nav className="flex font-[500] text-[18px] justify-around mt-8 ">
        <p className="border-b-[3px] px-2 transition-all rounded-[5px] border-blue-500 ">
          Posts
        </p>
        <p>Bookmarks</p>
      </nav>
      {/* items */}
      <div></div>
    </div>
  );
}

export default Profile;
