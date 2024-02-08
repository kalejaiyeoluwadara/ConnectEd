import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";

function AppProvider({ children }) {
  const [board1, setBoard1] = useState(true);
  const [board2, setBoard2] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const setPage = (page) => {
    setBoard1(false);
    setBoard2(false);
    setLogin(false);
    setSignup(false);
    if (page === "board1") {
      setBoard1(true);
    } else if (page === "board2") {
      setBoard2(true);
    } else if (page === "login") {
      setLogin(true);
    } else if (page === "signup") {
      setSignup(true);
    } else {
      console.log("Page not found.");
    }
  };
  return (
    <AppContext.Provider
      value={{
        board1,
        setBoard1,
        board2,
        setBoard2,
        signup,
        setSignup,
        login,
        setLogin,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
