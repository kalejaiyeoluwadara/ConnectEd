import React from "react";
import tochi from "../assets/images/tochi.png";
// import
import { FiChevronLeft } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import loc from "../assets/images/loc.png";
// import Home from "../Pages/Home";
import mark from "../assets/images/mark.png";
import { useGlobal } from "../context";
function View() {
  const { setPage } = useGlobal();
  return (
    <div className="min-h-screen pb-20 w-screen bg-black  ">
      {/* First section */}
      <div className="flex w-full relative bg-gray-900 rounded-b-[20px] h-[300px] ">
        <section className="flex justify-between px-4 w-full items-start capitalize py-4">
          <FiChevronLeft
            className="cursor-pointer"
            onClick={() => {
              setPage("home");
            }}
            size={28}
          />
          <CiBookmark size={25} />
        </section>

        <section>
          <div className="flex items-center w-full px-3 justify-center absolute bottom-4 left-3 gap-1 ">
            <img className="h-[40px] w-[40px] " src={tochi} alt="" />
            <section className="px-2">
              <h4 className="font-bold text-[18px] ">Tochi Idiong</h4>
              <p>Numerical Methods and Analysis</p>
            </section>
          </div>
        </section>
      </div>
      {/* Second section */}
      <div className="mt-4 px-8 font-medium ">
        <div className="flex justify-between items-center">
          <section className="flex gap-1">
            <img src={loc} alt="" />
            <p>Crystal</p>
          </section>
          <button className="text-white px-4 py-1 bg-blue-600 font-[600] rounded-[8px] ">
            Paid
          </button>
        </div>
        <div>
          <h3 className="text-[22px] text-start  font-[600] mt-4 ">
            Course Description
          </h3>
          <p className=" text-start tracking-wide text-[17px]  ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            deleniti soluta quod eveniet dolores, aspernatur minima est eligendi
            veniam libero voluptas unde tenetur a repellat debitis aperiam
            quibusdam incidunt necessitatibus.
          </p>
        </div>
      </div>
      {/* Third Section */}
      <div className="px-8 mt-4 font-[600] text-[20px]  ">
        <h2 className="text-center mb-3 ">Related Courses</h2>
        <div className="grid  grid-cols-1 items-center justify-center gap-3 ">
          {[1, 2, 3, 4, 5].map((d) => {
            return (
              <div
                onClick={() => {
                  // setCourse(d);
                  setPage("view");
                }}
                className="h-auto rounded-[8px] relative w-[90%] sm:w-[300px] bg-gray-800 py-4  "
              >
                {/* {d == 2 && (
                  <div className="absolute right-3 top-3 bg-white px-3 py-[3px] rounede-[5px] text-black font-bold ">
                    Free
                  </div>
                )} */}
                <div className="flex items-center w-full  justify-center left-3 gap-1 ">
                  <img className="h-[50px] w-[50px] " src={tochi} alt="" />
                  <section className="px-2">
                    <h4 className="font-[600] text-[19px] ">Tochi Idiong</h4>
                    <p className="font-[400] text-[15px] ">Maths 203</p>
                  </section>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default View;
