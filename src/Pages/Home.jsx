import React from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Categories from "../Components/Categories";

function Home() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col ">
      <Header />
      <Search />
      <Categories />
    </div>
  );
}

export default Home;
