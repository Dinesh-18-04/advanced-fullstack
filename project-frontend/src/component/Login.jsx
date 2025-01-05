import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { navii } from "../App";

const Login = () => {
  var [Email, setEmail] = useState("");
  var [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoggedin, setisLoggedin } = useContext(navii);
  const { userName, setuserName } = useContext(navii);

  const handleLogin = async (e) => {
    var data = { Email, Password };
    console.log(data);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6001/login", data);

      if (res.status === 200) {
        setisLoggedin(res.data.isLoggedin);
        setuserName(res.data.Name);
        // console.log(res.data.isLoggedin)
        alert("Logged in Successfully...");
        navigate("/dashboard");
      } else {
        alert("Login failed...");
      }
    } catch (err) {
      console.log(err);
      alert("LogIn failed...");
    }
  };

  return (
    <div>
      <div className="mx-20 mt-3">
        <div className="">
          <form className="flex flex-col gap-6 w-[500px] mx-auto mt-[10%] p-8 shadow-lg rounded-lg bg-white">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">
                Email:
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border border-black focus:border-none rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 font-medium">
                Password:
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border focus:border-none border-black rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className="bg-blue-700 font-bold transition-all text-white px-6 py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
