import React from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Categories from "../Components/Categories";
import Listings from "../Components/Listings";

function Home() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col ">
      <Header />
      <Search />
      <Categories />
      <Listings />
    </div>
  );
}

export default Home;
