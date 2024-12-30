import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center shadow-lg px-14 p-5 text-white bg-green-400">
        <div className="">
          <h1 className="text-3xl font-bold">Dinesh</h1>
        </div>
        <div className="">
          <ul className=" flex gap-6 font-bold ">
            <li>
              <Link to="/" className="hover:text-red-500 transition-all">
                  Home
              </Link>
            </li>
            <li>
                <Link to="/gallery" className="hover:text-red-500 transition-all">
                  Gallery
                </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition-all">
                  About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500 transition-all">
                  Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
