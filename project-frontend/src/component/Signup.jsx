import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  var [Name, setName] = useState("");
  var [Email, setEmail] = useState("");
  var [Password, setPassword] = useState("");
  const navigate = useNavigate()

  var handleSubmit = async (e) => {
    e.preventDefault();
    const data = { Name, Email, Password };
    console.log(data)
    try {
      const res = await axios.post("http://localhost:6001/signup", data);
      if (res.status === 200) {
        alert("SignUp is Successfull...");
        navigate("/login")
      } else {
        alert("SignUp is failed...");
      }
    } catch (err) {
      console.log(err);
      alert("SignUp is failed...")
    }
  };
  return (
    <div>
      <Navbar />
      <div className="mx-20 mt-3">
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-[500px] mx-auto mt-[10%] p-8 shadow-lg rounded-lg bg-white"
          >
            <h1 className="text-3xl font-bold text-center">Signup</h1>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium">
                Name:
              </label>
              <input
                name="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border border-black rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">
                Email:
              </label>
              <input
                name="Email"
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
                name="Password"
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
              type="submit"
              className="bg-red-700 font-bold transition-all text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
