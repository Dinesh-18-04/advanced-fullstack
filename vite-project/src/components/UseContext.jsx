import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Comp1 from "./context-component/Comp1";
export var ThemeProvider = React.createContext();
const UseContext = () => {
  return (
    <div>
      <Navbar />
      <ThemeProvider.Provider value={{ cgpa: 7.5 }}>
        <div className="">
          <h1 className="text-3xl font-bold mt-5 mb-3">UseContext :</h1>
          <Comp1 />
        </div>
      </ThemeProvider.Provider>
      <Footer />
    </div>
  );
};

export default UseContext;
