import React from "react";
import exclusive_image from "./assets/exclusive_image.png";

function Exclusive() {
  return (
    <div className="bg-gradient-to-b from-white to-cyan-800 flex items-center justify-between px-64 my-3 pt-9">
      <div>
        {" "}
        <h1 className="text-8xl font-medium">Exclusive <br /> Collections <br /> For You</h1>
        <p className="text-3xl my-5">Only on Best Seller Products</p>
        <button className="bg-white px-5 py-1 rounded-full text-xl hover:scale-105 duration-200 border-black border-2" >Check Now</button>
      </div>
      <div>
        <img className="h-[500px]" src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Exclusive;
