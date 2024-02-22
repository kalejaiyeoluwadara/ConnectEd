import React, { useState, useEffect } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { BsSendFill } from "react-icons/bs";
import { IoBookmark } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { CiBookmark, CiMenuKebab, CiLocationOn } from "react-icons/ci";
import {
  setDoc,
  doc,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot, // Add onSnapshot
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useGlobal } from "../context";
import { PiPlugsConnectedThin } from "react-icons/pi";
import { motion } from "framer-motion"; // Import Framer Motion

const ReviewItem = ({ rev }) => {
  const [rep, setRep] = useState(false);

  return (
    <motion.div
    initial={{
      y:'100px'
    }}
    transition={{
      duration:0.6
    }}
    whileInView={{
      y:0
    }}
     className="w-[95%] sm:w-[40%] rounded-[12px] px-5 py-2 gap-2 flex flex-col">
      <section className="flex justify-between w-full items-center">
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-1 justify-center items-center">
            <img
              className="h-[40px] w-[40px] rounded-[50%]"
              src={rev.img}
              alt=""
            />
            <p className="font-[500] text-start text-[15px]">{rev.name}</p>
          </div>
          <div className="relative">
            {/* Kebbab */}
            <CiMenuKebab onClick={() =>{
              setRep(!rep)
            }} size={20} />
            {rep && (
              <p onClick={()=>{
                setRep(false)
              }} className="bg-gray-800 px-4 py-2 rounded-[8px] absolute right-6 top-2">
                Report
              </p>
            )}
          </div>
        </div>
        <div className="flex">
        
        </div>
      </section>
      <p className="text-start pl-6 text-[16px] text-gray-300">{rev.review}</p>
    </motion.div>
  );
};


function View() {
  const {
    setPage,
    details,
    setDetails,
    img,
    connect,
    localData,
    setConnect,
    temp,
    setTemp,
  } = useGlobal();
  const [reviewsList, setReviewsList] = useState([]);
  const [review, setReview] = useState("");
  const [loadingReview, setLoadingReview] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [booked,setBooked] = useState(false)
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const handleBookmarkClick = () => {
    const existingBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    const isAlreadyBookmarked = existingBookmarks.some(
      (bookmark) => bookmark.title === details.title
    );

    if (!isAlreadyBookmarked) {
      const updatedBookmarks = [...existingBookmarks, details];
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    } else {
      console.log("This item is already bookmarked.");
    }

    // Update the state immediately after the click
    setBooked(!isAlreadyBookmarked);
  };

 const handleReviews = async () => {
   try {
     if (!review.trim()) {
       // If review is empty or contains only whitespace
       console.log("Review is empty");
       return; // Do not proceed further
     }

     const newReview = {
       review: review,
       time:'',
       msg: details.description,
       name: localData.name,
       img: localData.img,
     };

     await addDoc(collection(db, "reviews"), newReview);

     setReview("");
   } catch (error) {
     console.error("Error adding review:", error.message);
   }
 };


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const q = query(
          collection(db, "reviews"),
          where("msg", "==", details.description)
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const reviews = [];
          snapshot.forEach((doc) => {
            reviews.push(doc.data());
          });
          setReviewsList(reviews);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
      }
    };

    fetchReviews();
  }, [details.description]); // Dependency array corrected



  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100vw" }}
      transition={{ duration: 0.5 }}
      className="min-h-screen sm:absolute right-0 left-0 pb-20 w-screen bg-gray-900  "
    >
      {/* First section */}
      <div className="flex w-full relative bg-gray-900 rounded-b-[20px] h-[300px] ">
        <section className="flex justify-between px-4 w-full items-start capitalize py-2">
          <div className=" h-[40px] bg-opacity-[0.5] w-[40px] z-40 flex items-center justify-center rounded-[50%] shadow-md bg-gray-400 ">
            <FiChevronLeft
              className="cursor-pointer text-white "
              onClick={() => {
                setPage("home");
              }}
              size={28}
            />
          </div>
          <div
            onClick={handleBookmarkClick}
            className=" h-[40px] bg-opacity-[0.5] w-[40px] z-40 flex items-center justify-center rounded-[50%] sm:mr-4 shadow-md bg-gray-400 "
          >
            {booked ? (
              <IoBookmark className="z-40" size={25} />
            ) : (
              <CiBookmark size={25} />
            )}
          </div>
          <img
            className="absolute sm:object-cover top-0 left-0 w-full h-full "
            src={details.image}
            alt=""
          />
        </section>

        <section className=" ">
          <div className="flex rounded-t-[8px] items-center w-full px-4 justify-start absolute bottom-0 py-3 card left-0 gap-1 ">
            <img
              className="h-[40px] rounded-[50%] w-[40px] "
              src={details.profileImage}
              alt=""
            />
            <section className="px-2">
              <h4 className="font-bold text-[18px] ">{details.author}</h4>
              <p>{details.title}</p>
            </section>
          </div>
        </section>
      </div>
      {/* Second section */}
      <div className="mt-4 sm:px-4 font-medium ">
        <div className="flex px-4 justify-between items-center">
          <div className="flex flex-col items-start gap-2">
            <button className="text-white mt-2 px-4 py-1 bg-black border border-gray-400 font-[600] rounded-[8px] ">
              {details.isFree ? "Free" : "Paid"}
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setPage("connect");
              setTemp(details.id);
            }}
            className="text-white flex gap-2 px-4 py-1 bg-blue-600 font-[600] itens-center justify-center rounded-[8px] "
          >
            <PiPlugsConnectedThin size={20} />
            <span>Connect</span>
          </motion.button>
        </div>
        {/* Description */}
        <div className=" h-auto w-[90%] px-4 py-3  mt-4 rounded-[8px] ">
          <h3 className="text-[22px] text-start  font-[600] ">
            Tutor Description
          </h3>
          <motion.p
            layout
            className="text-start w-full sm:w-[500px]  font-[400] text-[16px] "
          >
            {isExpanded
              ? details.description
              : details.description.slice(0, 50)}
            {details.description.length > 50 && !isExpanded && (
              <span
                onClick={toggleDescription}
                className=" text-white font-bold cursor-pointer"
              >
                ...More
              </span>
            )}
            {isExpanded && (
              <span
                onClick={toggleDescription}
                className="text-white font-bold cursor-pointer"
              >
                {" "}
                Show Less
              </span>
            )}
          </motion.p>
          {/* Category */}
          <div className="flex items-start justify-start">
            <p className="border capitalize border-gray-600 rounded-[8px] font-[400] py-1 mt-2 px-4 ">
              {details.category}
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4 mt-4 ">
        <h3 className="font-bold sm:text-center text-[20px] mb-2 ">Reviews</h3>
        {/* content */}
        <motion.div
          layout
          className="flex flex-col gap-2 mb-12 items-center sm:items-center justify-start"
        >
          {reviewsList.length === 0 ? (
            <section className="flex flex-col items-center justify-center">
              <img
              className="h-[100px] w-[100px] "
              src="https://cdn3d.iconscout.com/3d/premium/thumb/empty-page-8662838-6894644.png?f=webp"
                alt=""
              />
              <p>No reviews yet</p>
            </section>
          ) : (
            reviewsList.map((rev, id) => {
              return <ReviewItem rev={rev} />;
            })
          )}
        </motion.div>
        {/* Input */}
        <div className="fixed sm:bottom-0 bg-gray-900 bottom-0 left-0 pt-6 sm:pt-4 pb-4 z-40 items-center sm:justify-center justify-start sm:px-12 px-4 w-screen  flex gap-2  ">
          <input
            className="outline-none w-[400px] px-3 focus:border-[2px] rounded-[8px]  h-[50px] focus:border-blue-500 bg-transparent border border-gray-600  "
            type="text"
            value={review}
            placeholder="Enter Positive review"
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-2 flex gap-2 font-bold items-center justify-center bg-blue-500 rounded-[8px]  "
            onClick={handleReviews}
          >
            Send <BsSendFill size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default View;
