import React from "react";

const Footer = () => {
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
           <form action="">
            <table>
                <tr>
                    <td><label className="" htmlFor="">Name :</label></td>
                    <td><input type="text" placeholder="Enter Name" className="border outline-none " /></td>
                </tr>
                <tr>
                    <td><label className="" htmlFor="">Email :</label></td>
                    <td><input type="text" placeholder="Enter the Mail" className="border outline-none"/></td>
                </tr>
                <tr>
                    <td><label className="" htmlFor="">Feedback :</label></td>
                    <td><textarea className="w-[195px] outline-none text-black" placeholder="Give Your Feedback" name="" id=""></textarea></td>
                </tr>
                <tr>
                  <td><button className="text-2xl font-bold bg-black p-2 rounded-lg border border-black" >Submit</button></td>
                </tr>
            </table>
           </form>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
