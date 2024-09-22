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
      <div className="flex  gap-6">
        <img src={WhatsappImg} className="invert" alt="" />
        <img src={InstagramImg} className="invert" alt="" />
        <img src={PintesterImg} className="invert" alt="" />
      </div>
      <div><p>Copyright © 2024 - All Rights Reserved</p></div>
    </div>
  );
}

export default Footer;
