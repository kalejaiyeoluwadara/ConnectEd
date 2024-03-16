import React, { useState } from "react";
import { useGlobal } from "../context";
function Categories() {
  const {cats, setCats,active,setActive} = useGlobal();
  
  return (
    <div className="flex sticky top-0  bg-gray-900 z-50 flex-col gap-2 py-4 ">
      <p className="text-[25px] font-[600] ">Categories</p>
      <div className="flex gap-2 sm:gap-8 sb  overflow-x-scroll  mt-1 h-full ">
        {cats.map((cat, id) => {
          return (
            <div
              onClick={() => {
                setActive(cat);
              }}
              className={`px-2 capitalize flex transition-all items-center justify-center cursor-pointer hover:bg-gray-700 hover:rounded-[22px] hover:px-6 hover:font-bold py-2 ${
                cat === active && "bg-blue-500 rounded-[22px] px-6 font-bold "
              }  `}
              key={id}
            >
              <p className="w-full">{cat}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
