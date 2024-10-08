import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="herobg flex">
      <h1 className="text-white text-left absolute bottom-12 text-8xl font-bold ml-10">
        Feel Young, <br /> Be Unstoppable
      </h1>
      <div className="text-white text-right absolute bottom-12 right-0 mr-10 w-[500px]">
        <p >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora id
          sapiente dolorem maxime ipsa, quibusdam temporibus animi odit nemo
          dicta quos quae autem tempore pariatur.
        </p>
        <Link to={"/mens"}><button className="bg-white text-black hover:scale-105 duration-200 px-6 py-1 relative left-[270px] rounded-full mt-10 text-xl flex items-center gap-2">See What's New <MdOutlineArrowRightAlt size={30} /></button></Link>
        
      </div>
    </div>
  );
}

export default Hero;
