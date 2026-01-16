"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Search, DollarSign, Tag, MoveLeft, MoveRight } from "lucide-react";
import ProductImage from "./../assets/ProductImage.svg";
import { useDebouncedCallback } from "use-debounce";
import { Product } from "@/types/api";
import Link from "next/link";

function Products() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get(
          `https://fakeapi.net/products?page=${page}&limit=4`
        );
        setAllProducts(res.data.data);
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [page]);

  function handleSearch(value: string) {
    if (value.trim() === "") {
      setProducts(allProducts);
      return;
    }

    const filteredProducts = allProducts.filter((product) =>
      product.brand.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(filteredProducts);
  }

  const debouncedFiltered = useDebouncedCallback(handleSearch, 300);

  return (
    <div className="container mx-auto px-5 mt-12">
      <h1 className="text-center text-2xl font-semibold">Our Products</h1>

      <div className="flex justify-center mt-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              debouncedFiltered(e.target.value);
            }}
            className="p-2 w-full border border-gray-300"
          />
          <Search className="absolute text-white bg-blue-500 w-9 h-9 rounded cursor-pointer right-0 top-0.5 p-2" />
        </div>
      </div>
      {products.length === 0 && (
        <p className=" text-center text-xl font-semibold mt-6 ">
          No products available
        </p>
      )}

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
        {products.map((product, i) => (
          <Link key={i} href={`/product/${product.brand}`}>
            <div className="rounded-md p-4">
              <div className="sm:w-full h-44 mb-4 bg-gray-100 rounded relative">
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
          </Link>
        ))}
      </div>

      <div className="mt-8 mb-8 flex justify-center items-center flex-wrap sm:gap-2">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="flex items-center gap-1 sm:px-3 sm:py-2 border rounded hover:bg-gray-100 px-1 py-1"
        >
          <MoveLeft size={18} /> Previous
        </button>

        {[1, 2, 3, 4, 5].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-2 py-1 sm:px-3 sm:py-2 border rounded ${
              page === p
                ? "font-bold bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => page < 5 && setPage(page + 1)}
          className="px-1 py-1 flex items-center gap-1 sm:px-3 sm:py-2 border rounded hover:bg-gray-100"
        >
          Next <MoveRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default Products;
