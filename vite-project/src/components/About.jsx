import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";

const About = () => {
  var [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        var response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setdata(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchdata();
  });
  return (
    <div>
      <Navbar />
      <div className="mx-14">
        <h1 className="text-3xl font-bold mt-6 mb-3">Fake API :</h1>
        <ol className="mb-3">
          {data.map((data,index) => (
            <div>
              <li className="">{index+1}. {data.title}</li>
            </div>
          ))}
        </ol>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
