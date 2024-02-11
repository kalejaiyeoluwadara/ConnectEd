import React from "react";
import Header from "../Components/Header";
import SearchComp from "../Components/Search";
import Categories from "../Components/Categories";
import Listings from "../Components/Listings";
import Nav from "../Components/Nav";

function Home() {
  return (
    <div className="min-h-screen relative px-4 pb-10 w-screen bg-black flex flex-col ">
      <Header />
      <SearchComp />
      <Categories />
      <Listings />
      <Nav />
    </div>
  );
}

export default Home;
