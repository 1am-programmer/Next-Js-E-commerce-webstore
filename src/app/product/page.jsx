import React from "react";
import Image from "next/image";
import { FaStar, FaInstagram, FaPinterest } from "react-icons/fa";
import { GrGrid } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { TbArrowsCross } from "react-icons/tb";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import Productbody from "@/components/Productbody";
import Description from "@/components/Description";

const page = () => {
  return (
    <div className=" mx-24">
      <main className="flex gap-6 justify-center">
        <div id="For four images" className="">
          <Image
            src="/images/1-small.jpg"
            width="600"
            height="600"
            className="
            h-[100px] w-[150px] mb-2"
          />

          <Image
            src="/images/2-small.jpg"
            width="600"
            height="600"
            className="
            h-[100px] w-[150px] mb-2"
          />

          <Image
            src="/images/3-small.jpg"
            width="600"
            height="600"
            className="
            h-[100px] w-[150px] mb-2 "
          />
          <Image
            src="/images/4-small.jpg"
            width="600"
            height="600"
            className="
            h-[100px] w-[150px] mb-2 "
          />
        </div>
        <div id="For main Image">
          <Image
            src="/images/1-large.jpg"
            width="600"
            height="600"
            className="
            h-[420px] w-[600px]"
          />
        </div>
        <div id="For text" className="flex flex-col gap-3">
          <p className="text-2xl">Dark yellow lace cut out swing dress</p>
          <p className="flex text-orange-500 gap-[3px] items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-600 " />
            <span className="text-gray-400 ">( 2 Reviews )</span>
          </p>
          <p className="text-[#c96] text-2xl">$84.00</p>
          <p className="text-gray-400">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing. Sed lectus.
          </p>

          <div className="flex gap-2 items-center">
            <p className="mr-4">Color:</p>
            <Image
              src={"/Images/3-small.jpg"}
              width="700"
              height="700"
              className="w-[40px] h-[40px]"
            />

            <Image
              src={"/Images/2-thumb.jpg"}
              width="700"
              height="700"
              className="w-[40px] h-[40px]"
            />
          </div>

          <div className="flex gap-2 items-center mb-2">
            <p>Size: </p>
            <select className="border border-gray-300 p-[4px] text-gray-600 ">
              <option className="selected hidden">Select a size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extralarge</option>
            </select>

            <p className="flex items-center gap-2 hover:text-[#c96]">
              <GrGrid />
              size guide
            </p>
          </div>

          <div className="text-[15px] flex  gap-4 items-center mb-4">
            <p>Qty:</p>
            <button className="flex justify-between gap-8 border border-gray-300 px-5 py-2">
              <p className="hover:text-[#c96]">-</p>
              <p>1</p>
              <p className="hover:text-[#c96]">+</p>
            </button>
          </div>

          <div className="flex justify-between items-center ">
            <button className=" text-[#c96] border border-[#c96] hover:bg-[#c96] hover:text-[white] flex items-center gap-2 text-center px-7 py-2">
              <MdOutlineAddShoppingCart /> ADD TO CART
            </button>

            <p className="flex gap-2 items-center">
              <FaRegHeart className="text-[#c96]" />
              <span className="hover:underline hover:text-[#c96]">
                Add to Wishlist
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <TbArrowsCross className="text-[#c96]" />
              <span className="hover:underline hover:text-[#c96]">
                Add to compare
              </span>
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <div>
              <p>Category: Women, Dresses, Yellow</p>
            </div>
            <div className="flex items-center gap-2">
              <p>Share:</p>
              <p className="icon-border">
                <GrFacebookOption />
              </p>
              <p className="icon-border">
                <IoLogoTwitter />
              </p>
              <p className="icon-border">
                <FaInstagram />
              </p>
              <p className="icon-border">
                <FaPinterest />
              </p>
            </div>
          </div>
        </div>
      </main>
      <Description />
      <Productbody />
    </div>
  );
};

export default page;
