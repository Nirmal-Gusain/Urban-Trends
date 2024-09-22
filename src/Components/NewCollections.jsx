import React from "react";
import new_collections from "./assets/new_collections";
import Item from "./Item";

function NewCollections() {
  return (
    <div className=" mt-7 mb-10">
      <div className="w-full flex flex-col">
        <h1 className="text-5xl font-semibold text-center mt-12">New Collections</h1>
        <hr className="w-48 text-c border-none h-1 bg-black rounded  place-self-center my-5" />
        <div className="grid grid-cols-4 gap-10 mt-10 mx-32 ">
          {new_collections.map((item, i) => {
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

export default NewCollections;
