import React from "react";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
const Video = () => {
  return (
    <div className="bg-hero min-h-screen pt-[5rem] pb-20 ">
      <div className="flex flex-col gap-4 justify-center items-center pt-10">
        <p className="text-white text-2xl">Spring / Summer</p>
        <h1 className="font-bold text-4xl text-white">
          The New Romantic Collection 2019
        </h1>

        <button className="text-[#c96]  hover:text-black">
          <a href="https://www.youtube.com/watch?v=vBPgmASQ1A0">
            <FaPlayCircle className="text-6xl " />
          </a>
        </button>
      </div>
    </div>
  );
};
export default Video;
