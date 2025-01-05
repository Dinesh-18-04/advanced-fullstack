import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";
import { useState } from "react";
import React from "react";

export var navii = React.createContext();

export default function App() {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [userName, setuserName] = useState("");

  return (
    <div>
      <navii.Provider value={{ isLoggedin, setisLoggedin, userName, setuserName}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </navii.Provider>
    </div>
  );
}
