"use client";

import { useState } from "react";
import Image from "next/image";
import CategoryImage from "./../assets/categoryImage.svg";
import { CategoryArray } from "@/types/api";
import Link from "next/link";

export default function CategoriesClient({ categories }: CategoryArray) {
  const [click, setClicked] = useState(false);

  const totalCardDisplayed = click ? categories : categories.slice(0, 6);
  return (
    <>
      <div className="flex justify-between font-semibold">
        <h1 className="sm:text-2xl text-base">Categories</h1>

        <button
          className="bg-[#E7FAFE] rounded sm:px-6 sm:py-2.5 px-3 py-1 cursor-pointer max-sm:text-[0.8rem]"
          onClick={() => setClicked(!click)}
        >
          {click ? "Show less" : "View All Categories"}
        </button>
      </div>

      <div className="grid lg:grid-cols-6 gap-8 mt-8 grid-cols-2 md:grid-cols-4 sm:grid-cols-3">
        {totalCardDisplayed.map((el, i) => (
          <Link href={`/categories?name=${el}`} key={i}>
            <div
              key={i}
              className={`h-32 p-2 rounded-2xl  flex items-end relative justify-center
              ${
                el === "clothing" || el === "footwear"
                  ? "bg-[#B03B191A]"
                  : "bg-[#7082461A]"
              }
            `}
            >
              <Image
                src={CategoryImage}
                alt="Category Image"
                className="absolute -top-6 flex justify-center rounded-md"
              />
              <h1 className="sm:text-xl font-semibold">{el}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
