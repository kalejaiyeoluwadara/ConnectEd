import React from "react";
import Board1 from "../Pages/Board1";
import { useGlobal } from "../context";
import Board2 from "../Pages/Board2";
import Signup from "../Pages/Signup";
function Admin() {
  const { setPage, board1, board2, login, signUp } = useGlobal();
  return (
    <div className="text-white">
      {board1 && <Board1 />}
      {board2 && <Board2 />}
      {signUp && <signUp />}
    </div>
  );
}

export default Admin;
