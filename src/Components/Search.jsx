import React from "react";
import add from "../assets/images/add.png";
import { BsSearch } from "react-icons/bs";
function Search() {
  return (
    <div className="w-full flex justify-between items-center px-8 py-2 ">
      <div className="bg-gray-700 text-white px-2 flex gap-2 items-center h-[50px] w-[80%] sm:w-[300px] rounded-[8px] ">
        <BsSearch size={20} />
        <input
          className="w-[80%] h-full outline-none  bg-transparent"
          placeholder="search"
          type="text"
          name=""
          id=""
        />
      </div>
      <img src={add} alt="" />
    </div>
  );
}

export default Search;
