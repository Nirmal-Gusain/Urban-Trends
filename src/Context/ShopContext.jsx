import { createContext } from "react";
import  all_product from "../Components/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return <ShopContextProvider valur = {contextValue}>
    {props.children}
    </ShopContextProvider>;
};
export default ShopContextProvider