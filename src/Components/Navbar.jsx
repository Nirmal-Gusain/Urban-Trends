import React, { useState } from "react";
import Logo from "../Components/assets/logo.png";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar() {
  const [Menu, SetMenu] = useState("Shop");
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-[#175676] font-['comic_sans_ms']">
      <img className=" w-72" src={Logo} alt="" />
      <div>
        <ul className="flex gap-8">
          <li className="text-lg text-white" onClick={() => SetMenu("Shop")}><Link to={'/'}>Shop</Link>
            {" "}
            {Menu === "Shop" ? (
              <hr className="border-none h-[2px] bg-white w-full rounded-full mt-1" />
            ) : (
              <></>
            )}
          </li>{" "}
          
          <li className="text-lg text-white" onClick={() => SetMenu("Mens")}><Link to={'/mens'}>Mens</Link>
            {Menu === "Mens" ? (
              <hr className="border-none h-[2px] bg-white w-full rounded-full mt-1" />
            ) : (
              <></>
            )}
          </li>
          <li className="text-lg text-white" onClick={() => SetMenu("Womens")}><Link to={'/womens'}>Womens</Link>
            
            {Menu === "Womens" ? (
              <hr className="border-none h-[2px] bg-white w-full rounded-full mt-1" />
            ) : (
              <></>
            )}
          </li>
          <li className="text-lg text-white" onClick={() => SetMenu("Kids")}><Link to={'/kids'}>Kids</Link>
            
            {Menu === "Kids" ? (
              <hr className="border-none h-[2px] bg-white w-full rounded-full mt-1" />
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
      <div className="flex gap-9 items-center">
        <Link to={"/login"}><button className="text-xl border-black border-[1px]  rounded-full px-8 py-1 text-[#3b5c3a] bg-white ">
          Login
        </button></Link>
        <Link to={"/cart"}><PiShoppingCart size={30}  color="white"/></Link>
        
        <div className=" bg-white rounded-full flex items-center justify-center h-[18PX] w-[18PX] text-[#3b5c3a] text-sm relative right-10 bottom-3">
          0
        </div>
      </div>
    </div>
  );
}

export default Navbar;
