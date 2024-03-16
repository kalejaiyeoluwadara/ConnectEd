import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { CiBookmark } from "react-icons/ci";
import { useGlobal } from "../context";
import { db } from "../firebase-config";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

function Listings() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setPage, setDetails, active, setActive, searchTerm, setSearchterm } =
    useGlobal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firestore = getFirestore();
        const coursesCollection = collection(firestore, "courses");
        let q;

        if (active === "all") {
          q = query(coursesCollection);
        } else {
          q = query(coursesCollection, where("category", "==", active));
        }

        const unsubscribe = onSnapshot(q, (snapshot) => {
          const updatedCourses = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            reviews: doc.data().reviews || [],
          }));

          // Filtering based on searchTerm
          const filteredCourses = updatedCourses.filter((course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
          );

          setCourses(filteredCourses);
          setLoading(false);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [active, searchTerm]);

  if (loading) {
    return <Loading />;
  }

  if (courses.length === 0) {
    return (
      <div className="w-full mt-12 h-full flex items-center justify-center ">
        <div className="flex sm:-translate-x-[125px] flex-col items-center justify-center">
          <img
          className="h-[100px] w-[100px] "
            src="https://cdn3d.iconscout.com/3d/premium/thumb/empty-box-6219421-5102419.png?f=webp"
            alt=""
          />
          <p>No courses found for selected category.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="w-full cursor-pointer flex sm:flex-row sm:gap-12 flex-col gap-4 sm:mt-8 items-center sm:flex-wrap sm:justify-center justify-center"
    >
      {courses.map((course, id) => (
        <div
          key={id}
          onClick={() => {
            setDetails({ ...course });
            setPage("view");
          }}
          className="h-[300px] relative overflow-hidden rounded-[8px]  w-[90%] sm:w-[250px] bg-gray-800 py-12"
        >
          {course.isFree ? (
            <motion.div
              initial={{
                x: "-40px",
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="absolute left-3 top-3 bg-white px-3 py-[3px] rounded-[3px] text-black z-40 font-bold"
            >
              Free
            </motion.div>
          ) : (
            <motion.div
              initial={{
                x: "-40px",
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="absolute left-3 top-3 bg-blue-500 text-white px-3 py-[3px] rounded-[3px]  z-40 font-bold"
            >
              Paid
            </motion.div>
          )}
          <img
            className=" h-full transition-all hover:scale-[1.8] absolute top-0 left-0 w-full "
            src={course.image}
            alt="course_images"
          />
          <div className="flex items-center card  w-full px-2 justify-start absolute bottom-0  left-0 py-4 gap-1">
            <img
              className="h-[40px] w-[40px] rounded-[50%] "
              src={course.profileImage}
              alt=""
            />
            <section className="px-2">
              <h4 className="font-bold text-[16px] ">{course.author}</h4>
              <p>{course.title}</p>
            </section>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Listings;
