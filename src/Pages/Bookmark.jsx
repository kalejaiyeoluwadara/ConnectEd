import React from "react";
import Nav from "../Components/Nav";
import tochi from "../assets/images/tochi.png";
import { useGlobal } from "../context";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import SearchField from "../Components/SearchField";
function Bookmark() {
  const { setPage, localData } = useGlobal();
  return (
    <div className="min-h-screen relative py-4 px-3 bg-black w-screen overflow-x-hidden  ">
      <h3 className="font-bold  text-[22px]">Your Bookmarks</h3>
      <SearchField />
      <div className="flex flex-col items-center mt-8">
        {/* <div
          onClick={() => {
            // setCourse(d);
            setPage("view");
          }}
          className="h-[300px] rounded-[8px] relative w-[90%] sm:w-[300px] bg-gray-800 py-12  "
        >
          <div className="absolute right-3 top-3  px-3 py-[3px] rounded-[5px]  font-bold ">
            <IoBookmark className="" size={25} />
          </div>
          <div className="flex items-center w-full px-3 justify-center absolute bottom-4 left-3 gap-1 ">
            <img className="h-[50px] w-[50px] " src={tochi} alt="" />
            <section className="px-2">
              <h4 className="font-bold text-[20px] ">Tochi Idiong</h4>
              <p>Numerical Methods and Analysis</p>
            </section>
          </div>
        </div> */}
      </div>

      <Nav />
    </div>
  );
}

export default Bookmark;
