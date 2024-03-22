import React from "react";
import { LuRefreshCw } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Checkout from "@/components/Checkout";

const page = () => {
  return (
    <div>
      <div className="bg-Shophero h-[200px] w-full flex flex-col items-center justify-center mt-10 mb-10">
        <p className="text-5xl">Checkout</p>
        <p className="text-2xl text-[#c96]">Shop</p>
      </div>
      <Checkout />
      <hr className="mt-2" />
    </div>
  );
};

export default page;
