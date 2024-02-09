import React from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";

function Home() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col ">
      <Header />
      <Search />
    </div>
  );
}

export default Home;
