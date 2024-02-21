/* eslint-disable @next/next/no-img-element */
import ProductSearchNavbar from "@/components/common/ProductSearchNavbar";
import ProductsPage from "@/components/products/ProductsPage";
import React, { useState } from "react";

const Products = () => {
  const [isShowSearchBar, setIsShowSearchBar] = useState(true);
  return (
    <div>
      <ProductsPage isShowSearchBar={isShowSearchBar} />
    </div>
  );
};

export default Products;
