import React, { useState } from "react";
import { auth, provider, db } from "../firebase-config";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import Logo from "../Components/Logo.jsx";
import { useGlobal } from "../context";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

function Signup() {
  const { setPage, setUserDetails, setLocalData, userdb, setUserdb } =
    useGlobal();
  const handleAddUser = async (user) => {
    // Check if the document with the given ID exists
    const usersCollection = collection(db, "users");
    const userQuery = query(usersCollection, where("id", "==", user.id));
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      // If the document doesn't exist, add it to the collection
      await addDoc(collection(db, "users"), {
        name: user.name,
        id: user.id,
        description: user.description || "",
        img: user.img || "",
        whatsapp: user.whatsapp || "",
        linkedin: user.linkedin || "",
        email: user.email || "",
        hall: user.hall || "Babcock, Ogun",
        posts: user.posts || [],
      });
    } else {
      console.log("User with this ID already exists.");
    }
  };

  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;

      const userInfo = {
        name: user.displayName,
        img: user.photoURL,
        email: user.email,
        description:'Student at Babcock University',
        id: user.uid,
        whatsapp: "",
        linkedin: "",
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

  const handleSignupWithEmail = async (email, password, name) => {
    try {
      // Check if email is already registered
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        throw new Error("Email address is already registered.");
      }

      // Create user with email and password
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
        description: user.description || "Student at Babcock University",
        email: user.email,
        id: user.uid,
        whatsapp: "",
        linkedin: "",
        hall: "Babcock, Ogun",
        posts: [],
      };
      handleAddUser(userInfo);
      setLocalData(userInfo);
      localStorage.setItem("userDetails", JSON.stringify(userInfo));
      localStorage.setItem("isSignedIn", true);
      console.log("User signed up with email", user);
    } catch (error) {
      console.error("Signup error:", error.message);
      // Display error message to the user
      alert(error.message);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen mb-0 relative bg-black items-start w-screen flex flex-col px-6 py-4">
      <div className="w-full ">
        <Logo />
      </div>

      <div className="flex flex-col sm:mt-10 mt-20 text-center w-full gap-3">
        <h2 className="font-[600] text-center text-[30px]  ">
          Create New Account
        </h2>
        <div className="mt-6">
          <div
            className="gap-4 w-full sm:justify-center sm:items-center  flex flex-col"
            action=""
          >
            <div className="flex flex-col items-start sm:gap-4 sm:w-[60%] justify-center w-full gap-[24px]">
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
              onClick={() => handleSignupWithEmail(email, password, name)}
              className="font-[600] text-[20px] py-3 mt-4 sm:w-[60%] w-full rounded-[8px] bg-blue-500  "
            >
              Create Account
            </button>
            <button
              onClick={SignInWithGoogle}
              className="font-[600] text-[20px] py-3 sm:w-[60%] w-full rounded-[8px] border-[1px] border-blue-600 flex gap-2 items-center justify-center  "
            >
              Sign up with Google <FcGoogle size={30} />
             
            </button>
          </div>
        </div>
      </div>
      <div className="w-full absolute sm:bottom-0 sm:mt-2 bottom-8 sm:relative flex items-center justify-center">
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
