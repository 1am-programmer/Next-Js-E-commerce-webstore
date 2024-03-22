import React from "react";
import Image from "next/image";
import Shopbody from "@/components/Shopbody";
import { CiGrid41, CiGrid32 } from "react-icons/ci";

import { BsGrid3X2GapFill } from "react-icons/bs";

const page = () => {
  return (
    <div>
      <div className="bg-Shophero h-[200px] w-full flex flex-col items-center justify-center mt-10 mb-10">
        <p className="text-4xl">List</p>
        <p className="text-2xl text-[#c96]">Shop</p>
      </div>
      <div className="flex justify-between container">
        <div className="flex gap-10">
          <p>Filters:</p>
          <p className="text-[#c96]">Clean All</p>
        </div>
        <p className="text-gray-400">
          Showing <span className="text-black"> 9 of 56 </span> Products
        </p>
        <div className="flex items-center gap-2">
          <p>Sort by:</p>
          <select className="border p-2">
            <option value="">Most Popular</option>
            <option value="">Most rated</option>
            <option value="">Date</option>
          </select>
          <div className="text-xl flex items-center gap-2">
            <CiGrid41 className="hover:text-black text-gray-600" />
            <CiGrid32 className="hover:text-black text-gray-600" />
            <BsGrid3X2GapFill className="hover:text-black text-gray-600" />
          </div>
        </div>
      </div>
      <Shopbody />
      <hr className="mt-2" />

      <div>
        {/* file:///C:/Users/LATITUDE%205480/Documents/my%20work/molla-eCommerce-html-template/category-list.html# */}
      </div>
    </div>
  );
};

export default page;
