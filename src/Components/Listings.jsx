import React from "react";
import tochi from "../assets/images/tochi.png";
function Listings() {
  return (
    <div className="w-full flex flex-col gap-4 px-3 items-center justify-center ">
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <div className="h-[300px] rounded-[8px] relative w-[90%] sm:w-[300px] bg-gray-800 py-12  ">
            <div className="flex items-center w-full px-3 justify-center absolute bottom-3 left-3 gap-1 ">
              <img className="h-[50px] w-[50px] " src={tochi} alt="" />
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
