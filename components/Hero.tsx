import Hero2 from "./../assets/Hero2.svg";
import Image from "next/image";
import HotDeals from "./../assets/HotDeals.svg";
import PersonImage from "./../assets/PersonImage.svg";
import { DollarSign, Tag, Play } from "lucide-react";

function Hero() {
  return (
    <div className="container mx-auto mt-6 flex flex-col lg:flex-row  px-4">
      <div className="w-full lg:w-1/2 bg-[#E7FAFE] p-6 lg:p-8 rounded flex flex-col gap-8 lg:gap-12">
        <div className="flex gap-2.5 bg-white w-fit px-6 py-1.5 rounded-full">
          <Image src={HotDeals} alt="icon" />
          <h1 className="font-semibold">Hot Deals</h1>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          <h1 className="text-3xl lg:text-5xl font-semibold leading-tight">
            Enjoy 10% of in all our products.
          </h1>
          <p className="text-[#00000099] text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>

        <div className="flex flex-wrap gap-4 lg:gap-6">
          <button className="flex gap-3 bg-[#0000000D] px-6 py-3 rounded-full items-center">
            <DollarSign className="bg-black text-white rounded-full p-1 w-6 h-6" />
            Lorem
          </button>
          <button className="flex gap-3 bg-[#0000000D] px-6 py-3 rounded-full items-center">
            <Tag className="bg-black text-white rounded-full p-1 w-6 h-6" />
            Epsum
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
          <div className="flex gap-4 items-center">
            <div>
              <Image src={PersonImage} alt="User image" className="w-12 h-12" />
            </div>
            <div>
              <h1 className="font-bold">John Smith</h1>
              <h1 className="text-[#00000099] text-sm">15 March 2022</h1>
            </div>
          </div>
          <div>
            <button className="bg-[#000000] text-white flex gap-3 items-center cursor-pointer sm:py-3 sm:px-6 rounded-md py-2 px-4">
              View Products
              <Play className="bg-white text-black rounded-full p-1 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
        <Image
          src={Hero2}
          alt="Hero section second pic"
          fill
          className="object-cover rounded"
        />
      </div>
    </div>
  );
}

export default Hero;
