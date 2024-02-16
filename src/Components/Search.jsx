import React from "react";
import add from "../assets/images/add.png";
import { BsSearch } from "react-icons/bs";
import { useGlobal } from "../context";
function SearchComp() {
  const { setPage } = useGlobal();
  return (
    <div className="w-full  flex sm:justify-center items-center  py-2 ">
      <div
        onClick={() => {
          setPage("search");
        }}
        className="bg-gray-700 text-white px-4 flex flex-row-reverse gap-2 items-center h-[50px] w-[100%] sm:w-[500px] rounded-[8px] "
      >
        <BsSearch size={25} />
        <input
          className="w-[100%] h-full outline-none  bg-transparent"
          placeholder="search"
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default SearchComp;
