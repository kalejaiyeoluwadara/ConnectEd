import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useGlobal } from "../context";
function Login() {
  const { setPage } = useGlobal();
  return (
    <div className="flex w-screen flex-col px-3 py-2 relative h-screen bg-black ">
      <div className="w-full absolute text-[20px] font-[500] top-3 flex items-center justify-between ">
        <FiChevronLeft
          onClick={() => {
            setPage("signup");
          }}
          className="cursor-pointer"
          size={30}
        />
        <p>Login</p>
        <p></p>
      </div>
      <form className="flex w-full flex-col gap-4 px-4 mt-20" action="">
        <div className="w-full flex px-3 rounded-[8px] items-center justify-center bg-gray-800 h-[54px] ">
          <input
            type="text"
            className="input border-none lowercase bg-transparent w-full "
            placeholder="example@gmail.com"
          />
        </div>
        <div className="w-full flex px-3 rounded-[8px] items-center justify-center bg-gray-800 h-[54px] ">
          <input
            type="password"
            className="input border-none lowercase bg-transparent w-full "
            placeholder="password"
          />
        </div>
        <p className="text-right w-full px-2 text-blue-500 font-medium ">
          Forgot Password
        </p>
        <button className="font-[600] text-[20px]  py-3 mt-4 w-full rounded-[8px] bg-blue-600  ">
          Log in
        </button>
      </form>

      <div className="relative">
        <hr className="mt-8 border-[2px] border-gray-800 " />
        <p className=" absolute z-40 top-[22px] flex items-center justify-center w-full">
          <span className="px-6 bg-black">or</span>
        </p>
      </div>
      <button className="font-[600] text-[20px]  py-3 mt-12 w-full rounded-[8px] border-[3px] border-blue-600">
        Sign in with Google
      </button>

      <div className="w-full absolute bottom-8 flex items-center justify-center">
        <p>
          Don't have an account?<span className="text-blue-500"> SignUp</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
