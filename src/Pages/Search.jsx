import React from "react";
import SearchComp from "../Components/Search";
import Nav from "../Components/Nav";
function Search() {
  return (
    <div className="min-h-screen px-6 py-3 w-screen bg-black ">
      {/* <h1 className="font-[600] text-[22px] ">Search</h1> */}
      <SearchComp />
      <Nav />
    </div>
  );
}

export default Search;
