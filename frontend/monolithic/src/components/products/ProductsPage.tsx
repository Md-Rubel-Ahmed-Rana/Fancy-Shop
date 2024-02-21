/* eslint-disable @next/next/no-img-element */
import { useGetProductsQuery } from "@/features/product/product.api";
import { IProduct } from "@/interfaces/product.interface";
import React from "react";
import ProductSearchNavbar from "../common/ProductSearchNavbar";
import Pagination from "../common/Pagination";

const ProductsPage = ({ isShowSearchBar }: { isShowSearchBar: boolean }) => {
  const { data } = useGetProductsQuery({});

  const handleAddToCart = () => {
    // Add your logic for adding to cart
  };

  const handleBuyNow = () => {
    // Add your logic for buying now
  };
  return (
    <>
      {isShowSearchBar && <ProductSearchNavbar />}
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-20 md:gap-10 gap-5 p-5 w-full">
          {data?.data &&
            data?.data?.map((product: IProduct) => (
              <div
                key={product.id}
                className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.title}
                />

                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-700">${product.price}</p>

                  <div className="flex justify-between items-center mt-4">
                    <p
                      className={`text-sm ${
                        product.inStock === 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {product.inStock === 0
                        ? "Out of Stock"
                        : `${product.inStock} in Stock`}
                    </p>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-1">Ratings:</span>
                      <span className="text-yellow-500">{product.ratings}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={handleAddToCart}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Pagination totalData={50} itemsPerPage={6} />
    </>
  );
};

export default ProductsPage;
