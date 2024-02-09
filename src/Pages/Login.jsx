import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
function Login() {
  return (
    <div className="flex w-screen px-3 py-2 relative h-screen bg-black ">
      <div className="w-full absolute text-[20px] font-[500] top-3 flex items-center justify-between ">
        <FiChevronLeft size={30} />
        <p>Login</p>
        <p></p>
      </div>
    </div>
  );
}

export default Login;
