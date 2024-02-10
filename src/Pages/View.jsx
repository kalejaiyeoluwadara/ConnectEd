import React from "react";
import tochi from "../assets/images/tochi.png";
// import
function View() {
  return (
    <div className="min-h-screen w-screen bg-black  ">
      {/* First section */}
      <div className="flex w-full relative bg-gray-800 h-[300px] ">
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
      <div></div>
    </div>
  );
}

export default View;
