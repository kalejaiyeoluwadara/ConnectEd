import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";

function AppProvider({ children }) {
  const [board1, setBoard1] = useState(true);
  const [board2, setBoard2] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [home, setHome] = useState(false);
  const [view, setView] = useState(false);
  const [course, setCourse] = useState([]);
  const setPage = (page) => {
    setBoard1(false);
    setBoard2(false);
    setLogin(false);
    setSignup(false);
    setHome(false);
    setView(false);
    if (page === "board1") {
      setBoard1(true);
    } else if (page === "board2") {
      setBoard2(true);
    } else if (page === "login") {
      setLogin(true);
    } else if (page === "signup") {
      setSignup(true);
    } else if (page === "view") {
      setView(true);
    } else if (page === "home") {
      setHome(true);
    } else {
      // setBoard1(true);
      console.log("error");
    }
  };
  return (
    <AppContext.Provider
      value={{
        course,
        setCourse,
        view,
        board1,
        setBoard1,
        board2,
        setBoard2,
        signup,
        setSignup,
        login,
        setLogin,
        setPage,
        home,
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
