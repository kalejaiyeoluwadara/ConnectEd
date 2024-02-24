import React, { useState, useEffect } from "react";
import { useGlobal } from "../context";
import { motion, AnimatePresence } from "framer-motion";

function Banner() {
  const [modal, setModal] = useState(false); // Initialize modal as false initially
  const { setPage } = useGlobal();

  useEffect(() => {
    const check = localStorage.getItem("profile");
    if (!check) {
      // Check if profile is not available in local storage
      setModal(true); // Set modal to true to show the banner
    }
  }, []);

  const handleEditProfile = () => {
    localStorage.setItem("profile", "true"); // Set profile to true in local storage
    setModal(false); // Hide the banner
    setPage("edit"); // Set the page to 'edit'
  };

  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          initial={{
            opacity: 0,
            y: "-20vh",
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: "-20vh",
          }}
          className="w-full z-50  fixed top-0 left-0 flex items-center justify-center"
        >
          <div className="flex flex-col rounded-[12px] px-3 mt-3 bg-blue-400 gap-2 py-2">
            <p
              onClick={() => {
                setModal(false);
              }}
              className="text-end transition-all cursor-pointer hover:text-red-400 text-[20px]"
            >
              x
            </p>
            <p className="text-[16px]  w-[300px]">
              Edit your profile, let others know more about you, include your
              social accounts and numbers.
            </p>
            <section className="flex justify-center">
              <button
                onClick={handleEditProfile}
                className="px-4  py-1 border border-white rounded-[16px]"
              >
                Edit Profile
              </button>
            </section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Banner;
