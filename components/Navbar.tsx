"use client";
import Image from "next/image";
import ECOM from "./../assets/ECOM.svg";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="sticky top-0 bg-white z-50 ">
        <div className="relative max-sm:hidden py-4 flex justify-between items-center container mx-auto">
          <div className="flex items-center">
            <Image src={ECOM} alt="Logo" className="w-10 h-10" />
          </div>
          <ul className="flex gap-9 cursor-pointer items-center">
            <li>Home</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
          <div className="flex gap-6 cursor-pointer items-center">
            {/* <Image src={Facebook} alt="Facebook icon" className="w-5 h-5" />
            <Image src={Twitter} alt="Twitter icon" className="w-5 h-5" />
            <Image src={Instagram} alt="Instagram icon" className="w-5 h-5" /> */}
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div className="sm:hidden py-3 flex justify-between items-center container mx-auto px-3">
          <Image src={ECOM} alt="Logo" className="w-10 h-10" />

          {show ? (
            <X
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShow(false)}
            />
          ) : (
            <Menu
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShow(true)}
            />
          )}
          <ul
            className={`fixed top-[58px] left-0 w-full bg-white transition-transform duration-300 ease-in-out z-40 flex flex-col gap-4 py-6 px-5 shadow-lg ${
              show ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <li>Home</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>About Us</li>
            <div className="flex gap-6 mt-4 pt-4 ">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
