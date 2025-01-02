import React, { useState } from "react";
import { useMemo } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

var slowfunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return number*2; 
};
const UseMemo = () => {
  var [num, setnum] = useState(0);
  var [theme, setTheme] = useState(true);
  var darklight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doubleing = useMemo(()=>{
    return slowfunction(num)
  },[num])
  return (
    <div>
      <Navbar />
      <div className="">
        <h1 className="text-3xl font-bold my-4">UseMemo :</h1>
        <input
          className="border border-green-400 p-4 my-2 text-2xl"
          type="number"
          value={num}
          onChange={(e) => {
            setnum(e.target.value);
          }}
        />
        <button
          onClick={() => setTheme(theme = !theme)}
          className="text-2xl font-bold bg-green-400 text-white p-4 border border-green-400"
        >
          DarkMode
        </button>
        <h1 className="text-2xl font-semibold my-4" style={darklight}>
          
          {doubleing}
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default UseMemo;
