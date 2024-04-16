import React from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { GoPackageDependencies } from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch, CiSettings } from "react-icons/ci";
import { HiUsers } from "react-icons/hi2";
import { FaEnvelope } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Datatable } from "@/components/Datatable";
import Link from "next/link";
import Nike from "@/components/Nike";
const page = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-6 w-full">
        <div className="bg-black w-fit p-2">
          <Image
            src="/images/logo.png"
            width="500"
            height="300"
            className="w-[150px] h-[40px] flex-1"
          />
        </div>

        <Link
          href="/"
          className=" flex items-center gap-2  rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
        >
          <MdDashboard />
          Dashboard
        </Link>

        <Link
          href="/admin/order"
          className=" flex items-center gap-2  rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
        >
          <FaCartShopping />
          Orders
        </Link>

        <Link
          href="/admin/products"
          className=" flex items-center gap-2  rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
        >
          <GoPackageDependencies /> Products
        </Link>

        <Link
          href="/"
          className=" flex items-center gap-2  rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
        >
          <HiUsers /> Customer
        </Link>

        <Link
          href="/"
          className=" flex items-center gap-2  rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
        >
          <FaEnvelope /> Message
        </Link>

        <Link
          href="/"
          className=" flex items-center gap-2  rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
        >
          <CiSettings /> Settings
        </Link>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p className="font-semibold text-2xl">Products</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <CiSearch className="translate-x-8 text-xl" />
            <input
              type="search"
              placeholder="Search product.."
              className="px-9 py-3 bg-gray-200 rounded-full"
            />
          </div>
          <button className="border rounded-full p-3 border-black font-semibold">
            Add new product +
          </button>
        </div>
      </div>

      <Nike />
    </div>
  );
};

export default page;
