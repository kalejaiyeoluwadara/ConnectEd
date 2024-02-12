import React, { useState } from "react";
import tochi from "../assets/images/tochi.png";
// import
import { FiChevronLeft } from "react-icons/fi";
import { CiMenuKebab, CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import loc from "../assets/images/loc.png";
// import Home from "../Pages/Home";
import { useGlobal } from "../context";
function View() {
  const { setPage } = useGlobal();
  const [reviews, setReview] = useState([
    "Tochi definitely has to be the best tutor for NMA, she makes it look as easy as ABC",
    "I am so grateful for Tochi's help with NMA, she explains everything thoroughly and patiently!",
    "Tochi is incredibly knowledgeable and supportive, I highly recommend her for NMA tutoring.",
    "Thanks to Tochi, I feel much more confident about tackling NMA. She is fantastic!",
  ]);
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

        <section className="">
          <div className="flex items-center w-full px-3 justify-start absolute bottom-4 left-3 gap-1 ">
            <img className="h-[40px] w-[40px] " src={tochi} alt="" />
            <section className="px-2">
              <h4 className="font-bold text-[18px] ">Tochi Idiong</h4>
              <p>Numerical Methods and Analysis</p>
            </section>
          </div>
        </section>
      </div>
      {/* Second section */}
      <div className="mt-4  font-medium ">
        <div className="flex px-4 justify-between items-center">
          <section className="flex items-center gap-1">
            <CiLocationOn size={30} />
            <p>Crystal</p>
          </section>
          <button className="text-white px-4 py-1 bg-blue-600 font-[600] rounded-[8px] ">
            Paid
          </button>
        </div>
        {/* Description */}
        <div className=" h-auto w-[90%] px-4 py-3  mt-4 rounded-[8px] ">
          <h3 className="text-[22px] text-start  font-[600] ">
            Tutor Description
          </h3>
          <p className=" text-start w-full font-[400] text-[16px]  ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            deleniti soluta quod eveniet dolores, aspernatur minima est eligendi
            veniam libero voluptas.
          </p>
          {/* Category */}
          <div className="flex items-start justify-start">
            <p className="border border-gray-600 rounded-[8px] font-[400] py-1 mt-2 px-4 ">
              COSC
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-4 flex flex-col px-6 ">
        <h3 className="text-[22px] text-start  font-[600] ">Reviews</h3>
        <div className="flex flex-col mt-[20px] gap-4">
          {reviews.map((review, id) => {
            return (
              <div>
                <section className="flex justify-between">
                  <div className="flex gap-3 font-[500] items-center capitalize">
                    <img src={tochi} alt="" />
                    <p className="text-[17px]">name</p>
                  </div>
                  <div>
                    <CiMenuKebab size={18} />
                  </div>
                </section>
                <section>
                  {/* Rating  */}
                  <div></div>
                </section>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  necessitatibus.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Fourth Section */}
      <div className="px-8 mt-8 font-[600] text-[20px]  ">
        <h2 className="text-center mb-3 ">Related Courses</h2>
        <div className="grid  grid-cols-1 items-center justify-center gap-3 ">
          {[1, 2, 3].map((d) => {
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
                <div className="flex items-center w-full px-4  justify-start left-3 gap-1 ">
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
