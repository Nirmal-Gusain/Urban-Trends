import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import mens_banner from "./Components/assets/banner_mens.png"
import womens_banner from "./Components/assets/banner_women.png"
import kids_banner from "./Components/assets/banner_kids.png"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory banner = {mens_banner} category="men"/>}/>
          <Route path="/womens" element={<ShopCategory banner = {womens_banner} category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner = {kids_banner} category="kid"/>}/>
          <Route path="/product" element={<Product/>}>
              <Route path=":productID" element={<Product/>}/>
          </Route>
          <Route path="/login" element={<LoginSignup/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
