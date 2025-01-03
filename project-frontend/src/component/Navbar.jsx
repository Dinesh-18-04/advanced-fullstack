import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-lg pb-1">
      <div className="flex items-center justify-between mx-20 my-5 ">
        <div className="">
          <h1 className="text-5xl font-bold">Dinesh</h1>
        </div>
        <div className="">
          <div className=" flex gap-5 ">
            <Link to="/signup"><button className="bg-red-700 hover:bg-red-300 transition-all hover:text-black rounded-md text-white font-bold px-4 py-2 text-xl ">Signup</button></Link>
            <Link to="/login"><button className="bg-blue-700 hover:bg-blue-300 transition-all hover:text-black rounded-md text-white font-bold px-4 py-2 text-xl ">Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
