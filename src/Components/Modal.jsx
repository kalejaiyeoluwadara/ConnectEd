import React, { useEffect } from "react";
import { useGlobal } from "../context";

function Modal() {
  const { modal, setModal } = useGlobal();

  useEffect(() => {
    // Check if modal is true, and set a timer to close it after 3 seconds
    if (modal) {
      const timer = setTimeout(() => {
        setModal(false);
      }, 3000);

      // Clear the timer when component unmounts or when modal becomes false before the timer expires
      return () => clearTimeout(timer);
    }
  }, [modal, setModal]);

  return (
    <>
      {modal && (
        <div className="absolute mt-4 z-50  w-screen flex items-center justify-center">
          <div className="bg-blue w-[100px] text-center px-4 rounded-[8px] bg-blue-400 py-2 font-medium">
            Modal
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
