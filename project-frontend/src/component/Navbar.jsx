import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  var Name = localStorage.getItem("Name");
  var isLoggedin = localStorage.getItem("isLoggedin");
  console.log(isLoggedin);

  const handleLogout = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("isLoggedin");
    toast.success("You have been logged out!");
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div>
      <div className="shadow-lg pb-1">
        <div className="flex items-center justify-between mx-20 my-5">
          <div>
            <h1 className="text-4xl font-bold">Tracker</h1>
          </div>
          <div>
            <div className="flex gap-5">
              {isLoggedin ? (
                <>
                  <div className="items-center flex gap-5">
                    <h1 className="font-bold text-2xl">Welcome {Name}</h1>
                    <IoMdLogOut
                      onClick={handleLogout}
                      className=" cursor-pointer text-red-700 text-3xl font-bold"
                    />
                  </div>
                </>
              ) : (
                <>
                  <Link to="/signup">
                    <button className="bg-red-700 hover:bg-red-300 transition-all hover:text-black rounded-md text-white font-bold px-4 py-2 text-xl">
                      Signup
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="bg-blue-700 hover:bg-blue-300 transition-all hover:text-black rounded-md text-white font-bold px-4 py-2 text-xl">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <ToastContainer position="bottom-right" autoClose="2000" />
    </div>
  );
};

export default Navbar;
