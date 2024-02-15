import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { CiBookmark } from "react-icons/ci";
import { useGlobal } from "../context";
import { db } from "../firebase-config";

const Loading = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

function Listings() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const { setPage, setDetails, active, setActive } = useGlobal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firestore = getFirestore();
        const coursesCollection = collection(firestore, "courses");
        let querySnapshot;

        if (active === "all") {
          querySnapshot = await getDocs(coursesCollection);
        } else {
          const filteredQuery = query(
            coursesCollection,
            where("category", "==", active)
          );
          querySnapshot = await getDocs(filteredQuery);
        }

        const updatedCourses = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(updatedCourses);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData();
  }, [active]); // Fetch data whenever "active" state changes

  if (loading) {
    return <Loading />; // Display loading indicator while data is being fetched
  }

  if (courses.length === 0) {
    return <div className="w-full h-full flex items-center justify-center ">No courses found for selected category.</div>;
  }

  return (
    <div className="w-full cursor-pointer flex flex-col gap-4 items-center justify-center">
      {courses.map((course) => (
        <div
          key={course.id}
          onClick={() => {
            setDetails(course);
            setPage("view");
          }}
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
          <div className="flex items-center card  w-full px-2 justify-start absolute bottom-0 rounded-b-[8px] left-0 py-4 gap-1">
            <img
              className="h-[40px] w-[40px] rounded-[50%] "
              src={course.profileImage}
              alt=""
            />
            <section className="px-2">
              <h4 className="font-bold text-[20px] ">{course.author}</h4>
              <p>{course.title}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listings;
