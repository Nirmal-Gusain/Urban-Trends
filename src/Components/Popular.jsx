import React from "react";
import data_product from "./assets/data";
import Item from "./Item";

function Popular() {
  return (
    <div className="flex h-[96vh] w-full justify-between">
      <div className="w-full flex flex-col">
        <h1 className="text-5xl font-semibold text-center mt-12">
          {" "}
          Popular in Womens{" "}
        </h1>
        <hr className="w-48 text-c border-none h-1 bg-black rounded  place-self-center my-1" />
        <div className="flex mt-10 items-center justify-between mx-32">
          {data_product.map((item, i) => {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Popular;
