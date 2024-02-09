import React from "react";
import tochi from "../assets/images/tochi.png";
function Listings() {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="h-[300px] rounded-[8px] relative w-[90%] sm:w-[300px] bg-gray-800 py-12  ">
        <div className="flex items-center w-full px-3 justify-center absolute bottom-3 left-3 gap-3 ">
          <img src={tochi} alt="" />
          <section>
            <h4 className="font-bold text-[20px] ">Tochi Idiong</h4>
            <p>Numerical Methods and Analysis</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Listings;
