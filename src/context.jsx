import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [board1, setBoard1] = useState(true);
  const [board2, setBoard2] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [home, setHome] = useState(false);
  const [view, setView] = useState(false);
  const [course, setCourse] = useState([]);
  const [counts, setCounts] = useState(1);
  const [profile, setProfile] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [search, setSearch] = useState(false);
  const [uploadPage, setUploadPage] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [localData, setLocalData] = useState([]);
  const [img, setImg] = useState("");
  const [details,setDetails] = useState([]);
  const [active, setActive] = useState("all");
  const [edit,setEdit] = useState(false);
  const [connect,setConnect] = useState(false);
  const [userdb,setUserdb] = useState();
  const [temp,setTemp] = useState('');
  const [searchTerm,setSearchterm] = useState('');
  const [cats, setCats] = useState([
    "all",
    "cosc",
    "mathematics",
    "tech",
    "economics",
    "general",
    "geds",
    "english",
    "sports",
    "services",
    "others",
  ]);
  const [modal,setModal] = useState(false)
  const setPage = (page) => {
    setBoard1(false);
    setBoard2(false);
    setLogin(false);
    setSignup(false);
    setHome(false);
    setView(false);
    setUploadPage(false);
    setProfile(false);
    setNotifications(false);
    setBookmark(false);
    setSearch(false);
    setEdit(false);
    setConnect(false)
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
    } else if (page === "profile") {
      setProfile(true);
    } else if (page === "notifications") {
      setNotifications(true);
    } else if (page === "bookmark") {
      setBookmark(true);
    } else if (page === "search") {
      setSearch(true);
    } else if (page === "upload") {
      setUploadPage(true);
    } else if (page === "edit") {
      setEdit(true);
    } else if (page === "connect") {
      setConnect(true);
    } else {
      // setBoard1(true);
      console.log("error");
    }
  };

  return (
    <AppContext.Provider
      value={{
        img,
        modal,
        setModal,
        userdb,
        setUserdb,
        temp,
        setTemp,
        details,
        setDetails,
        cats,
        setCats,
        setImg,
        localData,counts,setCounts,
        setLocalData,
        uploadPage,
        userDetails,
        setUserDetails,
        setUploadPage,
        profile,
        notifications,
        bookmark,
        search,
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
        active,
        setActive,
        edit,
        setEdit,
        connect,
        setConnect,
        searchTerm,
        setSearchterm,
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
