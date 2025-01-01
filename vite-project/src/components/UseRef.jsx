import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UseRef = () => {
  var [text, settext] = useState("");
  var [count,setcount] = useState(0);
  var prevtext = useRef("");
  var prevcount = useRef(0);

  useEffect(() => {
    prevtext.current = text;
  }, [text]);

  useEffect(()=>{
    prevcount.current = count;
    // console.log(prevcount.current)
  },[count])

  return (
    <div>
      <Navbar />
      <div className="">
        <h1 className="text-3xl font-bold mt-5 mb-3">UseRef :</h1>
        <input
          type="text"
          className="border border-black"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <h1 className="text-2xl font-semibold my-2">
          The Current Text is {text}
        </h1>
        <h1 className="text-2xl font-semibold my-2">
          The Previous Text is {prevtext.current}
        </h1>
      </div>

      <div className="my-7">
        <h1 className="text-3xl font-bold">useRef Count :</h1>
        <h1 className="text-2xl font-bold">The current count is {count}</h1>
        <h1 className="text-2xl font-bold">The previous count is {prevcount.current}</h1>
        <button onClick={(e)=>{setcount(++count)}} className="text-2xl font-bold rounded-full bg-green-400 text-white p-4 border border-green-400 mr-3">+</button>
        <button onClick={(e)=>{setcount(--count)}} className="text-2xl font-bold rounded-full bg-green-400 text-white p-4 border border-green-400">-</button>

      </div>
      <Footer />
    </div>
  );
};

export default UseRef;
