import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { navii } from "../App";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate(); 
  const { isLoggedin, setisLoggedin } = useContext(navii);
  const { userName, setuserName } = useContext(navii);

  // Logout handler
  const handleLogout = () => {
    setisLoggedin(false); // Update state to logged out
    alert("You have been logged out!");
    navigate("/")
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
                    <h1 className="font-bold text-2xl">Welcome {userName}</h1>
                    <button
                      onClick={handleLogout}
                      className="bg-gray-700 hover:bg-gray-300 transition-all hover:text-black rounded-md text-white font-bold px-4 py-2 text-xl"
                    >
                      Logout
                    </button>
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
    </div>
  );
};

export default Navbar;
