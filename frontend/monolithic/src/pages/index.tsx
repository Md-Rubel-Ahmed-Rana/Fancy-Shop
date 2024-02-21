import Banner from "@/components/home/banner/Banner";
import { useState } from "react";
import ProductsPage from "@/components/products/ProductsPage";

export default function Home() {
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);
  return (
    <div>
      <Banner />
      <ProductsPage isShowSearchBar={isShowSearchBar} />
    </div>
  );
}
