import React from "react";
import Board1 from "../Pages/Board1";
import { useGlobal } from "../context";
import Board2 from "../Pages/Board2";
function Admin() {
  const { setPage, board1, board2, login, signUp } = useGlobal();
  return (
    <div className="text-white">
      {
        // board1 && <Board1 />
        <Board2 />
      }
    </div>
  );
}

export default Admin;
