import React from "react";
import { useContext } from "react";
import { ThemeProvider } from "../UseContext";
const Comp5 = () => {
  const value = useContext(ThemeProvider);
  return (
    <div>
      <h1>The value is {value.cgpa}</h1>
    </div>
  );
};

export default Comp5;
