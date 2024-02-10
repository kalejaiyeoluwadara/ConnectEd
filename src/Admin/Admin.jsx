import React from "react";
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
  } = useGlobal();
  return (
    <div className="text-white bg-black sm:min-h-screen">
      {board1 && <Board1 />}
      {board2 && <Board2 />}
      {signup && <Signup />}
      {login && <Login />}
      {home && <Home />}
      {view && <View />}
      {profile && <Profile />}
      {bookmark && <Bookmark />}
      {notifications && <Notifications />}
      {search && <Search />}
    </div>
  );
}

export default Admin;
