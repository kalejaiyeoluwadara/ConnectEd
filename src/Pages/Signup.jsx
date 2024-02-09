import React from "react";
import face1 from "../assets/images/face1.png";
import { useGlobal } from "../context";
function Signup() {
  console.log("render");
  const { setPage } = useGlobal();
  return (
    <div className="h-screen relative  bg-black items-start w-screen flex flex-col px-12 py-4">
      <div className="w-full font-[500] text-[18px] text-right ">
        <p
          onClick={() => {
            setPage("login");
          }}
        >
          Login
        </p>
      </div>

      <div className="flex flex-col mt-20 w-full gap-3">
        <img src={face1} className="h-[100px] w-[100px] mb-2 " alt="" />
        <h2 className="font-[600] text-[35px] leading-[50px] ">
          Create your <br /> account
        </h2>
        <div className="mt-6">
          <form className=" gap-4 w-full  flex flex-col" action="">
            <div className="flex flex-col items-start justify-center w-full  gap-[24px]">
              <input placeholder="Email" className="w-full input" type="text" />
              <input
                placeholder="password"
                className="w-full input"
                type="text"
              />
            </div>
            <button
              onClick={() => {
                setPage("home");
              }}
              className="font-[600] text-[20px]  py-3 mt-4 w-full rounded-[8px] bg-blue-600  "
            >
              Create Account
            </button>
            <button className="font-[600] text-[20px] py-3  w-full rounded-[8px] border-[3px] border-blue-600  ">
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
