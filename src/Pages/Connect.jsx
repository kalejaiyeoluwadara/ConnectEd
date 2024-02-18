import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import face1 from "../assets/images/person.svg";
import bg from "../assets/images/bg.jpg";
import { useGlobal } from "../context";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Nav from "../Components/Nav";

function Connect() {
  const { setPage, userDetails, localData, setImg, img,temp } = useGlobal();
  // const photoURL = existingUser.img || face1;
  const [existingUser, setExistingUser] = useState(null);

  useEffect(() => {
    const fetchExistingUser = async () => {
      try {
        // Check if the document with the given ID exists
        const usersCollection = collection(db, "users");
        const userQuery = query(
          usersCollection,
          where("id", "==", temp)
        );
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          // If user exists, set existing user data in state
          querySnapshot.forEach((doc) => {
            setExistingUser(doc.data());
            console.log(doc.data())
          });
        } else {
          // If user doesn't exist, set existing user data to null
          console.log("Not found");
          setExistingUser(null);
        }
      } catch (error) {
        console.error("Error fetching existing user:", error.message);
      }
    };

    // Fetch existing user data when the component mounts
    fetchExistingUser();
  }, []); // Run effect whenever localData.id changes
  //  console.log(temp)
  return (
    <div className="min-h-screen w-screen bg-black">
      {/* Banner */}
      <div className="w-full flex relative   justify-between items-start px-3 py-1 bg-gray-800 h-[100px] ">
        <img
          className="absolute w-full h-full right-0 object-fill sm:object-cover  "
          src={bg}
          alt=""
        />
      </div>

      <div className="relative  flex flex-col px-3  w-screen ">
        {/* <img
          src={existingUser.profileImage || face1 }
          className="-top-4 border-[3px] border-black h-[50px] w-[50px] rounded-[50%] absolute"
          alt=""
        /> */}

        <p className=" mt-12  text-[20px] font-bold">Name</p>
      </div>
      {/* details/description */}
      <div className="px-4 mt-2">
        {/* desc */}
        <p className="font-[500]">Student at Babcock University</p>
        {/* details */}
        <div className="flex w-full mt-4 font-500 text-[16px] justify-start text-gray-300 gap-2 items-center ">
          {/* location */}
          <p className="flex gap-1 items-center justify-center  ">
            {" "}
            <CiLocationOn size={20} />
            Babock, Ogun
          </p>
          {/* link */}
          <p className="flex items-center  gap-1">
            {" "}
            <IoMdLink size={21} />{" "}
            <span className="text-blue-400 flex gap-1">
              <a href={`https://wa.me/`}>
                <FaWhatsapp size={20} />
              </a>
              <a href='email'>
                <LuMail size={20} />
              </a>
            </span>
          </p>
        </div>
      </div>
      {/* items */}
      {/* <div className="w-full flex  items-center justify-center gap-4  my-8 px flex-col">
        <div className="bg-gray-700 relative sm:w-[300px] w-[90%] rounded-[10px] h-[300px] ">
          <img src="" alt="" />
          <section className="px-4 w-full rounded-b-[10px] bg-opacity-30 card py-3 absolute bottom-0 ">
            <h4 className="font-bold   text-[20px] ">Tochi Idiong</h4>
            <p>Numerical Methods and Analysis</p>
          </section>
        </div>
      </div> */}

      <Nav />
    </div>
  );
}

export default Connect;
