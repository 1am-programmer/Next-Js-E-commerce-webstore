import React from "react";

import {
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Review = () => {
  return (
    <div className="container mx-auto pt-15 pb-20 text-gray-600">
      <div className="grid grid-cols-2 divide-x">
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-4 text-black">Shop Social</h1>
          <p className="text-grey-400 mb-4 ">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci
          </p>

          <div className="gap- flex justify-center gap-2">
            <button className="bg-blue-600 p-4 rounded-full">
              <a href="#">
                <FaFacebookF className="text-white text-[20px]" />
              </a>
            </button>
            <button className="bg-blue-600 p-4 rounded-full">
              <a href="#">
                <FaTwitter className="text-white text-[20px]" />
              </a>
            </button>
            <button className="bg-red-600 p-4 rounded-full">
              <a href="#">
                <FaInstagram className="text-white text-[20px]" />
              </a>
            </button>
            <button className="bg-red-500 p-4 rounded-full">
              <a href="#">
                <FaPinterest className="text-white text-[20px]" />
              </a>
            </button>
            <button className="bg-red-600 p-4 rounded-full">
              <a href="#">
                <FaYoutube className="text-white text-[20px]" />
              </a>
            </button>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-4 text-black">
            Our Costumers Say
          </h1>
          <p className="text-grey-600">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. fermentum. Aliquam porttitor mauris sit amet
            orci.
          </p>
          <h2 className="text-black">Charlie Smith,</h2>
          <p>Customer</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
