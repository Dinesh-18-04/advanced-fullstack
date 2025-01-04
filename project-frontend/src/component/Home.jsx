import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-20 mt-32">
      <div className="ml-16 flex items-center gap-[10%] ">
        <div className="w-[50%] mr-16">
          <h1 className="text-3xl font-bold w-[100%] my-8">
            Welcome to Your Personalized Water Intake Tracker!
          </h1>
          <p className="text-xl my-3">
            Proper hydration is vital for a healthy, energetic life, but
            tracking it can be tricky. Our Water Intake Tracker makes it simple!
          </p>
          <p className="text-xl">
            Set daily goals, log your intake, and monitor your progress—all
            through a sleek, user-friendly interface. Whether you're boosting
            wellness, staying fit, or building better habits, we’ve got you
            covered.
          </p>
          <Link to="/login">
            <button className="bg-blue-700 mt-5 hover:bg-blue-300 transition-all hover:text-black rounded-md text-white font-bold px-4 py-2 text-xl ">
              Track Now
            </button>
          </Link>
        </div>
        <div className="w-[50%]">
          <img
            src="https://img.freepik.com/free-photo/glass-water-with-lemon-blue-background_23-2148275319.jpg?t=st=1735978487~exp=1735982087~hmac=e2cb33398e1d5ca7ad1edeff3a7650dd275e96a8255884bf9ba2a945bbabb13f&w=1380"
            alt=""
            className="w-[450px] rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
