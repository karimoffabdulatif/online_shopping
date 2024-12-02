"use client";

import CustomImage from "@/components/image";
import { ProductType } from "@/interfaces";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<ProductType[]>(() => {
    try {
      const storedProducts = localStorage.getItem("carts");
      return storedProducts ? JSON.parse(storedProducts) : [];
    } catch (error) {
      console.error("Error parsing cart data from localStorage:", error);
      return [];
    }
  });

  const removeProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleIncrement = (id: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    localStorage.setItem("carts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleDecrement = (id: number) => {
    const exisProduct = products.find((product) => product.id === id);

    if (exisProduct?.quantity === 1) {
      removeProduct(exisProduct.id);
    } else {
      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      localStorage.setItem("carts", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    }
  };

  useEffect(() => {
    const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(total);
  }, [products]);

  return (
    <>
      {products.length ? (
        <div className="h-screen bg-gray-50 pt-20">
          {/* Cart Content */}
        </div>
      ) : (
        <section className="bg-white">
          <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
              <p className="p-3 text-sm font-medium text-white rounded-full bg-blue-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                Page not found
              </h1>
              <p className="mt-4 text-gray-500 pb-6">
                You haven't purchased anything yet. Return to the homepage to explore our amazing products!
              </p>
              <Link href="/" className="w-full rounded-md bg-blue-500 py-4 font-medium text-blue-50 hover:bg-blue-600">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ShoppingCart;
