import React from "react";
import Header from "../Components/Header";
import SearchComp from "../Components/Search";
import Categories from "../Components/Categories";
import Listings from "../Components/Listings";
import Nav from "../Components/Nav";
import { motion } from "framer-motion";
import SideBar from "../Components/SideBar";

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw" }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative sm:px-8 px-4 pb-40 sm:w-[70%] w-screen bg-gray-900 flex flex-col "
      >
        <Header />
        <SearchComp />
        <Categories />
        <Listings />
      </motion.div>
      <Nav />
      <SideBar />
    </>
  );
}

export default Home;
