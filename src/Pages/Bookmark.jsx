import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import tochi from "../assets/images/tochi.png";
import { useGlobal } from "../context";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import SearchField from "../Components/SearchField";
import { motion } from "framer-motion";
import { BsTrash3 } from "react-icons/bs";
function Bookmark() {
  const { setPage, localData,setDetails } = useGlobal();
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
    // console.log(bookmarks);
  }, []);
   const handleDeleteBookmark = (index) => {
     const updatedBookmarks = [...bookmarks];
     updatedBookmarks.splice(index, 1);
     setBookmarks(updatedBookmarks);
     localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
   };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw" }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative py-4 pb-20 px-3 bg-gray-900 w-screen overflow-x-hidden  "
      >
        <h3 className="font-bold  text-[22px]">Your Bookmarks</h3>
        {/* <SearchField /> */}
        <div className="flex flex-col items-center mt-10 gap-6 ">
          {bookmarks.length === 0 ? (
            <div className="">
              <p>No Bookmarks yet</p>
            </div>
          ) : (
            bookmarks.map((bookmark, index) => (
              <div
                key={index}
                onClick={() => {
                  // setCourse(d);
                  setPage("view");
                  setDetails(bookmark);
                }}
                className="h-[300px] text-white  rounded-[8px] relative w-[90%] sm:w-[300px] bg-gray-800 py-12  "
              >
                <img
                  src={bookmark.image}
                  className="absolute top-0 left-0 h-full w-full"
                  alt=""
                />
                <div className="absolute right-3 top-3  px-3 py-[3px] rounded-[5px]  font-bold ">
                  <IoBookmark className="" size={25} />
                </div>
                <div
                  onClick={handleDeleteBookmark}
                  className="absolute left-3 top-3  px-3 py-[3px] rounded-[5px]  font-bold "
                >
                  <BsTrash3 className="shadow-md" size={25} />
                </div>
                <div className="flex items-center card  w-full px-2 justify-start absolute bottom-0  left-0 py-4 gap-1">
                  <img
                    className="h-[40px] w-[40px] rounded-[50%] "
                    src={bookmark.profileImage}
                    alt=""
                  />
                  <section className="px-2">
                    <h4 className="font-bold text-[20px] ">
                      {bookmark.author}
                    </h4>
                    <p>{bookmark.title}</p>
                  </section>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
      <Nav />
    </>
  );
}

export default Bookmark;
