import React, { useState } from "react";
import face1 from "../assets/images/face1.png";
import { auth, provider } from "../firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useGlobal } from "../context";

function Signup() {
  const { setPage, userDetails, setUserDetails, setLocalData } = useGlobal();
  // authentication

  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      const userInfo = {
        name: user.displayName,
        img: user.photoURL,
        email: user.email,
      };
      setLocalData(userInfo);
      localStorage.setItem("userDetails", JSON.stringify(userInfo));
      localStorage.setItem("isSignedIn", true);
      setUserDetails(user);
      setPage("home");
      console.log("User signed in", user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSignupWithEmail = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      setUserDetails(user);
      setPage("home");
      const userInfo = {
        name: user.displayName,
        img: user.photoURL,
        email: user.email,
      };
      localStorage.setItem("userDetails", JSON.stringify(userInfo));
      localStorage.setItem("isSignedIn", true);
      console.log("User signed up with email", user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen relative bg-black items-start w-screen flex flex-col px-12 py-4">
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
          <div className="gap-4 w-full  flex flex-col" action="">
            <div className="flex flex-col items-start justify-center w-full gap-[24px]">
              <input
                placeholder="Email"
                className="w-full input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                className="w-full input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={() => handleSignupWithEmail(email, password)}
              className="font-[600] text-[20px] py-3 mt-4 w-full rounded-[8px] bg-blue-600  "
            >
              Create Account
            </button>
            <button
              onClick={SignInWithGoogle}
              className="font-[600] text-[20px] py-3 w-full rounded-[8px] border-[3px] border-blue-600  "
            >
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
