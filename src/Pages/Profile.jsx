import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiMenuKebab, CiLocationOn } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { FaW, FaWhatsapp } from "react-icons/fa6";
import face1 from "../assets/images/person.svg";
import { useGlobal } from "../context";
import { LuMail } from "react-icons/lu";
import Nav from "../Components/Nav";
function Profile() {
  const { setPage, userDetails, localData, setImg, img } = useGlobal();
  const photoURL = img.img || face1;
  const [log, setLog] = useState();
  return (
    <div className="min-h-screen w-screen bg-black">
      {/* Banner */}
      <div className="w-full flex relative justify-between items-start px-3 py-1 bg-gray-800 h-[100px] ">
        <BsArrowLeft
          onClick={() => {
            setPage("home");
          }}
          size={30}
        />
        <CiMenuKebab
          onClick={() => {
            setLog(!log);
          }}
          size={25}
        />
        {log && (
          <div
            onClick={() => {
              setPage("board1");
              localStorage.removeItem("isSignedIn");
              localStorage.removeItem("userDetails");
            }}
            className="absolute bottom-4 right-4 bg-black px-4 py-2 rounded-[8px] "
          >
            Log Out
          </div>
        )}
      </div>

      <div className="relative flex flex-col px-3  w-screen ">
        <img
          src={photoURL}
          className="-top-4 border-[3px] border-black h-[50px] w-[50px] rounded-[50%] absolute"
          alt=""
        />
        <button className="border-[2px] hover:border-white hover:font-[600] font-[500] border-gray-700 px-[15px] py-1  absolute right-6 top-3 rounded-[20px] ">
          Edit profile
        </button>
        <p className=" mt-12  text-[20px] font-bold">{img.name}</p>
      </div>
      {/* details/description */}
      <div className="px-4 mt-2">
        {/* desc */}
        <p className="font-[500]">
         Student at Babcock Univesity.
        </p>
        {/* details */}
        <div className="flex w-full mt-4 font-500 text-[16px] justify-start text-gray-300 gap-2 items-center ">
          {/* location */}
          <p className="flex gap-1 items-center justify-center  ">
            {" "}
            <CiLocationOn size={20} />
            Babcok, Ogun
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
              <a href={img.email}>
                <LuMail size={20} />
              </a>
            </span>
          </p>
        </div>
      </div>
      {/* items */}
      <div className="w-full flex items-center justify-center gap-4  my-8 px flex-col">
        <div className="bg-gray-700 relative w-[90%] rounded-[10px] h-[300px] ">
          <img src="" alt="" />
          <section className="px-4 w-full rounded-b-[10px] bg-opacity-30 bg-blue-500 py-3 absolute bottom-0 ">
            <h4 className="font-bold   text-[20px] ">Tochi Idiong</h4>
            <p>Numerical Methods and Analysis</p>
          </section>
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-4  my-8 px flex-col">
        <div className="bg-gray-700 relative w-[90%] rounded-[10px] h-[300px] ">
          <img src="" alt="" />
          <section className="px-4 w-full rounded-b-[10px] bg-opacity-30 bg-blue-500 py-3 absolute bottom-0 ">
            <h4 className="font-bold   text-[20px] ">Tochi Idiong</h4>
            <p>Numerical Methods and Analysis</p>
          </section>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Profile;
