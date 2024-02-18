import React, { useState } from "react";
import tochi from "../assets/images/tochi.png";
import { FiChevronLeft } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useGlobal } from "../context";
import {PiPlugsConnectedThin  } from "react-icons/pi";

function View() {
  const { setPage, details, setDetails, img,connect,setConnect } = useGlobal();
  const [review, setReview] = useState("");
  const [loadingReview, setLoadingReview] = useState(false); // State for review loading

  const handleReviewSubmit = async () => {
    if (review.trim() !== "") {
      const newReview = {
        name: img.name,
        profileImg: img.img,
        review: review,
      };
      setLoadingReview(true); // Set loading state to true when submitting review
      try {
        // Update the document with the new review
        await setDoc(
          doc(db, "courses", details.id),
          { reviews: [...details.reviews, newReview] },
          { merge: true } // Merge with existing data
        );
        // Update state
        setDetails({ ...details, reviews: [...details.reviews, newReview] });
        // Clear input field
        setReview("");
      } catch (error) {
        console.error("Error adding review:", error);
      } finally {
        setLoadingReview(false); // Reset loading state after review submission
      }
    }
  };
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className="min-h-screen sm:absolute right-0 left-0 pb-20 w-screen bg-black  ">
      {/* First section */}
      <div className="flex w-full relative bg-gray-900 rounded-b-[20px] h-[300px] ">
        <section className="flex justify-between px-4 w-full items-start capitalize py-4">
          <FiChevronLeft
            className="cursor-pointer z-40 "
            onClick={() => {
              setPage("home");
            }}
            size={28}
          />
          <CiBookmark className="z-40" size={25} />
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
          <button onClick={() =>{
            setPage('connect');
          }}  className="text-white flex gap-2 px-4 py-1 bg-blue-600 font-[600] itens-center justify-center rounded-[8px] ">
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
              : details.description.slice(0, 40)}
            {details.description.length > 40 && !isExpanded && (
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
      <div className="mt-4 flex  sm:items-start flex-col px-6 ">
        <h3 className="text-[22px] text-start sm:px-1  font-[600] ">Reviews</h3>
        {details.reviews.length === 0 && !loadingReview && (
          <p className="text-center text-gray-400 mt-4">No reviews available</p>
        )}
        {loadingReview && (
          <p className="text-center text-gray-400 mt-4">Submitting review...</p>
        )}
        {details.reviews.length > 0 && (
          <div className="flex flex-col  mt-[20px] gap-4">
            {details.reviews.map((review, id) => (
              <div key={id}>
                <section className="flex justify-between">
                  <div className="flex gap-3 font-[500] items-center capitalize">
                    <img
                      src={review.profileImg}
                      alt=""
                      className="h-[30px] rounded-full"
                    />
                    <p className="text-[17px]">{review.name}</p>
                  </div>
                </section>
                <section>
                  <div>{/* Display rating if available */}</div>
                </section>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        )}
        {/* Input for review */}
        <div className="mt-4 flex w-full sm:gap-3 items-center justify-center ">
          <input
            className="h-[30px] sm:w-[250px] border-none outline-none bg-black "
            type="text"
            placeholder="Review"
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
          <button onClick={handleReviewSubmit}>send</button>
        </div>
      </div>
      {/* Fourth Section */}
      <div className="px-8 mt-8 font-[600] text-[20px]  ">
        {/* <h2 className="text-center sm:mt-20 mb-3 ">Related Courses</h2> */}
        <div className="grid sm:justify-center grid-cols-1 items-center justify-center gap-3 ">
          {[1, 2, 3].map((d) => {
            <div
              onClick={() => {
                // setCourse(d);
                setPage("view");
              }}
              className="h-auto rounded-[8px] relative w-[90%] sm:w-[300px] bg-gray-800 py-4  "
            >
              <div className="flex items-center w-full px-4  justify-start  left-3 gap-1 ">
                <img className="h-[50px] w-[50px] " src={tochi} alt="" />
                <section className="px-2">
                  <h4 className="font-[600] text-[19px] ">Tochi Idiong</h4>
                  <p className="font-[400] text-[15px] ">Maths 203</p>
                </section>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default View;
