import React, { useState } from "react";
import Logo from "../Components/assets/logo.png";
import { PiShoppingCart } from "react-icons/pi";

function Navbar() {
  const [Menu, SetMenu] = useState("Shop");
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-[#588157]">
      <img className=" w-72" src={Logo} alt="" />
      <div>
        <ul className="flex gap-8">
          <li className="text-lg text-white" onClick={() => SetMenu("Shop")}>
            Shop{" "}
            {Menu === "Shop" ? (
              <hr className="border-none h-[2px] bg-white w-11 rounded-full mt-1" />
            ) : (
              <></>
            )}
          </li>{" "}
          
          <li className="text-lg text-white" onClick={() => SetMenu("Mens")}>
            Mens
            {Menu === "Mens" ? (
              <hr className="border-none h-[2px] bg-white w-12 rounded-full mt-1" />
            ) : (
              <></>
            )}
          </li>
          <li className="text-lg text-white" onClick={() => SetMenu("Womens")}>
            Womens
            {Menu === "Womens" ? (
              <hr className="border-none h-[2px] bg-white w-[75px] rounded-full mt-1" />
            ) : (
              <></>
            )}
          </li>
          <li className="text-lg text-white" onClick={() => SetMenu("Kids")}>
            Kids
            {Menu === "Kids" ? (
              <hr className="border-none h-[2px] bg-white w-10 rounded-full mt-1" />
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
      <div className="flex gap-9 items-center">
        <button className="text-xl border-black border-[1px]  rounded-full px-8 py-1 text-[#3b5c3a] bg-[#D7F9BD] ">
          Login
        </button>
        <PiShoppingCart size={30} />
        <div className=" bg-[#D7F9BD] rounded-full flex items-center justify-center h-[18PX] w-[18PX] text-[#3b5c3a] text-sm relative right-10 bottom-3">
          0
        </div>
      </div>
    </div>
  );
}

export default Navbar;
