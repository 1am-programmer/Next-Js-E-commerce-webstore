import React from "react";
import Image from "next/image";
import {
  IoArrowForwardSharp,
  IoHeartOutline,
  IoGlassesOutline,
  IoTrendingDown,
} from "react-icons/io5";
// import {  } from "react-icons/io5";

const Aboutlook = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="flex gap-[5rem] justify-center mx-auto">
        <div id="About look div">
          <div className="max-w-[500px] text-center mb-10">
            <h1 className="font-bold mb-5"> About This Look</h1>
            <p className="text-center text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis
            </p>
          </div>

          <div className="flex gap-6 ">
            <div>
              <div className=" relative border group overflow-hidden">
                <Image
                  src="/images/product-1.jpg"
                  width="700"
                  height="700"
                  className="w-[240px] h-[320px]"
                />
                <div
                  id="Hovered icons"
                  className="absolute w-full bottom-0 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000"
                >
                  <div className="flex flex-col items-end gap-2 mr-2">
                    <div className=" w-fit p-2 bg-white rounded-full hover:bg-[#c96] hover:text-white">
                      <IoHeartOutline />
                    </div>
                    <div className=" w-fit p-2 bg-white rounded-full hover:bg-[#c96] hover:text-white">
                      <IoGlassesOutline />
                    </div>
                    <div className=" w-fit p-2 bg-white rounded-full hover:bg-[#c96] hover:text-white">
                      <IoTrendingDown />
                    </div>
                  </div>
                  <p className="bg-white text-center  px-4 py-2 hover:bg-[#c96] hover:text-white mt-5">
                    ADD TO CART
                  </p>
                </div>
              </div>
              <p> Suede Moto Jacket</p>
              <p className="text-[#c96]">Now $1,298.00</p>
              <p>Was $1,400.00</p>
            </div>

            <div>
              <div className=" relative border group overflow-hidden">
                <Image
                  src="/images/product-2.jpg"
                  width="700"
                  height="700"
                  className="w-[240px] h-[320px]"
                />
                <div
                  id="Hovered icons"
                  className="absolute w-full bottom-0 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000"
                >
                  <div className="flex flex-col items-end gap-2 mr-2">
                    <div className=" w-fit p-2 bg-white rounded-full hover:bg-[#c96] hover:text-white">
                      <IoHeartOutline />
                    </div>
                    <div className=" w-fit p-2 bg-white rounded-full hover:bg-[#c96] hover:text-white">
                      <IoGlassesOutline />
                    </div>
                    <div className=" w-fit p-2 bg-white rounded-full hover:bg-[#c96] hover:text-white">
                      <IoTrendingDown />
                    </div>
                  </div>
                  <p className="bg-white text-center  px-4 py-2 hover:bg-[#c96] hover:text-white mt-5">
                    ADD TO CART
                  </p>
                </div>
              </div>
              <p className="hover:text-[#c96]"> Henry Leather Backpack</p>

              <p> $448.00</p>
            </div>
          </div>
        </div>

        <div className="relative z-30 border h-fit">
          <Image
            src={"/images/banner-product-1.jpg"}
            width="700"
            height="700"
            className="w-[521px]
          h-[521px]"
          />
          <div className="absolute bottom-2 left-20 top-10 text-white z-40">
            <p className="font-bold text-3xl">01. Get your </p>
            <p className="font-bold text-3xl">inspiration</p>
            <p className="font-bold text-3xl mb-2">in the street.</p>
            <p className=" mb-2">IN THIS LOOK</p>
            <ul className="list-disc ml-5">
              <li className="">Moto Jacket</li>
              <li className="">Henry Backpack</li>
            </ul>
            <p className=" mt-4 mb-4">$98.00 - $1,298.00</p>
            <button className="border border-[#c96] text-white px-5 py-3 hover:bg-[#c96] flex gap-2 items-center ">
              BUY ALL <IoArrowForwardSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutlook;
