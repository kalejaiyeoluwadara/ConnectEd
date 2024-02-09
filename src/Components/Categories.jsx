import React, { useState } from "react";

function Categories() {
  const [cats, setCats] = useState([
    "All",
    "Accessories",
    "Books",
    "Tickets",
    "Shoes",
    "Shirts",
    "Fun",
  ]);
  const [active, setActive] = useState("All");
  return (
    <div className="flex flex-col gap-2 px-8 py-4 ">
      <p className="text-[25px] font-[600] ">Categories</p>
      <div className="flex gap-2  sb overflow-x-scroll  mt-1 h-full ">
        {cats.map((cat, id) => {
          return (
            <div
              onClick={() => {
                setActive(cat);
              }}
              className={`px-2 transition-all cursor-pointer hover:bg-gray-700 hover:rounded-[22px] hover:px-6 hover:font-bold py-2 ${
                cat === active && "bg-blue-600 rounded-[22px] px-6 font-bold "
              }  `}
              key={id}
            >
              {cat}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
