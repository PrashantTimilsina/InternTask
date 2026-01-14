"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Search, DollarSign, Tag, MoveLeft, MoveRight } from "lucide-react";
import ProductImage from "./../assets/ProductImage.svg";

interface Product {
  image: string;
  brand: string;
  description: string;
  price: string;
  category: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get(
          `https://fakeapi.net/products?page=${page}&limit=4`
        );
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [page]);

  function handleSearch() {
    const filteredProducts = products.filter((el) =>
      el.brand.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filteredProducts);
  }

  const filteredProducts = products.filter((el) =>
    el.brand.toLowerCase().includes(search.toLowerCase())
  );

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }
  return (
    <div className="container mx-auto px-5 mt-12">
      <h1 className="text-center text-2xl font-semibold">Our Products</h1>

      <div className="flex justify-center mt-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
            className="p-2 w-full border border-gray-300"
          />
          <Search
            className="absolute text-white bg-blue-500 w-9 h-9 rounded cursor-pointer right-0 top-0.5 p-2"
            onClick={handleSearch}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
        {filteredProducts.map((product, i) => (
          <div key={i} className="rounded-md p-4 ">
            <div className="sm:w-full h-44 mb-4 bg-gray-100 rounded relative ">
              <Image
                src={ProductImage}
                alt="product image"
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="font-semibold text-lg">{product.brand}</h3>
            <p className="text-gray-600 line-clamp-1 text-sm mt-1">
              {product.description}
            </p>
            <div className="flex justify-between mt-3 text-sm">
              <div className="flex items-center gap-1">
                <DollarSign
                  size={16}
                  className="bg-black text-white rounded-full p-0.5"
                />
                <span>${product.price}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag
                  size={16}
                  className="bg-black text-white rounded-full p-0.5"
                />
                <span className="text-xs">{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 mb-8 flex justify-center items-center flex-wrap sm:gap-2">
        <button
          onClick={() => {
            if (page === 1) return;
            setPage(page - 1);
          }}
          className="flex items-center gap-1 sm:px-3 sm:py-2 border rounded hover:bg-gray-100 px-1 py-1"
        >
          <MoveLeft size={18} /> Previous
        </button>

        <button
          onClick={() => setPage(1)}
          className={`px-2 py-1 sm:px-3 sm:py-2 border rounded ${
            page === 1
              ? "font-bold bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          1
        </button>

        <button
          onClick={() => setPage(2)}
          className={`px-2 py-1 sm:px-3 sm:py-2 border rounded ${
            page === 2
              ? "font-bold bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          2
        </button>

        <button
          onClick={() => setPage(3)}
          className={`px-2 py-1 sm:px-3 sm:py-2 border rounded ${
            page === 3
              ? "font-bold bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          3
        </button>

        <button
          onClick={() => setPage(4)}
          className={`px-2 py-1 sm:px-3 sm:py-2 border rounded ${
            page === 4
              ? "font-bold bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          4
        </button>

        <button
          onClick={() => setPage(5)}
          className={`px-2 py-1 sm:px-3 sm:py-2 border rounded ${
            page === 5
              ? "font-bold bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          5
        </button>

        <button
          onClick={() => {
            if (page === 5) return;
            setPage(page + 1);
          }}
          className="px-1 py-1 flex items-center gap-1 sm:px-3 sm:py-2 border rounded hover:bg-gray-100"
        >
          Next <MoveRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default Products;
