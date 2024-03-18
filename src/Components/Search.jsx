import React from "react";
import add from "../assets/images/add.png";
import { BsSearch } from "react-icons/bs";
import { useGlobal } from "../context";
function SearchComp() {
  const { setPage, searchTerm, setSearchterm } = useGlobal();
  return (
    <div className="w-full sm:hidden flex sm:justify-start  items-center  py-2 ">
      <div className="flex items-center justify-center w-screen sm:block ">
        <div
          // onClick={() => {
          //   setPage("search");
          // }}
          className="bg-gray-700 text-white px-4 flex flex-row-reverse gap-2 items-center h-[45px] w-[80%] place-self-center sm:w-[400px] rounded-[22px] "
        >
          <BsSearch size={25} />
          <input
            className="w-[100%] h-full outline-none  bg-transparent"
            placeholder="search course title"
            onChange={(e) => {
              setSearchterm(e.target.value);
            }}
            value={searchTerm}
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
}

export default SearchComp;
