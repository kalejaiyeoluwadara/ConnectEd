import React from "react";
import Board1 from "../Pages/Board1";
import { useGlobal } from "../context";
import Board2 from "../Pages/Board2";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
function Admin() {
  const { setPage, board1, board2, login, signup } = useGlobal();
  return (
    <div className="text-white bg-black sm:min-h-screen">
      {board1 && <Board1 />}
      {board2 && <Board2 />}
      {signup && <Signup />}
      {login && <Login />}
    </div>
  );
}

export default Admin;
