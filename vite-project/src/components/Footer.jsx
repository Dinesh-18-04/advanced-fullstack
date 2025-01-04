import React from "react";
import { useState } from "react";
import axios from 'axios'

const Footer = () => {
  var [Name,setName] = useState("")
  var [Email,setEmail] = useState("")
  var [Feedback,setFeedback] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault();
    var data = {Name,Email,Feedback}
    console.log(data)
    try{
      var res = await axios.post("http://localhost:3001/feedback",data)
      console.log(res)
      if(res.status === 200){
        alert("Feedback Submited Successfully...")
      }
      else{
        alert("Feedback is not Submited...")
      }
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <div className="bg-green-400 flex text-white font-semibold justify-around p-5">
        <div className="">
            <h1 className="text-2xl font-bold">Media :</h1>
            <p>Online</p>
            <p>Print</p>
            <p>Alternative Ads</p>
        </div>
        <div className="">
            <h1 className="text-2xl font-bold">Technologies</h1>
            <p>Hardware Design</p>
            <p>Software Design</p>
            <p>Digital Sign</p>
        </div>
        <div className="">
            <h1 className="text-2xl font-bold">Legal</h1>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Sitemap</p>
        </div>
        <div className="">
           <form action="" onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td><label className="" htmlFor="">Name :</label></td>
                    <td><input onChange={(e)=>{setName(e.target.value)}}  type="text" name="Name" placeholder="Enter Name" className=" text-black border outline-none " /></td>
                </tr>
                <tr>
                    <td><label className="" htmlFor="">Email :</label></td>
                    <td><input onChange={(e)=>{setEmail(e.target.value)}} type="text" name="Email" placeholder="Enter the Mail" className=" text-black border outline-none"/></td>
                </tr>
                <tr>
                    <td><label className="" htmlFor="">Feedback :</label></td>
                    <td><textarea onChange={(e)=>{setFeedback(e.target.value)}} className="w-[195px] outline-none text-black" placeholder="Give Your Feedback" name="" id=""></textarea></td>
                </tr>
                <tr>
                  <td><button type="submit" className="text-2xl font-bold bg-black p-2 rounded-lg border border-black" >Submit</button></td>
                </tr>
            </table>
           </form>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
