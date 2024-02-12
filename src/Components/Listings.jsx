import React from "react";
import tochi from "../assets/images/tochi.png";
import { useGlobal } from "../context";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
function Listings() {
  const { course, setCourse, setView, setPage } = useGlobal();
  return (
    <div className="w-full cursor-pointer flex flex-col gap-4 items-center justify-center ">
      {[1, 2, 3, 4, 5].map((d) => {
        return (
          <div
            onClick={() => {
              // setCourse(d);
              setPage("view");
            }}
            className="h-[300px] rounded-[8px] relative w-[90%] sm:w-[300px] bg-gray-800 py-12  "
          >
            {d == 2 && (
              <div className="absolute left-3 top-3 bg-white px-3 py-[3px] rounded-[5px] text-black font-bold ">
                Free
              </div>
            )}
            <div className="absolute right-3 top-3  px-3 py-[3px] rounded-[5px]  font-bold ">
              <CiBookmark size={25} />
            </div>
            <div className="flex items-center bg-blue-400 bg-opacity-40 w-full px-2 justify-start absolute bottom-0 rounded-b-[8px] left-0 py-4 gap-1 ">
              {/* <img className="h-[50px] w-[50px] " src={tochi} alt="" /> */}
              <section className="px-2">
                <h4 className="font-bold text-[20px] ">Tochi Idiong</h4>
                <p>Numerical Methods and Analysis</p>
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Listings;
