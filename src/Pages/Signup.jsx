import React from "react";
import face1 from "../assets/images/face1.png";
function Signup() {
  return (
    <div className="h-screen justify-between items-start w-screen flex flex-col px-6 py-4">
      <div className="w-full text-[500] text-right ">
        <p>signIn</p>
      </div>

      <div className="flex flex-col gap-3">
        <img src={face1} alt="" />
        <h2 className="font-[600] text-[30px] ">Create Your Account</h2>
      </div>

      <div>
        <form action="">
          <input type="text" />
          <input type="text" />
          <button>Sign Up</button>
        </form>
      </div>

      <div>
        <p>Or signUp with </p>
      </div>
    </div>
  );
}

export default Signup;
