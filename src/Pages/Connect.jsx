import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import face1 from "../assets/images/person.svg";
import bg from "../assets/images/bg.jpg";
import { useGlobal } from "../context";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FaLinkedin } from "react-icons/fa6";
import { db } from "../firebase-config";
import Nav from "../Components/Nav";
import { motion } from "framer-motion";

function Connect() {
  const { setPage, userDetails, localData, setImg, img, temp } = useGlobal();
  // const photoURL = existingUser.img || face1;
  const [existingUser, setExistingUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [view,setView] = useState(false);
  useEffect(() => {
    const fetchExistingUser = async () => {
      try {
        // Check if the document with the given ID exists
        const usersCollection = collection(db, "users");
        const userQuery = query(usersCollection, where("id", "==", temp));
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          // If user exists, set existing user data in state
          const userData = querySnapshot.docs[0].data(); // assuming only one document exists
          setExistingUser(userData);
        } else {
          // If user doesn't exist, set existing user data to null
          console.log("Not found");
          setExistingUser(null);
        }
      } catch (error) {
        console.error("Error fetching existing user:", error.message);
      }
    };

    const fetchPosts = async () => {
      try {
        // Check if the document with the given ID exists
        const postsCollection = collection(db, "courses");
        const postsQuery = query(postsCollection, where("id", "==", temp));
        const querySnapshot = await getDocs(postsQuery);

        if (!querySnapshot.empty) {
          // If posts exist, set posts data in state
          const postsData = querySnapshot.docs.map((doc) => doc.data());
          setPosts(postsData);
        } else {
          // If posts don't exist, set posts data to empty array
          console.log("No posts found");
          setPosts([]);
        }
      } catch (error) {
        console.error("Error fetching user posts:", error.message);
      }
    };

    // Fetch existing user data when the component mounts
    fetchExistingUser();
    fetchPosts();
  }, [temp]); // Run effect whenever temp changes

  // console.log(posts);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw" }}
        transition={{ duration: 0.5 }}
        className="min-h-screen w-screen bg-gray-900"
      >
        {/* Banner */}
        <div className="w-full flex relative justify-between items-start px-3 py-1 bg-gray-800 h-[100px] ">
          <img
            className="absolute w-full h-full right-0 object-fill sm:object-cover  "
            src={bg}
            alt=""
          />
        </div>

        <div className="relative flex flex-col px-3  w-screen ">
          <img
            src={existingUser ? existingUser.img : face1}
            className="-top-4 border-[3px] border-black h-[50px] w-[50px] rounded-[50%] absolute"
            alt=""
          />

          <p className="mt-12 text-[20px] font-bold">
            {existingUser ? existingUser.name : ""}
          </p>
        </div>
        {/* details/description */}
        <div className="px-4 mt-2">
          {/* desc */}
          <p className="font-[500] sm:w-[300px] ">
            {existingUser ? existingUser.description : ""}
          </p>
          {/* details */}
          <div className="flex w-full mt-4 font-500 text-[16px] justify-start text-gray-300 gap-2 items-center ">
            {/* location */}
            <p className="flex gap-1 items-center justify-center  ">
              {" "}
              <CiLocationOn size={25} />
              {existingUser ? existingUser.hall : ""}
            </p>
            {/* link */}
            <p className="flex items-center  gap-1">
              {" "}
              <IoMdLink size={25} />{" "}
              <span className="text-blue-400 flex ml-2 gap-4">
                <a
                  href={`https://wa.me/${
                    existingUser ? existingUser.whatsapp : ""
                  }`}
                >
                  <FaWhatsapp size={25} />
                </a>
                <a href={existingUser ? `mailto:${existingUser.email}` : ""}>
                  <LuMail size={25} />
                </a>
                <a href={existingUser ? existingUser.linkedin : ""}>
                  <FaLinkedin size={25} />
                </a>
              </span>
            </p>
          </div>
          <section className="mt-4 h-[50px] flex ">
            <div
              onClick={() => {
                setView(!view);
              }}
            >
              {view ? <FaEyeSlash /> : <FaEye />}
            </div>
            {view && (
              <div className="flex ml-6 flex-col">
                <p>
                  Whatsapp Number: {existingUser ? existingUser.whatsapp : ""}{" "}
                </p>
                <p>Email: {existingUser ? existingUser.email : ""} </p>
                <p>LinkedIn: {existingUser ? existingUser.linkedin : ""} </p>
              </div>
            )}
          </section>
        </div>
        {/* items */}
        <div className="w-full flex mb-40  sm:flex-row sm:gap-8 items-center justify-center gap-4 mt-0 my-8 px flex-col">
          {/* Logs through posts */}
          {posts.length === 0 ? (
            <p>No posts found</p>
          ) : (
            <div className="w-full flex mb-40  sm:flex-row sm:gap-8 items-center justify-center gap-4  my-8 px flex-col">
              {posts.map((post, id) => {
                return (
                  <div
                    key={id}
                    className="bg-gray-700 relative sm:w-[300px] w-[90%] rounded-[10px] h-[300px] "
                  >
                    <img
                      src={post.image}
                      className="absolute h-full w-full top-0 left-0"
                      alt=""
                    />
                    <section className="px-4 w-full  bg-opacity-30 card py-3 absolute -bottom-1 ">
                      <h4 className="font-bold   text-[20px] ">
                        {post.author}
                      </h4>
                      <p>{post.title}</p>
                    </section>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
      <Nav />
    </>
  );
}

export default Connect;
