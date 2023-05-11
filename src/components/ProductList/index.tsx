import React from "react";
import { StyledProductList } from "./style";

interface iProductListProps {
  children: React.ReactNode;
}

const ProductList = ({ children }: iProductListProps) => {
  return <StyledProductList>{children}</StyledProductList>;
};

export default ProductList;
