import { useContext } from "react";
import ProductContext from "../context/ProductContex";

const useProductContext = () => {
  return useContext(ProductContext);
};
export default useProductContext;
