import React from "react";
import logoImage from "./assets/logo.png";
import WhatsappImg from "./assets/whatsapp_icon.png"
import PintesterImg from "./assets/pintester_icon.png"
import InstagramImg from "./assets/instagram_icon.png"
function Footer() {
  return (
    <div className="flex flex-col gap-10 py-9 items-center bg-black text-white">
      <div>
        <img src={logoImage} className="invert h-20" alt="" />
      </div>
      <div>
        <ul className="flex gap-9 ">
          <li>Company</li>
          <li>About</li>
          <li>Products</li>
          <li>Offers</li>
          <li>Career</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex  gap-7 ">
        <img src={WhatsappImg} className="invert border-black border-[2px] rounded-md p-2" alt="" />
        <img src={InstagramImg} className="invert border-black border-[2px] rounded-md p-2" alt="" />
        <img src={PintesterImg} className="invert border-black border-[2px] rounded-md p-2" alt="" />
      </div>
      <hr className="bg-white border-none h-[1px] w-full"/>
      <div className=""><p>Copyright © 2024 - All Rights Reserved</p></div>
    </div>
  );
}

export default Footer;
