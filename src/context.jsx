import React,{useContext, useState,useEffect} from 'react'
const AppContext = React.createContext();
import {motion,AnimatePresence} from 'framer-motion'

function AppProvider({children}) {
  const [list,setList] = useState([])
  const [view,setView] = useState('all')
  const [mode,setMode] = useState(false);
  const [todo,setTodo] = useState('');
  const [active,setActive] = useState([])
  const [completed,setCompleted] = useState([]);
  const itemVariant = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
    exit: {
      scale: 0,
      y: -10,
    },
    whileHover: {
      scale: 1.03,
    },
    transition: {
      duration: 0.3,
    },
  };
   useEffect(() => {
     const savedList = JSON.parse(localStorage.getItem("todoList")) || [];
     const savedCompleted =
       JSON.parse(localStorage.getItem("completedList")) || [];
     setList(savedList);
     setCompleted(savedCompleted);
   }, []);
  return (
    <AppContext.Provider
      value={{
        mode,setMode,
        view,setView,
        list,
        itemVariant,
        setList,
        todo,
        setTodo,
        active,
        setActive,
        completed,
        setCompleted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () =>{
    return(
        useContext(AppContext)
    )
}

export default AppProvider
