import React, { useState,useEffect } from "react";
import tochi from "../assets/images/tochi.png";
import { FiChevronLeft } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { setDoc, doc, collection, addDoc, query, where, getDocs } from "firebase/firestore"; // Import additional Firestore functions

import { db } from "../firebase-config";
import { useGlobal } from "../context";
import {PiPlugsConnectedThin  } from "react-icons/pi";

function View() {
  const { setPage, details, setDetails, img,connect,localData,setConnect,temp,setTemp } = useGlobal();
  const [reviewsList, setReviewsList] = useState([]); 
  const [review, setReview] = useState("");
  const [loadingReview, setLoadingReview] = useState(false); // State for review loading
  const [isExpanded, setIsExpanded] = useState(false);
    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };    
    const handleReviews = async () => {
    try {
      // Create a new review object
      const newReview = {
        review: review,
        msg: details.description,
        name: localData.name, // Corrected variable name
        img: localData.img, // Corrected variable name
      };

      // Add the new review to the Firestore collection "reviews"
      await addDoc(collection(db, "reviews"), newReview);
      
      // Clear the review input field after successfully adding the review
      setReview("");
    } catch (error) {
      console.error("Error adding review:", error.message);
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Query Firestore for reviews with the same description as the one in the view page
        const q = query(collection(db, "reviews"), where("msg", "==", details.description));
        const querySnapshot = await getDocs(q);
        const reviews = [];
        querySnapshot.forEach((doc) => {
          reviews.push(doc.data());
        });
        setReviewsList(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
      }
    };

    fetchReviews();
  }, [details.description]); // Run effect whenever the description in details changes


  return (
    <div className="min-h-screen sm:absolute right-0 left-0 pb-20 w-screen bg-black  ">
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
          <div className=" h-[40px] bg-opacity-[0.5] w-[40px] z-40 flex items-center justify-center rounded-[50%] shadow-md bg-gray-400 ">
            <CiBookmark className="z-40" size={25} />
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
            <section className="flex items-center gap-1">
              <CiLocationOn size={30} />
              <p>{details.hall}</p>
            </section>
            <button className="text-white mt-2 px-4 py-1 bg-black border border-gray-400 font-[600] rounded-[8px] ">
              {details.isFree ? "Free" : "Paid"}
            </button>
          </div>
          <button
            onClick={() => {
              setPage("connect");
              setTemp(details.id);
            }}
            className="text-white flex gap-2 px-4 py-1 bg-blue-600 font-[600] itens-center justify-center rounded-[8px] "
          >
            <PiPlugsConnectedThin size={20} />
            <span>Connect</span>
          </button>
        </div>
        {/* Description */}
        <div className=" h-auto w-[90%] px-4 py-3  mt-4 rounded-[8px] ">
          <h3 className="text-[22px] text-start  font-[600] ">
            Tutor Description
          </h3>
          <p className="text-start w-full font-[400] text-[16px] ">
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
          </p>
          {/* Category */}
          <div className="flex items-start justify-start">
            <p className="border capitalize border-gray-600 rounded-[8px] font-[400] py-1 mt-2 px-4 ">
              {details.category}
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4">
        <h3 className="font-bold">Reviews</h3>
        {/* content */}
        <div className="flex flex-col gap-2 items-center justify-center" >
          {
          reviewsList.map((rev,id)=>{
          return(
          <p className="w-screen border-[2px] border-gray-500   " >{rev.review}</p>
          )
          })
          }
        </div>
        {/* Input */}
        <div className="fixed bottom-4 bg-black z-40 items-center justify-start w-screen px-4 flex gap-3  " >  
          <input className="outline-none px-3 focus:border-[2px] rounded-[8px] focus:border-blue-500 bg-transparent border border-gray-600 h-[35px]  " type="text" value={review} onChange={(e) =>{
            setReview(e.target.value)
          }} />
          <button onClick={handleReviews}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default View;
