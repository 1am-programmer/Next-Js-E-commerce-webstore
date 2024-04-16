// https://dribbble.com/shots/22812119-FootWear-Admin-E-Commerce-Dashboard
// https://dribbble.com/shots/15514758-E-commerce-admin-dashboard-Order-page/attachments/7292750?mode=media
import Image from "next/image";
import React from "react";
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

const page = () => {
  return (
    <div className="mx-auto container">
      <div id="Main flex" className="flex gap-4">
        <div id="first flex">
          <div
            className="mb-10 bg-black w-fit
          p-2 ml-7 mr-5"
          >
            <Image
              src="/images/logo.webp"
              width="700"
              height="700"
              className="h-[25px] w-[50px]"
            />
          </div>
          <div className="text-center pl-5 pr-5 flex-col flex gap-3">
            <Link
              href="/"
              className=" flex items-center gap-2 bg-gray-400/50 rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
            >
              <MdDashboard />
              Dashboard
            </Link>

            <Link
              href="/admin/order"
              className=" flex items-center gap-2 bg-gray-400/50 rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
            >
              <FaCartShopping />
              Orders
            </Link>

            <Link
              href="/admin/products"
              className=" flex items-center gap-2 bg-gray-400/50 rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
            >
              <GoPackageDependencies /> Products
            </Link>

            <Link
              href="/"
              className=" flex items-center gap-2 bg-gray-400/50 rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
            >
              <HiUsers /> Customer
            </Link>

            <Link
              href="/"
              className=" flex items-center gap-2 bg-gray-400/50 rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
            >
              <FaEnvelope /> Message
            </Link>

            <Link
              href="/"
              className=" flex items-center gap-2 bg-gray-400/50 rounded-sm px-2 py-1 text-gray-600 hover:text-[#c96]"
            >
              <CiSettings /> Settings
            </Link>
          </div>
        </div>
        <div id="second flex" className="flex-1">
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <input
                type="search"
                placeholder="search Product"
                className="border border-gray-400 p-2 rounded-md"
              />
              <CiSearch className="-translate-x-6" />
            </div>
            <div className="flex gap-2 items-center">
              <p>
                <IoIosNotifications />
              </p>

              <Image
                src="/images/dp.png"
                width="700"
                height="700"
                className="h-[30px] w-[30px] rounded-sm"
              />

              <p>Carter Kenter</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-bold mb-6">
              Order
              <span className="text-gray-500 text-[10px] pl-1">
                15 Orders found
              </span>
            </p>
            <button className="flex items-center gap-2 bg-[#c96] p-2 text-white rounded-sm">
              <SlCalender /> March - April 2021
            </button>
          </div>
          <div className="flex gap-5 mb-5 ">
            <p className="underline text-[#c96]">All orders</p>
            <p>Completed</p>
            <p>Pending</p>
            <p>Cancel</p>
          </div>
          <div id="TABLE">
            <Datatable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
