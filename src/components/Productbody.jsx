import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {
  IoHeartOutline,
  IoGlassesOutline,
  IoTrendingDown,
} from "react-icons/io5";

const Productbody = () => {
  return (
    <div className="pt-10">
      <p className=" text-2xl text-center mt-4 mb-4">You May Also Like</p>
      <div>
        <div id="flex" className="flex justify-center items-cente gap-3">
          <div className=" max-w-245px ">
            <div className=" relative border group overflow-hidden">
              <div className="h-[300px] ">
                <Image
                  src="/images/carrt-1.jpg"
                  width="700"
                  height="700"
                  className="w-[240px] h-full"
                />
              </div>
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
            <div className="mt-2 bg-[#FFF] items-center justify-center">
              <p className="text-center py-[3px]">Women</p>
              <p className="hover:text-[#c96] text-center items-center container max-w-[240px]">
                Brown paper waist pencil skirt
              </p>
              <p className="text-[#c96] text-center text-xl"> $60.00</p>
              <p className="text-gray-400 container text-[16px] flex items-center text-center gap-[3px] mb-2">
                <FaStar className="text-orange-400" />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                (2 Reviews)
              </p>
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={"/images/001.jpg"}
                  width="700"
                  height="700"
                  className="h-[40px] w-[40px]"
                />
                <Image
                  src={"/images/002.jpg"}
                  width="700"
                  height="700"
                  className="h-[40px] w-[40px]"
                />

                <Image
                  src={"/images/003.jpg"}
                  width="700"
                  height="700"
                  className="h-[40px] w-[40px]"
                />
              </div>
            </div>
          </div>

          <div className="max-w-245px ">
            <div className=" relative border group overflow-hidden">
              <div className="h-[300px]">
                <Image
                  src="/images/carrt-2.jpg"
                  width="700"
                  height="700"
                  className="w-[240px] h-full"
                />
              </div>
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
            <div className="mt-2 bg-[#FFF] items-center justify-center">
              <p className="text-center py-[3px]">Jacket</p>
              <p className="hover:text-[#c96] text-center items-center container max-w-[240px]">
                Khaki utility boiler jumpsuit
              </p>
              <p className="text-gray-300 text-center text-xl"> $120.00</p>
              <p className="text-orange-500 container text-[16px] flex items-center text-center gap-[3px] mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-400" />
                <span className="text-gray-400">(6 Reviews)</span>
              </p>
            </div>
          </div>

          <div className="max-w-245px ">
            <div className=" relative border group overflow-hidden">
              <div className="h-[300px]">
                <Image
                  src="/images/carrt-3.jpg"
                  width="700"
                  height="700"
                  className="w-[240px] h-full"
                />
              </div>
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
            <div className="mt-2 bg-[#FFF] items-center justify-center">
              <p className="text-center py-[3px]">Shoes</p>
              <p className="hover:text-[#c96] text-center items-center container max-w-[240px]">
                Light brown studded Wide fit wedges
              </p>
              <p className="text-[#c96] text-center text-xl"> $110.00</p>
              <p className=" text-orange-400  container text-[16px] flex items-center text-center gap-[3px] mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-400" />
                <span className="text-gray-400">(1 Reviews)</span>
              </p>
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={"/images/004.jpg"}
                  width="700"
                  height="700"
                  className="h-[40px] w-[40px]"
                />
                <Image
                  src={"/images/005.jpg"}
                  width="700"
                  height="700"
                  className="h-[40px] w-[40px]"
                />

                <Image
                  src={"/images/006.jpg"}
                  width="700"
                  height="700"
                  className="h-[40px] w-[40px]"
                />
              </div>
            </div>
          </div>

          <div className="max-w-245px ">
            <div className=" relative border group overflow-hidden">
              <div className=" h-[300px]">
                <Image
                  src="/images/carrt-4.jpg"
                  width="700"
                  height="700"
                  className="w-[240px] h-full object-cover"
                />
              </div>
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
            <div className="mt-2 bg-[#FFF] items-center justify-center">
              <p className="text-center py-[3px]">Jumpers</p>
              <p className="hover:text-[#c96] text-center items-center container max-w-[240px]">
                Yellow button front tea top
              </p>
              <p className="text-gray-300 text-center text-xl"> $56.00</p>
              <p className=" text-gray-400 container text-[16px] flex items-center text-center gap-[3px] mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-400">(0 Reviews)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productbody;
