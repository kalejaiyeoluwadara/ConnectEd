import React, { useState,useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiMenuKebab, CiLocationOn } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { FaW, FaWhatsapp } from "react-icons/fa6";
import face1 from "../assets/images/person.svg";
import bg from "../assets/images/bg.jpg";
import { useGlobal } from "../context";
import { LuMail } from "react-icons/lu";
import { collection, query, where, getDocs,doc,deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { FaLinkedin } from "react-icons/fa6";
import Nav from "../Components/Nav";
import EditProfile from "./EditProfile";
import { motion } from "framer-motion";
function Profile() {
  const { setPage, userDetails, localData,setLocalData, setImg, img } = useGlobal();
  const photoURL = img.img || face1;
  const [log, setLog] = useState();
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Check if the document with the given ID exists
        const usersCollection = collection(db, "users");
        const userQuery = query(
          usersCollection,
          where("id", "==", localData.id)
        );
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          // If user exists, set user data in localData
          const userData = querySnapshot.docs[0].data();
          setLocalData(userData);
          console.log("User found in Firestore:", userData);
        } else {
          // If user doesn't exist in Firestore, use existing localData
          console.log("User not found in Firestore");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    // Fetch user data when the component mounts
    fetchUser();
  }, [localData.id]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Check if the document with the given ID exists
        const postsCollection = collection(db, "courses");
        const postsQuery = query(postsCollection, where("id", "==", localData.id));
        const querySnapshot = await getDocs(postsQuery);

        if (!querySnapshot.empty) {
          // If posts exist, set posts data in state
          const postsData = querySnapshot.docs.map((doc) => doc.data());
          setPosts(postsData);
          // console.log(posts)
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
    fetchPosts();
  }, []); 

   const handleDeletePost = async (postId) => {
     try {
       // Construct reference to the post document
       const postRef = doc(db, "courses", postId);

       // Delete the post document from Firestore
       await deleteDoc(postRef);

       // Remove the deleted post from the local state
       setPosts(posts.filter((post) => post.id !== postId));
     } catch (error) {
       console.error("Error deleting post:", error.message);
     }
   };
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
        <div className="w-full flex relative   justify-between items-start px-3 py-0 bg-gray-800 h-[100px] ">
          <BsArrowLeft
            onClick={() => {
              setPage("home");
            }}
            className="text-black mt-2 z-40 "
            size={30}
          />
          <CiMenuKebab
            className="text-black sm:mr-[120px] mt-2 z-40"
            onClick={() => {
              setLog(!log);
            }}
            size={25}
          />
          <img
            className="absolute w-full h-full right-0 object-fill sm:object-cover  "
            src={bg}
            alt=""
          />
          {log && (
            <div
              onClick={() => {
                setPage("board1");
                localStorage.removeItem("isSignedIn");
                // localStorage.removeItem("userDetails");
              }}
              className="absolute bottom-4 sm:right-[120px] right-4 bg-black px-4 py-2 rounded-[8px] "
            >
              Log Out
            </div>
          )}
        </div>

        <div className="relative  flex flex-col px-3  w-screen ">
          <img
            src={localData.img}
            className="-top-4 border-[3px] border-black h-[50px] w-[50px] rounded-[50%] absolute"
            alt=""
          />
          <button
            onClick={() => {
              setPage("edit");
            }}
            className="border-[2px] sm:absolute sm:right-40 hover:border-white hover:font-[600] font-[500] border-gray-700 px-[15px] py-1  absolute right-6 top-3 rounded-[20px] "
          >
            Edit profile
          </button>
          <p className=" mt-12  text-[20px] font-bold">{img.name}</p>
        </div>
        {/* details/description */}
        <div className="px-4 mt-2">
          {/* desc */}
          <p className="font-[500] sm:w-[300px] ">{localData.description}</p>
          {/* details */}
          <div className="flex w-full mt-4 font-500 text-[16px] justify-start text-gray-300 gap-3 items-center ">
            {/* location */}
            <p className="flex gap-1 items-center justify-center  ">
              {" "}
              <CiLocationOn size={20} />
              {localData.hall}
            </p>
            {/* link */}
            <p className="flex items-center  gap-1">
              {" "}
              <IoMdLink size={21} />{" "}
              <span className="text-blue-400 flex gap-4 ml-2 ">
                <a href={`https://wa.me/${localData.whatsapp}`}>
                  <FaWhatsapp size={25} />
                </a>
                <a href={localData.linkedin}>
                  <FaLinkedin size={25} />
                </a>

                <a href={`mailto:${localData.email}`}>
                  <LuMail size={25} />
                </a>
              </span>
            </p>
          </div>
        </div>
        {/* items */}
        <div className="w-full sm:flex-row sm:flex-wrap sm:justify-start sm:gap-8 sm:w-full  flex mb-40 sm:px-4 items-center justify-center gap-4   my-8   flex-col">
          {/* Logs through posts */}
          {posts.length === 0 ? (
            <p className="text-center mt-12 w-full">You haven't posted any course yet.</p>
          ) : (
            posts.map((post, id) => {
              return (
                <div
                  key={id}
                  className="bg-gray-700 relative sm:w-[300px] w-[90%]  h-[300px] "
                >
                  <img
                    src={post.image}
                    className="absolute h-full w-full top-0 left-0"
                    alt=""
                  />
                  <section className="px-4 w-full rounded-b-[0px] bg-opacity-30 card py-3 absolute bottom-0 ">
                    <h4 className="font-bold   text-[20px] ">{post.author}</h4>
                    <p>{post.title}</p>
                  </section>
                  
                </div>
              );
            })
          )}
        </div>
      </motion.div>
      <Nav />
    </>
  );
}

export default Profile;
