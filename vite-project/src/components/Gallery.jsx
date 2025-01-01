import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Gallery = () => {
  var [name,setname] = useState("Dinesh")

useEffect(()=>{
  setname("dk")
},[name])
  return (
    <div>
      <Navbar />
      <div className="">
        <h1 className="text-3xl my-6 font-bold">UseEffect :</h1>
        <input className="border border-green-400 p-4 my-2 text-2xl" type="text" value={name} placeholder="Enter the text" onChange={(e)=>{setname(e.target.value)}} />
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
