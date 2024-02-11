import React from "react";
import add from "../assets/images/face2.png";
import { BsSearch } from "react-icons/bs";
import { useGlobal } from "../context";
function SearchField() {
  const { setPage } = useGlobal();
  return (
    <div className="w-screen absolute top-0 px-2 py-2 left-0 flex justify-between items-center   ">
      <div className="bg-gray-800 text-white px-4 flex gap-2 items-center h-[50px] w-[100%] sm:w-[300px] rounded-[20px] ">
        <BsSearch size={20} />
        <input
          className="w-[80%] h-full outline-none  bg-transparent"
          placeholder="search bookmarks"
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default SearchField;
