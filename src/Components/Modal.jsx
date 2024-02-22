import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

function Modal({ msg, success, showModal }) {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    // When showModal prop changes to true, set modal state to true
    if (showModal) {
      setModal(true);
      // Set a timer to close the modal after 3 seconds
      const timer = setTimeout(() => {
        setModal(false);
      }, 3000);

      // Clear the timer when component unmounts or when modal becomes false before the timer expires
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <>
      {modal && (
        <motion.div
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100vh" }}
          className="fixed top-12 left-0 w-full  flex items-center justify-center z-50"
        >
          <div className="bg-blue-500 p-4 w-auto text-white  rounded-lg shadow-md">
            <div className="flex items-center justify-start mb-2">
              {success ? (
                <AiOutlineCheckCircle
                  className="text-green-500 mr-2"
                  size={24}
                />
              ) : (
                <AiOutlineCloseCircle className="text-red-500 mr-2" size={24} />
              )}
              <span className="font-medium">Uploaded Course Successfully</span>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Modal;
