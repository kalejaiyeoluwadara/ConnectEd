import React from "react";
import { FaChevronRight } from "react-icons/fa6";
function Login() {
  return (
    <div className="flex w-screen px-3 py-2 relative h-screen bg-black ">
      <div className="w-full absolute top-3 flex items-center justify-between ">
        <FaChevronRight />
        <p>Login</p>
        <p></p>
      </div>
    </div>
  );
}

export default Login;
