import React, { useState } from "react";
import Nav from "../Components/Nav";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useGlobal } from "../context";
import { IoIosCheckmark } from "react-icons/io";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase-config"; // Importing db and storage from your config file

function UploadPage() {
  const [image, setImage] = useState(null);
  const { setPage } = useGlobal();
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFree, setIsFree] = useState(true);
  const [banner, setBanner] = useState(true);
  const [category, setCategory] = useState("general");
  const [isCat, setIsCat] = useState(false);
  // const db = firebase.firestore();
  // const storage = firebase.storage();
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleTitleChange = (e) => {
    setCourseTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFreeChange = (e) => {
    setIsFree(e.target.checked);
  };

  // Important
  const handleCreateCourse = async () => {
    // Upload image to Firebase Storage
    const storageRef = ref(storage, `course_images/${image.name}`);

    try {
      // Upload image
      await uploadBytes(storageRef, image);

      // Get image URL
      const imageUrl = await storageRef.getDownloadURL();

      // Add course data to Firestore
      const coursesCollection = collection(db, "courses");
      await addDoc(coursesCollection, {
        image: imageUrl,
        title: courseTitle,
        description: description,
        isFree: isFree,
        category: category,
      });

      console.log("Course added successfully");
      // Redirect or do something else as needed
    } catch (error) {
      console.error("Error adding course: ", error);
    }
  };
  return (
    <div className="w-screen min-h-screen items-center justify-center bg-black flex flex-col px-4  text-white">
      <div className="w-full border border-gray-700 mt-8 my-20  max-w-md  rounded-[8px] p-6">
        {/* title */}
        <div>
          <h3 className="font-[600] text-[20px] ">Create Course</h3>
          <p className="opacity-[0.8]">
            Deploy your specialty, help your mentees know what you're great at.
          </p>
        </div>

        <div className="flex flex-col mt-3  w-full  ">
          <h3 className="font-[600] mb-2 ">Image depicting course</h3>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            className=" py-2 px-2 w-full  appearance-none bg-transparent  text-white border rounded-[8px] border-gray-600 placeholder-gray-400 focus:outline-none focus:border-none"
          />
        </div>

        <div className="flex mt-2 flex-col">
          <h3 className="font-[600] mb-2">Course Title</h3>
          <input
            type="text"
            placeholder="Title of course you're great at"
            value={courseTitle}
            onChange={handleTitleChange}
            className="bg-transparent border rounded-[8px] border-gray-600 p-2 w-full focus:border-white mb-4"
          />
        </div>
        <div className="flex mt-2 flex-col">
          <h3 className="font-[600] mb-2">Description</h3>
          <textarea
            placeholder="Brief description, you change to brag a bit"
            value={description}
            onChange={handleDescriptionChange}
            className="bg-transparent  border rounded-[8px] border-gray-600 focus:border-white p-2 w-full mb-4 resize-none h-32"
          />
        </div>

        {/* Categories */}
        <div className="flex mt-4 z-50 relative  flex-col">
          <h3 className="font-[600] mb-2">Category</h3>
          <div className="flex w-full items-center justify-center">
            <p
              onClick={() => {
                setIsCat(!isCat);
              }}
              className="px-4 flex items-center gap-2 py-2 font-[500]  border rounded-[8px]  border-gray-600"
            >
              {category}{" "}
              {!isCat ? <FaCaretDown size={20} /> : <FaCaretUp size={20} />}
            </p>
          </div>

          {/* options */}
          {isCat && (
            <div
              onClick={() => {
                setIsCat(!isCat);
              }}
              className="absolute flex flex-col gap-4 items-start justify-center border border-gray-600 px-6 -top-[150px] capitalize bg-black rounded-[8px] py-3 -right-2"
            >
              {[
                "Cosc",
                "Economics",
                "Mathematics",
                "general",
                "English",
                "Tech",
                "Sports",
                "other",
              ].map((d, id) => {
                return (
                  <p
                    key={id}
                    className="flex gap-1"
                    onClick={() => {
                      setCategory(d);
                    }}
                  >
                    <span>{d}</span>
                    <IoIosCheckmark
                      size={20}
                      className={`${category === d ? "visible" : "hidden"}`}
                    />
                  </p>
                );
              })}
            </div>
          )}
        </div>

        {/* Payment plan */}
        <div className="flex mt-6 relative  flex-col">
          <h3 className="font-[600] mb-2">Payment plan</h3>
          <div className="flex w-full items-center justify-center">
            <p
              onClick={() => {
                setBanner(!banner);
              }}
              className="px-4 flex items-center gap-2 py-2 font-[500]  border rounded-[8px]  border-gray-600"
            >
              {isFree ? "Free" : "Paid"}{" "}
              {!banner ? <FaCaretDown size={20} /> : <FaCaretUp size={20} />}
            </p>
          </div>

          {/* options */}
          {banner && (
            <div
              onClick={() => {
                setBanner(false);
              }}
              className="absolute flex flex-col gap-2 items-start justify-center border border-gray-600 w-[100px] px-6 bg-black rounded-[8px] py-3 -right-2"
            >
              <p
                onClick={() => {
                  setIsFree(true);
                }}
                className="flex item-center relative justify-center gap-1 "
              >
                <span>Free</span>
                <IoIosCheckmark
                  size={25}
                  className={`${isFree ? "visible" : "hidden"}`}
                />
              </p>
              <p
                onClick={() => {
                  setIsFree(false);
                }}
                className="flex item-center justify-center gap-1 "
              >
                <span>Paid</span>
                <IoIosCheckmark
                  size={25}
                  className={`${!isFree ? "visible" : "hidden"}`}
                />
              </p>
            </div>
          )}
        </div>

        <div className="w-full flex justify-between items-center my-12 ">
          <button
            onClick={() => {
              setPage("home");
            }}
            className="px-4 py-2 font-[500] border border-white  rounded-[8px]  "
          >
            Cancel
          </button>
          <button
            onClick={handleCreateCourse}
            className="px-4 py-2 font-[600] bg-white text-black rounded-[8px]  "
          >
            Create
          </button>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default UploadPage;
