import React, { useState, useEffect } from "react";
import { BsBellFill } from "react-icons/bs";
import face1 from "../assets/images/person.svg";
import { useGlobal } from "../context";

function Header() {
  const { userDetails, setIsSignedIn,setPage,localData, setLocalData, setImg, img } =
    useGlobal();
  // const [image] =
  useEffect(() => {
    const storedIsSignedIn = localStorage.getItem("userDetails");
    if (storedIsSignedIn) {
      //  setLocalData(storedUserDetails);
      //  setPage("home");
      const image = JSON.parse(storedIsSignedIn);
      setImg(image);
      // console.log(img.name);
      // console.log(photoURL);
    }
  }, []);
  // Check if userDetails.photoURL exists, if not, use a default image
  const photoURL = img.img || face1;
  return (
    <div className="w-full flex  py-4 justify-between items-center">
      <section className="flex gap-2">
        <img
          src={photoURL}
          className="h-[40px] w-[40px] rounded-[50%]"
          alt="img"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-[18px] ">Welcome, {localData.name}</h4>
          <p className="text-[13px] font-[500] opacity-[0.7] ">{localData.hall ? localData.hall : "Babcock, ogun" }</p>
        </div>
      </section>
      <section className="sm:absolute right-40 ">
        <BsBellFill onClick={() =>{
          setPage('notifications')
        }} size={25} />
      </section>
    </div>
  );
}

export default Header;
