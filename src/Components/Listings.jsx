import React, { useEffect, useState } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { CiBookmark } from "react-icons/ci";
import { db } from "../firebase-config";

function Listings() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore();
      const coursesCollection = collection(firestore, "courses");
      const unsubscribe = onSnapshot(coursesCollection, (snapshot) => {
        const updatedCourses = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(updatedCourses);
      });

      // Cleanup function to unsubscribe from the listener when the component unmounts
      return () => unsubscribe();
    };

    fetchData();
  }, []);

  return (
    <div className="w-full cursor-pointer flex flex-col gap-4 items-center justify-center">
      {courses.map((course) => (
        <div
          key={course.id}
          className="h-[300px] relative rounded-[8px]  w-[90%] sm:w-[300px] bg-gray-800 py-12"
        >
          {course.isFree && (
            <div className="absolute left-3 top-3 bg-white px-3 py-[3px] rounded-[5px] text-black font-bold">
              Free
            </div>
          )}
          <img
            className=" h-full absolute top-0 left-0 w-full "
            src={course.image}
            alt="course_images"
          />
          <div className="absolute right-3 top-3 px-3 py-[3px] rounded-[5px] font-bold">
            <CiBookmark size={25} />
          </div>
          <div className="flex items-center bg-blue-400 bg-opacity-[0.1] w-full px-2 justify-start absolute bottom-0 rounded-b-[8px] left-0 py-4 gap-1">
            <section className="px-2">
              <h4 className="font-bold text-[20px] ">{course.title}</h4>
              <p>{course.description}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listings;
