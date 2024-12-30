import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = (props) => {
  var [name, setname] = useState("");
  var [count, setcount] = useState(0);

  function handlesetname(event) {
    setname(event.target.value);
  }

  function handleadd(event) {
    console.log(name);
  }

  function handleincrease(evt) {
    setcount(++count);
  }

  function handledecrease(evt) {
    setcount(--count);
  }

  function handlereset(evt) {
    setcount(0);
  }

  return (
    <div>
      <Navbar />
      <div className="mx-14">
        <div className="border-black border-4 border-dotted p-6 mt-4">
          <h1 className="text-3xl font-bold mb-4 text-center">
            What is the Purpose of Default Keyword ?
          </h1>
          <h3 className="text-2xl text-justify">
            In React, the export default keywords are used to export a single
            value (usually a component) from a module. This allows you to import
            that value directly into another module without having to use curly
            braces.
          </h3>
        </div>

        <div className="">
        <h1 className="text-3xl mt-5 font-bold text-center ">Props : {props.name}</h1>

          <h1 className="text-3xl font-bold my-3 mt-7">useState :</h1>
          <input
            type="text"
            placeholder="Type your Name ?"
            onChange={handlesetname}
            className="border border-green-400 p-4 my-2 text-2xl"
          />
          <button
            onClick={handleadd}
            className="text-2xl font-bold bg-green-400 text-white p-4 border border-green-400"
          >
            Add
          </button>
          <h1 className="text-2xl">{name}</h1>
        </div>

        <div className="mb-14">
          <h1 className="text-3xl font-bold my-3">Count :</h1>
          <div className="">
            <h1 className="text-2xl mb-2">{count}</h1>
            <div className="flex gap-2">
              <button
                onClick={handleincrease}
                className="text-2xl font-bold bg-green-400 text-white p-2 rounded-lg border border-black"
              >
                Increase
              </button>
              <button
                onClick={handledecrease}
                className="text-2xl font-bold bg-green-400 text-white p-2 rounded-lg border border-black"
              >
                Decrease
              </button>
              <button
                onClick={handlereset}
                className="text-2xl font-bold bg-green-400 text-white p-2 rounded-lg border border-black"
              >
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
