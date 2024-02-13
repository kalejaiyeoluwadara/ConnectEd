import React, { useState } from "react";
import face1 from "../assets/images/face1.png";
import { auth, provider } from "../firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Logo from "../Components/Logo.jsx";
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
      console.log("User signed in", user);
      setPage("home");
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
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen mb-0 relative bg-black items-start w-screen flex flex-col px-6 py-4">
      <div className="w-full ">
        <Logo />
      </div>

      <div className="flex flex-col mt-20 text-center w-full gap-3">
        <h2 className="font-[600] text-center text-[30px]  ">
          Create New Account
        </h2>
        <div className="mt-6">
          <div className="gap-4 w-full  flex flex-col" action="">
            <div className="flex flex-col items-start justify-center w-full gap-[24px]">
              <input
                placeholder="Full Name"
                className="w-full bg-gray-800 px-4 py-4 rounded-[8px] input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Email"
                className="w-full bg-gray-800 px-4 py-4 rounded-[8px] input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                className="w-full bg-gray-800 px-4 py-4 rounded-[8px] input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={() => handleSignupWithEmail(email, password)}
              className="font-[600] text-[20px] py-3 mt-4 w-full rounded-[8px] bg-blue-500  "
            >
              Create Account
            </button>
            <button
              onClick={SignInWithGoogle}
              className="font-[600] text-[20px] py-3 w-full rounded-[8px] border-[1px] border-blue-600  "
            >
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-8 flex items-center justify-center">
        <p
          onClick={() => {
            setPage("login");
          }}
          className="cursor-pointer"
        >
          Already have an account?<span className="text-blue-500"> Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
