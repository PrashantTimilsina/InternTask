"use client";
import Image from "next/image";

import SubscribeBG from "./../assets/subscribe.svg";
import { useState } from "react";
import { toast } from "sonner";

function Subscribe() {
  const [email, setEmail] = useState("");
  function handleSubscribe() {
    if (email === "") {
      toast.error("Please fill the required field", { duration: 1000 });
      return;
    }
    localStorage.setItem("email", JSON.stringify(email));
    toast.success("Subscribe successfull", { duration: 1000 });
    setEmail("");
  }
  return (
    <div className="relative sm:mt-6 max-sm:px-6 container mx-auto">
      <div className="absolute inset-0 z-0 h-80">
        <Image
          src={SubscribeBG}
          alt="subscribe bg"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center flex-col mt-28 gap-3">
        <h1 className="text-3xl font-bold ">Subscribe to get the first news</h1>
        <h2 className="mt-4 text-[#00000099]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor
          <br /> incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </h2>
        <div className="mt-4 max-sm:flex max-sm:flex-col max-sm:gap-2">
          <input
            type="email"
            placeholder="Your email address.."
            className="w-72 px-6 py-2 outline-none border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-black text-white rounded px-6 py-2 cursor-pointer"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
