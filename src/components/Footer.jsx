import React from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import {
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-4 pt-10 pb-20">
        <div className="flex-2 max-w-[400px]">
          <Image
            src={"/images/logo-footer.png"}
            width="700"
            height="700"
            alt="Image"
            className="h-[30px] w-[110px] mb-3"
          />
          <p className="mb-4 text-gray-600">
            Praesent dapibus, neque id cursus ucibus, tortor neque egestas
            augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
            dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
          </p>
          <div className="flex gap-2 items-center">
            <div>
              <p>Got Question? Call us 24/7</p>
              <p>+0123 456 789</p>
            </div>
            <div>
              <Image
                src={"/images/payments-visa.png"}
                width="700"
                height="700"
                alt="Image"
                className="h-[20px] w-[280px] mb-3"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-bold mb-3">Useful links</p>

          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              About Molla
            </a>
          </p>

          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              How to shop on Molla
            </a>
          </p>

          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              FAQ
            </a>
          </p>

          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Contact us
            </a>
          </p>

          <p className="">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Login
            </a>
          </p>
        </div>
        <div className="flex-1">
          <p className="font-bold mb-3">Customer Service</p>

          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Payment Methods
            </a>
          </p>
          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Money-back guarantee!
            </a>
          </p>
          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Returns
            </a>
          </p>

          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Shipping
            </a>
          </p>

          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Terms and conditions
            </a>
          </p>

          <p className="">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex-1">
          <p className="font-bold mb-3">My Account</p>
          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Sign In
            </a>
          </p>

          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              View Cart
            </a>
          </p>
          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              My Wishlist
            </a>
          </p>

          <p className="mb-2">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Track My Order
            </a>
          </p>

          <p className="mb-">
            <a href="#" className="text-gray-600 hover:text-[#c96]">
              Help
            </a>
          </p>
        </div>
        <div className="flex-1">
          <p className="font-bold mb-3">Sign Up to Newsletter</p>
          <p className=" mb-3">
            Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.
          </p>
          <div className="flex items-center p-2 border h-fit w-fit">
            <input type="text" placeholder="Input your email" className="p-2" />
            <button className="bg-black p-2">
              <IoArrowForwardSharp className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-gray-600">
        <div>
          <p>Copyright 2019 Molla Store. All Rights Reserved.</p>
        </div>

        <div className="gap- flex justify-center gap-2">
          <p>Social Media</p>
          <button className="bg-blue-600 p-2 h-fit rounded-full">
            <a href="#">
              <FaFacebookF className="text-white text-[10px]" />
            </a>
          </button>

          <button className="bg-blue-500 p-2 h-fit rounded-full">
            <a href="#">
              <FaTwitter className="text-white text-[10px]" />
            </a>
          </button>

          <button className="bg-red-600 p-2 h-fit rounded-full">
            <a href="#">
              <FaInstagram className="text-white text-[10px]" />
            </a>
          </button>

          <button className="bg-red-600 p-2 h-fit rounded-full">
            <a href="#">
              <FaPinterest className="text-white text-[10px]" />
            </a>
          </button>

          <button className="bg-red-600 p-2 h-fit rounded-full">
            <a href="#">
              <FaYoutube className="text-white text-[10px]" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
