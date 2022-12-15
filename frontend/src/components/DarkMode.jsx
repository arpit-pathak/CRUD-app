// document.documentElement.classList.add("dark");
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const DarkMode = () => {

  const [theme,setTheme] = useState(null);

// toggle function change the theme value when clicked on button
  const toggle = () =>{
    if(theme === "dark"){
      setTheme("light");
    }
    else{
      setTheme("dark");
    }
  }

  // change mode when 'theme' value change manually
  useEffect(()=>{
    if(theme === "dark"){
     document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme])


  return(
    <div className="flex justify-end">
      <button className= "bg-indigo-500 text-white border-0 py-2 px-4 mt-2 mx-2  focus:outline-none hover:bg-indigo-600 rounded-xl text-sm"
        onClick={toggle}>
        Toggle Mode
        </button>

    </div>
  )
  
};

export default DarkMode;
