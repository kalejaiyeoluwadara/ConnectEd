import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useGlobal } from "../context";
import { auth, provider } from "../firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Logo from "../Components/Logo.jsx";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const { setPage, setUserDetails, setLocalData } = useGlobal();
  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;

      const userInfo = {
        name: user.displayName,
        img: user.photoURL,
        email: user.email,
        description: "Student at Babcock University",
        id: user.uid,
        whatsapp: "",
        linkedin: "",
        // time:''
        hall: "Babcock, Ogun",
        posts: [],
      };
      // handleAddUser(userInfo);
      setLocalData(userInfo);
      localStorage.setItem("userDetails", JSON.stringify(userInfo));
      localStorage.setItem("isSignedIn", true);
      setUserDetails(user);
      setPage("home");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };

  const handleLoginWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      setUserDetails(user);
      setPage("home");
      const userInfo = {
        name: user.displayName || 'New User' ,
        img: user.photoURL,
        email: user.email,
      };
      setLocalData(userInfo);
      localStorage.setItem("userDetails", JSON.stringify(userInfo));
      localStorage.setItem("isSignedIn", true);
      console.log("User logged in with email", user);
    } catch (error) {
      console.error("Login error:", error.message);
      // Display error message to the user
      alert(error.message);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex w-screen flex-col px-3 py-2 relative min-h-screen bg-gray-900 ">
      <Logo />
      <div
        className="flex w-full flex-col sm:items-center sm:justify-center gap-4 px-4 mt-10"
        action=""
      >
        <h2 className="font-[600] text-center text-[30px] mb-6 ">
          Account Login
        </h2>
        <div className="w-full flex px-3 rounded-[8px] sm:w-[50%] items-center justify-center bg-gray-800 h-[54px]  ">
          <input
            type="text"
            className="input border-none lowercase  bg-transparent w-full "
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex px-3 sm:w-[50%] rounded-[8px] items-center justify-center bg-gray-800 h-[54px] ">
          <input
            type="password"
            className="input border-none lowercase bg-transparent w-full "
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-right sm:w-[50%] w-full px-2 text-blue-500 font-medium ">
          Forgot Password
        </p>
        <button
          onClick={() => handleLoginWithEmail(email, password)}
          className="font-[600] text-[20px] sm:w-[50%] py-3 mt-4 w-full rounded-[8px] bg-blue-500  "
        >
          Log in
        </button>
      </div>

      <div className="relative">
        <hr className="mt-8 border-[2px] border-gray-800 " />
        <p className=" absolute z-40 top-[22px] flex items-center justify-center w-full">
          <span className="px-6 bg-gray-900">or</span>
        </p>
      </div>
      <div className="sm:w-screen sm:flex sm:items-center sm:justify-center">
        <button
          onClick={SignInWithGoogle}
          className="font-[600] text-[20px] flex items-center justify-center gap-2 sm:w-[50%]  py-3 mt-12 w-full rounded-[8px] border-[1px] border-blue-600"
        >
          Sign in with Google
          <FcGoogle size={30} />
        </button>
      </div>

      <div className="w-full sm:relative sm:bottom-0 sm:mt-8 mt-20edit bottom-8 flex items-center justify-center">
        <p
          onClick={() => {
            setPage("signup");
          }}
          className="cursor-pointer"
        >
          Don't have an account?<span className="text-blue-500"> SignUp</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
