import React from "react";

const Feedback = () => {
  return (
    <div>
      <form action="http://localhost:3001/feedback" method="post">
        <h1>FeedBack Form:</h1>
        <div className="">
          <label htmlFor="">Name :</label>
          <input className="border border-green-400 p-4 my-2 text-2xl" type="text"  />
        </div>
        <div className="">
          <label htmlFor="">Email :</label>
          <input className="border border-green-400 p-4 my-2 text-2xl" type="email"  />
        </div>
        <div className="">
          <label htmlFor="">Feedback :</label>
          <textarea className="w-[195px] outline-none text-black border border-green-400" name="" id=""></textarea>
        </div>
        <button className="text-2xl font-bold bg-green-400 text-white p-4 border border-green-400">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
