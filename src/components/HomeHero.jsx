import { IoArrowDown } from "react-icons/io5";

const HomeHero = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className=" bg-hero absolute inset-0 bg-cover">
        {/* {"INSET MEANS Top right, left, bottom"} */}
        <div className=" bg-black absolute inset-0 opacity-35"></div>
      </div>
      <div className="relative z-20 -translate-y-[80px] flex flex-col items-center gap-4">
        <p className="text-gray-400 text-2xl">Want to know what&apos;s hot?</p>
        <h1 className="font-bold text-5xl text-white">Spring Lookbook 2019</h1>
        <button className="border border-[#c96] text-white px-4 py-2 hover:bg-[#c96] flex gap-2 items-center ">
          START SCROLLING
          <IoArrowDown />
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
