"use client";

import Image from "next/image";
import SubscribeBG from "./../assets/subscribe.svg";
import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please fill the required field");
      setShow(false);
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }

    localStorage.setItem("email", JSON.stringify(email));

    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
    setError("");
    setEmail("");
  }

  return (
    <div className="relative sm:mt-6 max-sm:px-6 container mx-auto">
      <div className="absolute inset-0 z-0 h-80">
        <Image
          src={SubscribeBG}
          alt="subscribe bg"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center flex-col mt-28 gap-3">
        <h1 className="text-3xl font-bold">Subscribe to get the first news</h1>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-2">
            <input
              type="email"
              placeholder="Your email address.."
              className="w-72 px-6 py-2 outline-none border rounded"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
            <button
              type="submit"
              className="bg-black text-white rounded px-6 py-2 cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </form>

        {error && <span className="text-red-600 font-semibold">{error}</span>}
        {show && (
          <span className="text-green-600 font-semibold">
            Subscribe successful
          </span>
        )}
      </div>
    </div>
  );
}

export default Subscribe;
