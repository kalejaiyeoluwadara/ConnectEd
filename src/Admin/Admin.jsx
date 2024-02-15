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
    search,
    uploadPage,
    userDetails,
    setLocalData,
    localData,edit
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
    <div className="text-white bg-black ">
      {/* <> */}
      {true && <Modal/> }
      {board1 && <Board1 />}
      {board2 && <Board2 />}
      {signup && !userDetails && <Signup />}
      {login && <Login />}
      {home && <Home />}
      {view && <View />}
      {profile && <Profile />}
      {bookmark && <Bookmark />}
      {notifications && <Notifications />}
      {search && <Search />}
      {uploadPage && <UploadPage />}
      {edit && <EditProfile/> }
    </div>

    // </>
  );
}

export default Admin;
