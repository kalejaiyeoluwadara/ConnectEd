import React from "react";
import face1 from "../assets/images/face1.png";
function Signup() {
  console.log("render");
  return (
    <div className="h-screen relative  bg-black items-start w-screen flex flex-col px-12 py-4">
      <div className="w-full font-[500] text-[18px] text-right ">
        <p>Login</p>
      </div>

      <div className="flex flex-col mt-20 w-full gap-3">
        <img src={face1} className="h-[200px] w-[200px] mb-2 " alt="" />
        <h2 className="font-[600] text-[35px] leading-[50px] ">
          Create your <br /> account
        </h2>
        <div className="mt-6">
          <form className=" gap-4 w-full  flex flex-col" action="">
            <div className="flex flex-col items-start justify-center w-full  gap-[24px]">
              <input placeholder="Email" className="w-full" type="text" />
              <input placeholder="password" className="w-full" type="text" />
            </div>
            <button className="font-[600] text-[20px]  py-3 mt-4 w-full rounded-[23px] bg-blue-600  ">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="w-full absolute left-10 bottom-4 text-start font-[500] text-[18px] ">
        <p>Or signUp with </p>
      </div>
    </div>
  );
}

export default Signup;
