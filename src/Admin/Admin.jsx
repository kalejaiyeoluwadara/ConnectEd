import React from "react";
import Board1 from "../Pages/Board1";
import { useGlobal } from "../context";
import Board2 from "../Pages/Board2";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import View from "../Pages/View";
import Profile from "../Pages/Profile";
function Admin() {
  const { setPage, board1, profile, board2, login, signup, home, view } =
    useGlobal();
  return (
    <div className="text-white bg-black sm:min-h-screen">
      {board1 && <Board1 />}
      {board2 && <Board2 />}
      {signup && <Signup />}
      {login && <Login />}
      {home && <Home />}
      {view && <View />}
      {profile && <Profile />}
    </div>
  );
}

export default Admin;
