import React from "react";
import { BsBellFill } from "react-icons/bs";
import face1 from "../assets/images/face2.png";
import { useGlobal } from "../context";

function Header() {
  const { userDetails } = useGlobal();

  // Check if userDetails.photoURL exists, if not, use a default image
  const photoURL = userDetails.photoURL || face1;
  console.log(photoURL);
  return (
    <div className="w-full flex  py-4 justify-between items-center">
      <section className="flex gap-2">
        <img
          src={photoURL}
          className="h-[40px] w-[40px] rounded-[50%]"
          alt="img"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-[18px] ">
            Welcome, {userDetails.displayName}
          </h4>
          <p className="text-[13px] font-[500] opacity-[0.7] ">Babcock, Ogun</p>
        </div>
      </section>
      <section>
        <BsBellFill size={25} />
      </section>
    </div>
  );
}

export default Header;
