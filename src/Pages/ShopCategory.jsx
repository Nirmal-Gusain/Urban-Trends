import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/assets/dropdown_icon.png";
import Item from "../Components/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="mx-32 ">
      <img src={props.banner} alt="" />
      <div className="flex justify-between my-8">
        <p>
          <span className="font-bold">Showing 1-12 </span> out of 36 Products
        </p>
        <div className="flex items-center gap-3 border-2 border-black px-3 py-1 rounded-full">
          sort by <img className="" src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="grid gap-x-12 gap-y-16 grid-cols-4 items-center justify-between mb-10 ">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
      <div className="text-center bg-slate-300 text-xl py-3 font-semibold rounded-md my-6">Load More</div>
    </div>
  );
};

export default ShopCategory;
