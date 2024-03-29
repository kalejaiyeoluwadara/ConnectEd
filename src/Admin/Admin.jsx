import React, { useEffect, useState } from "react";
import Board1 from "../Pages/Board1";
import { useGlobal } from "../context";
import Board2 from "../Pages/Board2";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import View from "../Pages/View";
import Profile from "../Pages/Profile";
import Bookmark from "../Pages/Bookmark";
import Notifications from "../Pages/Notifications";
import Search from "../Pages/Search";
import UploadPage from "../Pages/UploadPage";
import EditProfile from "../Pages/EditProfile";
import Modal from '../Components/Modal'
import Connect from "../Pages/Connect";
import { motion,AnimatePresence } from "framer-motion";
import Banner from "../Components/Banner";
function Admin() {
  const {
    setPage,
    board1,
    bookmark,
    notifications,
    profile,
    board2,
    login,
    signup,
    home,
    view,
    search,modal,setModal,
    uploadPage,
    userDetails,
    setLocalData,
    localData,edit,connect,setConnect
  } = useGlobal();
  const [isSignedIn, setIsSignedIn] = useState(false); // Initialize isSignedIn state

  // Check localStorage on component mount
  useEffect(() => {
    const storedIsSignedIn = localStorage.getItem("isSignedIn");
    if (storedIsSignedIn) {
      setIsSignedIn(true);
      // console.log("yes");
      const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
      setLocalData(storedUserDetails);
      setPage("home");
    }
  }, []);

  return (
    <div className="text-white relative ">
      <AnimatePresence>
        {/* <> */}
        {/* <Modal /> */}
        {board1 && <Board1 />}
        {home && <Banner/>}
        {board2 && <Board2 />}
        {signup && !userDetails && <Signup />}
        {login && <Login />}
          {view && <View />}
        <div className="text-white sm:px-[100px] bg-black">
          {home && <Home />}
          {profile && <Profile />}
          {bookmark && <Bookmark />}
          {notifications && <Notifications />}
          {search && <Search />}
          {uploadPage && <UploadPage />}
          {connect && <Connect />}
        </div>
          {edit && <EditProfile />}
      </AnimatePresence>
    </div>

    // </>
  );
}

export default Admin;
