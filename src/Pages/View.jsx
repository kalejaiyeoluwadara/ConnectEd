import React from "react";
import tochi from "../assets/images/tochi.png";
// import
import loc from "../assets/images/loc.png";
function View() {
  return (
    <div className="min-h-screen w-screen bg-black  ">
      {/* First section */}
      <div className="flex w-full relative bg-gray-900 rounded-b-[20px] h-[300px] ">
        <section className="flex justify-between px-4 w-full items-start capitalize py-4">
          <p>back</p>
          <p>bookmark</p>
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
      <div></div>
    </div>
  );
}

export default View;
